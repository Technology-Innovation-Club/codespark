import { internalMutation } from "./_generated/server";
import type { Id } from "./_generated/dataModel";

export const seed = internalMutation({
  handler: async (ctx) => {
    const categories: Array<{
      slug: string;
      name: string;
      description: string;
      icon: string;
      color: string;
      sort_order: number;
    }> = [
      { slug: "entrepreneurship", name: "Entrepreneurship", description: "Build the founder mindset from first principles.", icon: "rocket", color: "orange", sort_order: 1 },
      { slug: "startup-building", name: "Startup Building", description: "From idea to a company that ships.", icon: "building", color: "yellow", sort_order: 2 },
      { slug: "design-thinking", name: "Design Thinking", description: "Empathise, ideate, prototype, test.", icon: "lightbulb", color: "purple", sort_order: 3 },
      { slug: "product-management", name: "Product Management", description: "Ship products people actually want.", icon: "clipboard-list", color: "blue", sort_order: 4 },
      { slug: "ui-ux", name: "UI/UX", description: "Interfaces that feel obvious.", icon: "palette", color: "pink", sort_order: 5 },
      { slug: "software-development", name: "Software Development", description: "Write, ship and maintain real software.", icon: "code", color: "teal", sort_order: 6 },
      { slug: "artificial-intelligence", name: "Artificial Intelligence", description: "Build with AI, not just about it.", icon: "sparkles", color: "purple", sort_order: 7 },
      { slug: "cloud-computing", name: "Cloud Computing", description: "Deploy and scale on modern infrastructure.", icon: "cloud", color: "blue", sort_order: 8 },
      { slug: "cybersecurity", name: "Cybersecurity", description: "Protect what you build.", icon: "shield", color: "green", sort_order: 9 },
      { slug: "marketing", name: "Marketing & Growth", description: "Get your product in front of people.", icon: "megaphone", color: "orange", sort_order: 10 },
      { slug: "leadership", name: "Leadership & Communication", description: "Lead teams and tell your story.", icon: "users", color: "yellow", sort_order: 11 },
      { slug: "fundraising", name: "Venture Capital & Fundraising", description: "Raise money without losing your soul.", icon: "banknote", color: "green", sort_order: 12 },
      { slug: "data-analysis", name: "Data Analysis", description: "Turn numbers into decisions.", icon: "bar-chart-3", color: "teal", sort_order: 13 },
      { slug: "career-readiness", name: "Career Readiness", description: "Be the candidate everyone wants.", icon: "briefcase", color: "blue", sort_order: 14 },
      { slug: "collaboration", name: "Collaboration & Productivity", description: "Work well with other humans.", icon: "handshake", color: "pink", sort_order: 15 },
      { slug: "innovation", name: "Innovation & Systems Thinking", description: "See systems, not silos.", icon: "atom", color: "purple", sort_order: 16 },
    ];

    const catIds = new Map<string, Id<"categories">>();
    for (const c of categories) {
      const id = await ctx.db.insert("categories", c);
      catIds.set(c.slug, id);
    }

    const modules = [
      { number: 1, title: "Entrepreneurial Mindset", subtitle: "Mission, vision, innovation fundamentals, team building", week_start: 1, week_end: 1, topics: ["Mission", "Vision", "Innovation Fundamentals", "Team Building"], color: "orange", sort_order: 1 },
      { number: 2, title: "Design Thinking", subtitle: "Ideation, customer discovery, prototyping, production, testing", week_start: 2, week_end: 6, topics: ["Ideation", "Customer Discovery", "Prototyping", "Production", "Testing & Iteration"], color: "purple", sort_order: 2 },
      { number: 3, title: "Go-To-Market", subtitle: "Business models, value proposition, pitch storytelling, fundraising", week_start: 7, week_end: 8, topics: ["Business Models", "Value Proposition Canvas", "Pitch Storytelling", "Fundraising"], color: "teal", sort_order: 3 },
    ];
    const modIds = new Map<number, Id<"modules">>();
    for (const m of modules) {
      const id = await ctx.db.insert("modules", m);
      modIds.set(m.number, id);
    }

    const achievements = [
      { code: "first_step", title: "First Step", description: "Complete your very first resource.", icon: "footprints", xp: 50, color: "yellow" },
      { code: "streak_3", title: "Warming Up", description: "Learn 3 days in a row.", icon: "flame", xp: 75, color: "orange" },
      { code: "streak_7", title: "Week Warrior", description: "Keep a 7-day learning streak.", icon: "flame", xp: 150, color: "orange" },
      { code: "five_done", title: "High Five", description: "Complete 5 resources.", icon: "hand", xp: 100, color: "blue" },
      { code: "twenty_done", title: "Certified Grinder", description: "Complete 20 resources.", icon: "medal", xp: 300, color: "purple" },
      { code: "first_book", title: "Page Turner", description: "Finish your first book.", icon: "book-open", xp: 150, color: "teal" },
      { code: "note_taker", title: "Second Brain", description: "Write 5 learning notes.", icon: "notebook-pen", xp: 100, color: "pink" },
      { code: "cert_hunter", title: "Certificate Hunter", description: "Complete 3 certificate courses.", icon: "award", xp: 250, color: "green" },
    ];
    const achIds = new Map<string, string>();
    for (const a of achievements) {
      const id = await ctx.db.insert("achievements", a);
      achIds.set(a.code, id);
    }

    // resources: [title, platform, description, url, categorySlug, moduleNo, week, difficulty, minutes, certificate, tags, type, recommended]
    const resources: Array<[string, string | null, string, string, string, number, number | null, "beginner" | "intermediate" | "advanced", number, boolean, string[], string, boolean]> = [
      ["Startup School", "Y Combinator", "YC's free, self-paced program for founders building their first company.", "https://www.startupschool.org/", "entrepreneurship", 1, 1, "beginner", 600, true, ["founders", "startups", "YC"], "course", true],
      ["Google for Startups", "Google", "Tools, resources and support programs for early-stage startups.", "https://startup.google.com/", "entrepreneurship", 1, 1, "beginner", 120, false, ["tools", "programs"], "hub", true],
      ["Techstars Founder Playbook", "Techstars", "A practical playbook covering the full founder journey.", "https://www.techstars.com/accelerators/founder-playbook", "entrepreneurship", 1, 1, "beginner", 180, false, ["playbook", "accelerator"], "guide", false],
      ["Stanford eCorner", "Stanford", "Thousands of talks from founders and operators who've done it.", "https://ecorner.stanford.edu/", "entrepreneurship", 1, 1, "beginner", 240, false, ["talks", "stanford"], "video", true],
      ["MIT Entrepreneurship Collection", "MIT OpenCourseWare", "University-grade entrepreneurship courses, free and open.", "https://ocw.mit.edu/collections/entrepreneurship/", "entrepreneurship", 1, 1, "intermediate", 900, false, ["MIT", "course"], "course", false],
      ["First Steps in Innovation and Entrepreneurship", "OpenLearn", "A gentle on-ramp into innovation and entrepreneurship.", "https://www.open.edu/openlearn/money-business/leadership-management/first-steps-innovation-and-entrepreneurship/content-section-0", "entrepreneurship", 1, 1, "beginner", 300, true, ["intro", "innovation"], "course", false],
      ["HP LIFE Courses", "HP LIFE", "Free business and IT skills courses with certificates.", "https://www.life-global.org/", "startup-building", 1, 1, "beginner", 240, true, ["business skills", "certificate"], "course", true],
      ["Design Thinking Resources", "IDEO", "The original design thinking toolkit from the people who named it.", "https://designthinking.ideo.com/resources", "design-thinking", 2, 2, "beginner", 180, false, ["toolkit", "ideation"], "guide", true],
      ["Design Thinking Bootleg", "Stanford d.school", "The legendary card deck of design thinking methods.", "https://dschool.stanford.edu/resources/the-bootcamp-bootleg", "design-thinking", 2, 2, "beginner", 90, false, ["methods", "d.school"], "guide", true],
      ["IDEO U", "IDEO", "Courses on creativity, design and innovation leadership.", "https://www.ideo.com/education", "design-thinking", 2, 2, "intermediate", 480, true, ["creativity", "courses"], "course", false],
      ["Design Sprint Kit", "Google", "Everything you need to run a five-day design sprint.", "https://designsprintkit.withgoogle.com/", "design-thinking", 2, 4, "intermediate", 300, false, ["sprint", "prototyping"], "toolkit", true],
      ["Design Thinking Courses", "Coursera", "A curated browse of design thinking courses you can audit free.", "https://www.coursera.org/browse/business/innovation/design-thinking", "design-thinking", 2, 2, "beginner", 600, true, ["coursera"], "course", false],
      ["Atlassian University", "Atlassian", "Agile, teamwork and product delivery training.", "https://www.atlassian.com/university", "product-management", 2, 5, "beginner", 240, true, ["agile", "teams"], "course", false],
      ["Product School Webinars", "Product School", "Free live and recorded webinars from working PMs.", "https://www.productschool.com/webinars", "product-management", 2, 5, "beginner", 120, false, ["PM", "webinars"], "video", false],
      ["Product Simulations", "Forage", "Free job simulations built with real companies.", "https://www.theforage.com/", "product-management", 2, 5, "beginner", 300, true, ["simulation", "experience"], "practice", true],
      ["Mind the Product", "Mind the Product", "Articles and guides from the largest PM community.", "https://www.mindtheproduct.com/", "product-management", 2, 5, "beginner", 90, false, ["articles"], "article", false],
      ["Figma Learn", "Figma", "Learn design and prototyping in the tool you'll actually use.", "https://help.figma.com/hc/en-us/categories/360002051613-Learn-design", "ui-ux", 2, 4, "beginner", 180, false, ["figma", "prototyping"], "course", true],
      ["Google Design Resources", "Google", "Design articles, tools and case studies from Google.", "https://design.google/resources/", "ui-ux", 2, 4, "beginner", 120, false, ["design", "google"], "article", false],
      ["Free UX Design Short Course", "CareerFoundry", "A structured free intro to UX design.", "https://careerfoundry.com/en/blog/ux-design/free-ux-design-short-course/", "ui-ux", 2, 4, "beginner", 420, false, ["UX", "course"], "course", false],
      ["IxDF Literature", "Interaction Design Foundation", "A deep open library of UX articles and research.", "https://www.interaction-design.org/literature", "ui-ux", 2, 4, "intermediate", 240, false, ["UX", "research"], "article", false],
      ["NN/g UX Articles", "Nielsen Norman Group", "Evidence-based usability research, free to read.", "https://www.nngroup.com/articles/", "ui-ux", 2, 6, "intermediate", 180, false, ["usability", "research"], "article", true],
      ["freeCodeCamp", "freeCodeCamp", "Thousands of hours of coding curriculum with certifications.", "https://www.freecodecamp.org/", "software-development", 2, 5, "beginner", 1200, true, ["web dev", "certificate"], "course", true],
      ["The Odin Project", "The Odin Project", "A full open-source full-stack curriculum.", "https://www.theodinproject.com/", "software-development", 2, 5, "intermediate", 1500, false, ["full-stack"], "course", false],
      ["CS50x", "Harvard", "Harvard's legendary introduction to computer science.", "https://cs50.harvard.edu/x/", "software-development", 2, 5, "intermediate", 1800, true, ["CS", "harvard"], "course", true],
      ["Microsoft Learn", "Microsoft", "Free learning paths across dev, cloud, data and AI.", "https://learn.microsoft.com/", "software-development", 2, 5, "beginner", 600, true, ["microsoft", "paths"], "course", false],
      ["Node.js Documentation", "Node.js", "The official Node.js docs and guides.", "https://nodejs.org/en/docs", "software-development", 2, 5, "intermediate", 240, false, ["node", "backend"], "docs", false],
      ["Flutter Documentation", "Flutter", "Build cross-platform apps from one codebase.", "https://docs.flutter.dev/", "software-development", 2, 5, "intermediate", 360, false, ["mobile", "flutter"], "docs", false],
      ["Android Developers", "Google", "Official Android development guides and codelabs.", "https://developer.android.com/", "software-development", 2, 5, "intermediate", 480, false, ["android", "mobile"], "docs", false],
      ["Docker Documentation", "Docker", "Containers explained by the people who built them.", "https://docs.docker.com/", "software-development", 2, 5, "intermediate", 240, false, ["devops", "containers"], "docs", false],
      ["Kubernetes Documentation", "Kubernetes", "Orchestrate containers at scale.", "https://kubernetes.io/docs/", "software-development", 2, 5, "advanced", 360, false, ["devops", "k8s"], "docs", false],
      ["AI for Everyone", "DeepLearning.AI", "Andrew Ng's non-technical intro to what AI can and can't do.", "https://www.deeplearning.ai/courses/ai-for-everyone/", "artificial-intelligence", 1, 1, "beginner", 360, true, ["AI", "fundamentals"], "course", true],
      ["Google AI Essentials", "Google", "Practical AI skills for everyday work, with a certificate.", "https://grow.google/certificates/ai-essentials/", "artificial-intelligence", 1, 1, "beginner", 480, true, ["AI", "certificate"], "course", true],
      ["Azure AI Learning Paths", "Microsoft Learn", "Hands-on AI learning paths on Azure.", "https://learn.microsoft.com/training/browse/?products=azure-ai", "artificial-intelligence", 2, 5, "intermediate", 600, true, ["azure", "AI"], "course", false],
      ["Hugging Face Learn", "Hugging Face", "NLP, transformers and open-source ML courses.", "https://huggingface.co/learn", "artificial-intelligence", 2, 5, "advanced", 900, true, ["ML", "NLP"], "course", false],
      ["OpenAI Prompt Engineering Guide", "OpenAI", "Official prompting strategies straight from the source.", "https://platform.openai.com/docs/guides/prompt-engineering", "artificial-intelligence", 2, 3, "beginner", 60, false, ["prompting"], "docs", true],
      ["Anthropic Documentation", "Anthropic", "Prompt engineering and Claude best practices.", "https://docs.anthropic.com/", "artificial-intelligence", 2, 3, "beginner", 90, false, ["claude", "prompting"], "docs", false],
      ["AWS Skill Builder", "AWS", "Free cloud training and certification prep from AWS.", "https://skillbuilder.aws/", "cloud-computing", 2, 5, "beginner", 600, true, ["AWS", "cloud"], "course", true],
      ["Google Cloud Skills Boost", "Google Cloud", "Hands-on labs and quests on Google Cloud.", "https://www.cloudskillsboost.google/", "cloud-computing", 2, 5, "intermediate", 600, true, ["GCP", "labs"], "course", false],
      ["IBM SkillsBuild", "IBM", "Free tech skills programme with digital credentials.", "https://skillsbuild.org/", "cloud-computing", 2, 5, "beginner", 480, true, ["IBM", "credentials"], "course", false],
      ["Cisco Networking Academy", "Cisco", "Networking and cybersecurity courses with certificates.", "https://www.netacad.com/", "cybersecurity", 2, 5, "beginner", 600, true, ["networking", "security"], "course", true],
      ["Google Cybersecurity Certificate", "Google", "A career certificate in cybersecurity fundamentals.", "https://grow.google/certificates/cybersecurity/", "cybersecurity", 2, 5, "beginner", 900, true, ["certificate", "security"], "course", false],
      ["TryHackMe Free Rooms", "TryHackMe", "Learn security by breaking things in guided labs.", "https://tryhackme.com/", "cybersecurity", 2, 5, "intermediate", 300, false, ["hands-on", "labs"], "practice", false],
      ["Content Marketing Course", "HubSpot Academy", "Free certification in content marketing.", "https://academy.hubspot.com/courses/content-marketing", "marketing", 3, 7, "beginner", 300, true, ["content", "certificate"], "course", true],
      ["Semrush Academy", "Semrush", "Free SEO and digital marketing courses with exams.", "https://www.semrush.com/academy/", "marketing", 3, 7, "beginner", 240, true, ["SEO"], "course", false],
      ["Meta Blueprint", "Meta", "Digital marketing training for Facebook and Instagram.", "https://www.facebook.com/business/learn", "marketing", 3, 7, "beginner", 240, true, ["ads", "social"], "course", false],
      ["Google Skillshop", "Google", "Google Ads and Analytics certifications.", "https://skillshop.withgoogle.com/", "marketing", 3, 7, "beginner", 300, true, ["ads", "analytics"], "course", false],
      ["Toastmasters Resources", "Toastmasters", "Public speaking and leadership resources.", "https://www.toastmasters.org/resources", "leadership", 3, 8, "beginner", 120, false, ["speaking"], "guide", false],
      ["Coursera (Audit Free)", "Coursera", "Audit thousands of university courses for free.", "https://www.coursera.org/", "leadership", 3, 8, "beginner", 600, true, ["courses"], "course", false],
      ["TED Talks", "TED", "Ideas worth stealing for your pitch.", "https://www.ted.com/talks", "leadership", 3, 8, "beginner", 60, false, ["storytelling"], "video", true],
      ["YC Startup Library", "Y Combinator", "Essays and talks on fundraising, equity and growth.", "https://www.ycombinator.com/library", "fundraising", 3, 8, "intermediate", 300, false, ["fundraising", "YC"], "article", true],
      ["First Round Review", "First Round", "Deeply reported operator playbooks.", "https://review.firstround.com/", "fundraising", 3, 8, "intermediate", 180, false, ["operators"], "article", false],
      ["a16z Articles", "Andreessen Horowitz", "Investor perspectives on markets and building.", "https://a16z.com/", "fundraising", 3, 8, "intermediate", 120, false, ["VC"], "article", false],
      ["Sequoia Ideas", "Sequoia", "Guides on pitching, metrics and company building.", "https://www.sequoiacap.com/ideas/", "fundraising", 3, 8, "intermediate", 120, false, ["pitch", "VC"], "guide", true],
      ["Techstars Resources", "Techstars", "Fundraising and accelerator resources.", "https://www.techstars.com/", "fundraising", 3, 8, "beginner", 120, false, ["accelerator"], "hub", false],
      ["Kaggle Learn", "Kaggle", "Short, practical data science micro-courses.", "https://www.kaggle.com/learn", "data-analysis", 2, 6, "beginner", 300, true, ["data", "python"], "course", true],
      ["Google Analytics Academy", "Google", "Learn analytics and measurement properly.", "https://skillshop.withgoogle.com/", "data-analysis", 3, 7, "beginner", 240, true, ["analytics"], "course", false],
      ["Forage Job Simulations", "Forage", "Real work simulations from global companies.", "https://www.theforage.com/", "career-readiness", 3, 8, "beginner", 300, true, ["experience"], "practice", true],
      ["LinkedIn Learning", "LinkedIn", "Free learning pathways and career skills.", "https://www.linkedin.com/learning/", "career-readiness", 3, 8, "beginner", 300, true, ["career"], "course", false],
      ["GitHub Skills", "GitHub", "Learn Git and GitHub by doing.", "https://skills.github.com/", "career-readiness", 2, 5, "beginner", 120, false, ["git", "collaboration"], "practice", true],
      ["Grow with Google", "Google", "Career certificates and job-ready resources.", "https://grow.google/", "career-readiness", 3, 8, "beginner", 600, true, ["certificate"], "course", false],
      ["Notion Academy", "Notion", "Master the tool your team will run on.", "https://www.notion.so/help/guides/category/academy", "collaboration", 1, 1, "beginner", 120, false, ["notion", "docs"], "course", false],
      ["Slack Learn", "Slack", "Communicate without drowning in messages.", "https://slack.com/resources/learn", "collaboration", 1, 1, "beginner", 60, false, ["comms"], "guide", false],
      ["Miro Academy", "Miro", "Facilitate workshops and ideation remotely.", "https://academy.miro.com/", "collaboration", 2, 2, "beginner", 120, true, ["workshops"], "course", false],
      ["Design Kit", "IDEO", "Human-centred design methods for social impact.", "https://www.designkit.org/", "innovation", 2, 3, "beginner", 180, false, ["HCD", "impact"], "toolkit", true],
      ["Acumen Academy", "Acumen", "Courses for people building solutions to poverty.", "https://acumenacademy.org/", "innovation", 1, 1, "beginner", 360, true, ["social impact"], "course", false],
    ];

    const resIds = new Map<string, string>();
    for (const r of resources) {
      const id = await ctx.db.insert("resources", {
        title: r[0],
        platform: r[1] ?? undefined,
        description: r[2],
        url: r[3],
        categoryId: catIds.get(r[4]),
        moduleId: modIds.get(r[5]),
        week: r[6] ?? undefined,
        difficulty: r[7],
        duration_minutes: r[8],
        has_certificate: r[9],
        tags: r[10],
        resource_type: r[11],
        is_recommended: r[12],
      });
      resIds.set(r[0], id);
    }

    // AI toolkit entries
    const aiTools: Array<[string, string, string, string, string[], string, string]> = [
      ["ChatGPT", "OpenAI", "General-purpose assistant for research, writing and reasoning.", "https://chat.openai.com/", ["assistant"], "Customer interview scripts, pitch copy, market research summaries.", "Act as a startup advisor. My idea is [IDEA] for [AUDIENCE]. List the 5 riskiest assumptions and how to test each one this week."],
      ["Claude", "Anthropic", "Long-context assistant, excellent for documents and analysis.", "https://claude.ai/", ["assistant", "long-context"], "Summarising research papers, reviewing business plans, drafting policies.", "Here is my business plan: [PASTE]. Critique it as a skeptical investor and list the 3 questions I cannot answer yet."],
      ["Gemini", "Google", "Multimodal assistant integrated with Google tools.", "https://gemini.google.com/", ["multimodal"], "Image analysis, slide drafting, research with Google Search grounding.", "Analyse this competitor landing page screenshot and list what they do better than us: [IMAGE]"],
      ["Cursor", "Cursor", "AI-native code editor that understands your whole codebase.", "https://cursor.com/", ["coding"], "Building MVPs faster, refactoring, debugging.", "Explain what this file does, then propose the smallest change that adds [FEATURE]."],
      ["Lovable", "Lovable", "Build full-stack web apps by describing them in plain language.", "https://lovable.dev/", ["no-code", "fullstack"], "Prototyping your CodeSpark MVP in days, not months.", "Build a landing page for [STARTUP] with a waitlist form, bold typography and a clear value proposition."],
      ["Bolt", "StackBlitz", "In-browser AI app builder for quick prototypes.", "https://bolt.new/", ["prototyping"], "Throwaway prototypes and demo screens for user testing.", "Create a clickable prototype of [FLOW] with mock data so I can test it with 5 users."],
      ["Perplexity", "Perplexity", "Answer engine with citations — research you can actually trust.", "https://www.perplexity.ai/", ["research"], "Market sizing, competitor scans, sourcing statistics for your pitch.", "Give me the market size for [INDUSTRY] in [COUNTRY] with sources from the last 2 years."],
      ["OpenRouter", "OpenRouter", "One API to access many different AI models.", "https://openrouter.ai/", ["api", "models"], "Comparing models and building AI features cheaply.", "Compare responses from two models for this prompt and tell me which is more useful: [PROMPT]"],
      ["GitHub Copilot", "GitHub", "Autocomplete and chat for code, inside your editor.", "https://github.com/features/copilot", ["coding"], "Writing tests, boilerplate and understanding unfamiliar code.", "Write unit tests for this function covering the edge cases: [CODE]"],
    ];
    for (const t of aiTools) {
      await ctx.db.insert("resources", {
        title: t[0],
        platform: t[1],
        description: t[2],
        url: t[3],
        categoryId: catIds.get("artificial-intelligence"),
        difficulty: "beginner",
        duration_minutes: 30,
        has_certificate: false,
        tags: t[4],
        resource_type: "ai_tool",
        use_cases: t[5],
        prompt_template: t[6],
        is_recommended: false,
      });
    }

    // Books: [title, author, categorySlug, difficulty, reading_minutes, description, driveFileId, color]
    const books: Array<[string, string, string, "beginner" | "intermediate" | "advanced", number, string, string, string]> = [
      ["Zero to One", "Peter Thiel", "entrepreneurship", "beginner", 300, "Notes on startups, monopolies and building things nobody else is building.", "1KC2HHaTwjzQSyE_F4lryQxxUlLfmi2qn", "orange"],
      ["Thinking, Fast and Slow", "Daniel Kahneman", "leadership", "advanced", 900, "How the two systems of the mind shape judgement, bias and decision-making.", "1utQUQ1nFeHnTh2AVlIjhjO9alOtey_sB", "blue"],
      ["The Startup Owner's Manual", "Steve Blank", "startup-building", "advanced", 1500, "The step-by-step customer development playbook for building a repeatable business.", "1GTPufStRlQRZlRf1K9l5eih1BIZSjNNP", "teal"],
      ["The 7 Habits of Highly Effective People", "Stephen R. Covey", "leadership", "beginner", 720, "A principle-centred framework for personal and interpersonal effectiveness.", "1ys09FbFLw6lgUVqsjiRU7ea1Axh6s64U", "green"],
      ["The Richest Man in Babylon", "George S. Clason", "entrepreneurship", "beginner", 180, "Timeless parables on saving, investing and building lasting wealth.", "16bZL3empLy3iATbqR2r77rGRXj0KRoGe", "yellow"],
      ["The Purpose Driven Life", "Rick Warren", "leadership", "beginner", 600, "A reflective guide to finding meaning and direction in your work and life.", "1iaXS1LI3mYlHXT_bvWgOzSS68uG3DJAE", "purple"],
      ["The Psychology of Money", "Morgan Housel", "entrepreneurship", "beginner", 300, "Short stories on the strange ways people think about money, risk and greed.", "11_RGrsk_W1YsI5ahnKdxr8aGftXMP5Us", "yellow"],
      ["The Mom Test", "Rob Fitzpatrick", "startup-building", "beginner", 120, "How to talk to customers so they tell you the truth about your idea.", "1X36LaUzYLoqZyF6DOKVjO27OnG03ja89", "pink"],
      ["The Lean Startup", "Eric Ries", "startup-building", "beginner", 420, "Build-measure-learn: validated learning and continuous innovation.", "1fZtLwsYtAPraO-W0eQIvlq8QikMqfrP_", "orange"],
      ["The Infinite Game", "Simon Sinek", "leadership", "intermediate", 420, "Why the best leaders play for endurance, not for the win.", "1aYxqWgfAjSGsbDKV8xaodeJyHz75cqEK", "blue"],
      ["The Hard Thing About Hard Things", "Ben Horowitz", "startup-building", "intermediate", 420, "Honest advice on the brutal parts of building and running a company.", "1Md3mPsXjeZjuICbjaHFApdUOi5C8MmIv", "purple"],
      ["The Design of Everyday Things", "Don Norman", "ui-ux", "intermediate", 540, "The foundational text on affordances, usability and human-centred design.", "12JB4xYy6i4koTwxW9vMLjyEAcZBOTgbj", "teal"],
      ["The Courage to Be Disliked", "Ichiro Kishimi", "leadership", "beginner", 360, "A dialogue on Adlerian psychology, freedom and living on your own terms.", "1qVLF8S9iXWqtWo8IwggBryFxqBdwKbyp", "pink"],
      ["The Coming Wave", "Mustafa Suleyman", "artificial-intelligence", "intermediate", 600, "AI, synthetic biology and the containment problem of the next decade.", "1wnOUGH1PfG6E3dcjvkM59jjBSlOZzfF4", "blue"],
      ["The Alignment Problem", "Brian Christian", "artificial-intelligence", "advanced", 720, "How machine learning systems learn our values — and where they go wrong.", "1pY8DgN67cMPLpIUm1265SeetvMMUUejT", "purple"],
      ["Prediction Machines", "Ajay Agrawal, Joshua Gans & Avi Goldfarb", "artificial-intelligence", "intermediate", 480, "The simple economics of artificial intelligence for founders and managers.", "1OFiPlwJVoKjI1Iz0A3TN445EjB7rMC8E", "teal"],
      ["Never Split the Difference", "Chris Voss", "leadership", "beginner", 420, "FBI negotiation tactics you can use in sales, hiring and fundraising.", "1HX0QH6wp3Dvi04STa-YAmjAxYDoLPhzC", "orange"],
      ["Grit", "Angela Duckworth", "leadership", "beginner", 420, "The research case for passion and perseverance over raw talent.", "1qY0-IFs0LmPe2bKv5Rxtl08rOcaxA4BX", "green"],
      ["Good Strategy Bad Strategy", "Richard Rumelt", "entrepreneurship", "advanced", 600, "What real strategy looks like, and why most of it is fluff.", "1I9UyUoZTCoqJcdNxTBJEoFqPVbY2HeoW", "blue"],
      ["Eat That Frog", "Brian Tracy", "career-readiness", "beginner", 120, "Twenty-one ways to stop procrastinating and do the important work first.", "1nj5qYkyk7x5CtBCR_Gng_6kfTAaexSGh", "yellow"],
      ["Competing Against Luck", "Clayton M. Christensen", "product-management", "intermediate", 480, "Jobs to be done: the theory of why customers actually buy things.", "13wtMyIi-QXbDyugeKab3ezK6IHevPyz8", "pink"],
      ["Business Model Generation", "Alexander Osterwalder", "startup-building", "intermediate", 360, "The visual handbook behind the Business Model Canvas.", "1kiiz8vZzfPXnpZDpLEFpngryMFN7LpgA", "green"],
      ["Blue Ocean Strategy", "W. Chan Kim & Renée Mauborgne", "entrepreneurship", "intermediate", 540, "How to create uncontested market space and make the competition irrelevant.", "1oACWkpSN0vuM8a-hByCTY9hJmRktrt7x", "teal"],
    ];
    for (const b of books) {
      await ctx.db.insert("books", {
        title: b[0],
        author: b[1],
        category_id: catIds.get(b[2]),
        difficulty: b[3],
        reading_minutes: b[4],
        description: b[5],
        drive_url: `https://drive.google.com/file/d/${b[6]}/view`,
        download_url: `https://drive.google.com/uc?export=download&id=${b[6]}`,
        color: b[7],
      });
    }

    await ctx.db.insert("announcements", {
      title: "Welcome to the CodeSpark Innovation Hub",
      body: "Your learning companion for the 8-week challenge is live. Curated resources, books, certifications and AI tools — with streaks and progress to keep you shipping.",
    });

    return { categories: categories.length, resources: resources.length, aiTools: aiTools.length, books: books.length, achievements: achievements.length, modules: modules.length };
  },
});