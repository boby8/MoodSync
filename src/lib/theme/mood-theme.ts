export type BaseTheme = "serene" | "midnight" | "zen" | "vibrant";

export type MoodTone =
  | "happy"
  | "calm"
  | "sad"
  | "angry"
  | "excited"
  | "peaceful"
  | "neutral";

export type BaseThemeTokens = {
  background: string;
  surface: string;
  text: string;
  muted: string;
  ring: string;
};

export type MoodClassTokens = {
  surface: string;
  text: string;
  ring: string;
  badge: string;
};

export const BASE_THEME_TOKENS: Record<BaseTheme, BaseThemeTokens> = {
  serene: {
    background: "bg-serene-background",
    surface: "bg-serene-surface",
    text: "text-serene-foreground",
    muted: "text-serene-muted",
    ring: "ring-serene-ring",
  },
  midnight: {
    background: "bg-midnight-background",
    surface: "bg-midnight-surface",
    text: "text-midnight-foreground",
    muted: "text-midnight-muted",
    ring: "ring-midnight-ring",
  },
  zen: {
    background: "bg-zen-background",
    surface: "bg-zen-surface",
    text: "text-zen-foreground",
    muted: "text-zen-muted",
    ring: "ring-zen-ring",
  },
  vibrant: {
    background: "bg-vibrant-background",
    surface: "bg-vibrant-surface",
    text: "text-vibrant-foreground",
    muted: "text-vibrant-muted",
    ring: "ring-vibrant-ring",
  },
};

export const MOOD_CLASS_MAP: Record<MoodTone, MoodClassTokens> = {
  neutral: {
    surface: "bg-slate-100 text-slate-900",
    text: "text-slate-800",
    ring: "ring-slate-200",
    badge: "bg-slate-200 text-slate-800",
  },
  happy: {
    surface: "bg-yellow-100 text-yellow-800",
    text: "text-yellow-800",
    ring: "ring-yellow-300",
    badge: "bg-yellow-200 text-yellow-800",
  },
  calm: {
    surface: "bg-cyan-100 text-cyan-800",
    text: "text-cyan-900",
    ring: "ring-cyan-300",
    badge: "bg-cyan-200 text-cyan-900",
  },
  sad: {
    surface: "bg-indigo-100 text-indigo-800",
    text: "text-indigo-900",
    ring: "ring-indigo-300",
    badge: "bg-indigo-200 text-indigo-900",
  },
  angry: {
    surface: "bg-red-100 text-red-800",
    text: "text-red-900",
    ring: "ring-red-300",
    badge: "bg-red-200 text-red-900",
  },
  excited: {
    surface: "bg-pink-100 text-pink-800",
    text: "text-pink-900",
    ring: "ring-pink-300",
    badge: "bg-pink-200 text-pink-900",
  },
  peaceful: {
    surface: "bg-emerald-100 text-emerald-800",
    text: "text-emerald-900",
    ring: "ring-emerald-300",
    badge: "bg-emerald-200 text-emerald-900",
  },
};

export function resolveMoodClasses(mood?: string | null): MoodClassTokens {
  if (!mood) {
    return MOOD_CLASS_MAP.neutral;
  }
  const normalized = mood.toLowerCase() as MoodTone;
  return MOOD_CLASS_MAP[normalized] ?? MOOD_CLASS_MAP.neutral;
}

export function isBaseTheme(
  value: string | null | undefined
): value is BaseTheme {
  if (!value) return false;
  return ["serene", "midnight", "zen", "vibrant"].includes(value);
}
