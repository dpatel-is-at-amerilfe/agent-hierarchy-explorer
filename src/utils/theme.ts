/* ===========================================================================
 * theme.ts — single source of truth for the command-center palette.
 * Mirrors tailwind.config.js custom colors; imported by node components for
 * the neon glow values Tailwind utility classes can't express cleanly.
 * ===========================================================================
 */
import type { AgentStatus, LevelName } from "../types/hierarchy";

export const COLORS = {
  affiliate: "#4F8BFF",
  carrier: "#E84FD6",
  rootGlow: "#7FE9FF",
  teal: "#2DE2C8",
};

export const LEVEL_META: Record<LevelName, { color: string; short: string }> = {
  "IMO / Top Agency": { color: "#22D3EE", short: "IMO" },
  "Agency Principal": { color: "#2DE2C8", short: "PRIN" },
  "Regional Manager": { color: "#5B8DEF", short: "REG" },
  "District Manager": { color: "#7A86FF", short: "DIST" },
  Agent: { color: "#A78BFA", short: "AGT" },
  "Writing Agent": { color: "#6E8BA8", short: "WRT" },
};

export const STATUS_META: Record<AgentStatus, { color: string }> = {
  Active: { color: "#34E5A8" },
  Pending: { color: "#FFB454" },
  Terminated: { color: "#FF5470" },
};

export function nodeAccent(kind: string, levelName?: LevelName): string {
  if (kind === "root") return COLORS.rootGlow;
  if (kind === "affiliate") return COLORS.affiliate;
  if (kind === "carrier") return COLORS.carrier;
  return levelName ? LEVEL_META[levelName].color : COLORS.teal;
}
