#!/usr/bin/env bash
set -euo pipefail

# Promote/demote a user to admin in the CodeSpark hub.
#
# This script is intentionally dangerous: it mutates the Convex database. It can
# only be run by someone with the Convex CLI logged in and permission to access
# this project's deployment (i.e. `npx convex run` must work), which means the
# person running it is the owner/team member with database access.
#
# Usage:
#   ./scripts/promote-admin.sh promote you@example.com
#   ./scripts/promote-admin.sh demote you@example.com
#   ./scripts/promote-admin.sh list
#
# The user must already exist (signed up) so a profile row is present.

ACTION="${1:-}"
EMAIL="${2:-}"

if [[ "$ACTION" == "list" ]]; then
  echo "== Listing admins =="
  npx convex run admin:listAdmins
  exit 0
fi

if [[ -z "$ACTION" || -z "$EMAIL" ]]; then
  echo "Usage: $0 promote <email> | $0 demote <email> | $0 list" >&2
  exit 1
fi

if [[ "$ACTION" == "promote" ]]; then
  echo "== Promoting ${EMAIL} to admin =="
  npx convex run admin:promoteAdmin "{\"email\": \"${EMAIL}\"}"
elif [[ "$ACTION" == "demote" ]]; then
  echo "== Demoting ${EMAIL} =="
  npx convex run admin:demoteAdmin "{\"email\": \"${EMAIL}\"}"
else
  echo "Unknown action: ${ACTION}" >&2
  exit 1
fi
