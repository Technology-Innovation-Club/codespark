import { useQuery, useMutation, type UseQueryResult } from "@tanstack/react-query";
import { convexQuery, useConvexMutation } from "@convex-dev/react-query";
import { api } from "../../convex/_generated/api";
import type { Id } from "../../convex/_generated/dataModel";

/* -------------------------------- wire types ------------------------------- */
/* The hub UI consumes Supabase-style snake_case shapes. These types mirror the
   Convex documents after translating `_id` -> `id`. */

export type Category = {
  id: string;
  slug: string;
  name: string;
  description?: string | null;
  icon?: string | null;
  color: string;
  sort_order: number;
};

export type Module = {
  id: string;
  number: number;
  title: string;
  subtitle?: string | null;
  week_start: number;
  week_end: number;
  topics: string[];
  color: string;
  sort_order: number;
};

export type Resource = {
  id: string;
  title: string;
  platform?: string | null;
  description?: string | null;
  url: string;
  logo_url?: string | null;
  category_id?: string | null;
  module_id?: string | null;
  week?: number | null;
  difficulty: "beginner" | "intermediate" | "advanced";
  duration_minutes: number;
  has_certificate: boolean;
  tags: string[];
  resource_type: string;
  use_cases?: string | null;
  prompt_template?: string | null;
  is_recommended: boolean;
  created_at: string;
};

export type Book = {
  id: string;
  title: string;
  author: string;
  cover_url?: string | null;
  category_id?: string | null;
  difficulty: "beginner" | "intermediate" | "advanced";
  reading_minutes: number;
  description?: string | null;
  download_url?: string | null;
  drive_url?: string | null;
  color: string;
};

export type ResourceProgress = {
  id: string;
  user_id: string;
  resource_id: string;
  status: "not_started" | "in_progress" | "completed";
  bookmarked: boolean;
  favorite: boolean;
  completed_at?: number | null;
  updated_at: number;
};

export type BookProgress = {
  id: string;
  user_id: string;
  book_id: string;
  status: "not_started" | "in_progress" | "completed";
  progress_pct: number;
  favorite: boolean;
  bookmarked: boolean;
  notes?: string | null;
  reflection?: string | null;
  finished_at?: number | null;
  updated_at: number;
};

export type Note = {
  id: string;
  user_id: string;
  title: string;
  content: string;
  pinned: boolean;
  created_at: number;
  updated_at: number;
};

export type Streak = {
  id: string;
  user_id: string;
  current_streak: number;
  longest_streak: number;
  reading_streak: number;
  last_active_date?: string | null;
};

export type DailyActivity = {
  id: string;
  user_id: string;
  activity_date: string;
  minutes: number;
  resources_completed: number;
};

export type Achievement = {
  id: string;
  code: string;
  title: string;
  description: string;
  icon: string;
  xp: number;
  color: string;
};

export type UserAchievement = {
  id: string;
  user_id: string;
  achievement_id: string;
  earned_at: number;
};

export type Announcement = {
  id: string;
  title: string;
  body: string;
};

export type Profile = {
  id: string;
  user_id: string;
  email?: string | null;
  full_name?: string | null;
  username?: string | null;
  team?: string | null;
  avatar_url?: string | null;
  xp: number;
  level: number;
  is_admin?: boolean | null;
};

export type AttendanceRecord = {
  id: string;
  session_id: string;
  attended_at: number;
  code: string;
  expires_at: number;
  duration_minutes: number;
};

export type AdminAttendance = {
  session: {
    id: string;
    code: string;
    duration_minutes: number;
    expires_at: number;
    expired: boolean;
    created_at: number;
  };
  attendees: Array<{
    user_id: string;
    name: string;
    attended_at: number;
  }>;
} | null;

/* ------------------------------- catalogue ------------------------------- */

export function useCategories() {
  return useQuery(convexQuery(api.queries.getCategories, {})) as UseQueryResult<Category[]>;
}

export function useModules() {
  return useQuery(convexQuery(api.queries.getModules, {})) as UseQueryResult<Module[]>;
}

export function useResources() {
  return useQuery(convexQuery(api.queries.getResources, {})) as UseQueryResult<Resource[]>;
}

export function useBooks() {
  return useQuery(convexQuery(api.queries.getBooks, {})) as UseQueryResult<Book[]>;
}

export function useAchievements() {
  return useQuery(convexQuery(api.queries.getAchievements, {})) as UseQueryResult<Achievement[]>;
}

export function useAnnouncements() {
  return useQuery(convexQuery(api.queries.getAnnouncements, {})) as UseQueryResult<
    Announcement[]
  >;
}

/* -------------------------------- progress -------------------------------- */

export function useProfile() {
  return useQuery(convexQuery(api.queries.getProfile, {})) as UseQueryResult<Profile | null>;
}

export function useStreak() {
  return useQuery(convexQuery(api.queries.getStreak, {})) as UseQueryResult<Streak | null>;
}

export function useDailyActivity() {
  return useQuery(convexQuery(api.queries.getDailyActivity, {})) as UseQueryResult<DailyActivity[]>;
}

export function useResourceProgress() {
  return useQuery(
    convexQuery(api.queries.getResourceProgress, {}),
  ) as UseQueryResult<ResourceProgress[]>;
}

export function useBookProgress() {
  return useQuery(
    convexQuery(api.queries.getBookProgress, {}),
  ) as UseQueryResult<BookProgress[]>;
}

export function useNotes() {
  return useQuery(convexQuery(api.queries.getNotes, {})) as UseQueryResult<Note[]>;
}

export function useUserAchievements() {
  return useQuery(
    convexQuery(api.queries.getUserAchievements, {}),
  ) as UseQueryResult<UserAchievement[]>;
}

/* -------------------------------- mutations -------------------------------- */
/* Convex mutations are reactive: subscribers update automatically. We still
   invalidate a couple of derived keys for safety via QueryClient. */

export function useUpdateResourceProgress() {
  const mutate = useConvexMutation(api.mutations.updateResourceProgress);
  return useMutation({
    mutationFn: (input: {
      resource: string;
      patch: Partial<Pick<ResourceProgress, "status" | "bookmarked" | "favorite">>;
      minutes?: number;
    }) => mutate({ resourceId: input.resource as Id<"resources">, ...input.patch, minutes: input.minutes ?? 0 }),
  });
}

export function useUpdateBookProgress() {
  const mutate = useConvexMutation(api.mutations.updateBookProgress);
  return useMutation({
    mutationFn: (input: {
      book: string;
      patch: Partial<
        Pick<
          BookProgress,
          "status" | "progress_pct" | "favorite" | "bookmarked" | "notes" | "reflection"
        >
      >;
    }) => mutate({
      bookId: input.book as Id<"books">,
      ...input.patch,
      notes: input.patch.notes ?? undefined,
      reflection: input.patch.reflection ?? undefined,
    }),
  });
}

export function useSaveNote() {
  const mutate = useConvexMutation(api.mutations.saveNote);
  return useMutation({
    mutationFn: (note: { id?: string; title: string; content: string; pinned?: boolean }) =>
      mutate({ ...note, id: note.id as Id<"notes"> | undefined }),
  });
}

export function useDeleteNote() {
  const mutate = useConvexMutation(api.mutations.deleteNote);
  return useMutation({
    mutationFn: (id: string) => mutate({ id: id as Id<"notes"> }),
  });
}

export function useCompleteProfile() {
  const mutate = useConvexMutation(api.mutations.completeProfile);
  return useMutation({
    mutationFn: (input: { username: string; full_name?: string; team?: string; email?: string }) =>
      mutate(input),
  });
}

/* ------------------------------- attendance ------------------------------- */

export function useCreateAttendanceSession() {
  const mutate = useConvexMutation(api.attendance.createAttendanceSession);
  return useMutation({
    mutationFn: (input: { durationMinutes?: number }) => mutate(input),
  });
}

export function useMarkAttendance() {
  const mutate = useConvexMutation(api.attendance.markAttendance);
  return useMutation({
    mutationFn: (input: { code: string }) => mutate(input),
  });
}

export function useMyAttendance() {
  return useQuery(convexQuery(api.attendance.getMyAttendance, {})) as UseQueryResult<
    AttendanceRecord[]
  >;
}

export function useAdminAttendance(now: number) {
  return useQuery(
    convexQuery(api.attendance.getAdminAttendance, { now }),
  ) as UseQueryResult<AdminAttendance>;
}