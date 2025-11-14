export type MoodTheme =
  | "happy"
  | "calm"
  | "sad"
  | "angry"
  | "excited"
  | "peaceful"
  | "neutral";

export type MoodThemeColors = {
  background: string;
  foreground: string;
  card: string;
  cardForeground: string;
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  muted: string;
  mutedForeground: string;
  accent: string;
  accentForeground: string;
  border: string;
  input: string;
  ring: string;
  gradientFrom: string;
  gradientVia?: string;
  gradientTo: string;
};

export const MOOD_THEMES: Record<MoodTheme, MoodThemeColors> = {
  happy: {
    background: "oklch(0.98 0.05 90)",
    foreground: "oklch(0.2 0.05 90)",
    card: "oklch(0.99 0.02 90)",
    cardForeground: "oklch(0.2 0.05 90)",
    primary: "oklch(0.7 0.15 90)",
    primaryForeground: "oklch(0.98 0.02 90)",
    secondary: "oklch(0.95 0.03 90)",
    secondaryForeground: "oklch(0.25 0.05 90)",
    muted: "oklch(0.96 0.02 90)",
    mutedForeground: "oklch(0.5 0.05 90)",
    accent: "oklch(0.92 0.04 90)",
    accentForeground: "oklch(0.2 0.05 90)",
    border: "oklch(0.9 0.03 90)",
    input: "oklch(0.9 0.03 90)",
    ring: "oklch(0.7 0.15 90)",
    gradientFrom: "oklch(0.98 0.08 85)",
    gradientVia: "oklch(0.97 0.06 95)",
    gradientTo: "oklch(0.99 0.05 100)",
  },
  calm: {
    background: "oklch(0.98 0.02 200)",
    foreground: "oklch(0.2 0.02 200)",
    card: "oklch(0.99 0.01 200)",
    cardForeground: "oklch(0.2 0.02 200)",
    primary: "oklch(0.6 0.12 200)",
    primaryForeground: "oklch(0.98 0.01 200)",
    secondary: "oklch(0.95 0.02 200)",
    secondaryForeground: "oklch(0.25 0.02 200)",
    muted: "oklch(0.96 0.01 200)",
    mutedForeground: "oklch(0.5 0.02 200)",
    accent: "oklch(0.92 0.02 200)",
    accentForeground: "oklch(0.2 0.02 200)",
    border: "oklch(0.9 0.02 200)",
    input: "oklch(0.9 0.02 200)",
    ring: "oklch(0.6 0.12 200)",
    gradientFrom: "oklch(0.98 0.03 195)",
    gradientVia: "oklch(0.97 0.025 205)",
    gradientTo: "oklch(0.99 0.02 210)",
  },
  sad: {
    background: "oklch(0.97 0.02 260)",
    foreground: "oklch(0.25 0.03 260)",
    card: "oklch(0.98 0.01 260)",
    cardForeground: "oklch(0.25 0.03 260)",
    primary: "oklch(0.55 0.15 260)",
    primaryForeground: "oklch(0.98 0.01 260)",
    secondary: "oklch(0.94 0.02 260)",
    secondaryForeground: "oklch(0.3 0.03 260)",
    muted: "oklch(0.95 0.01 260)",
    mutedForeground: "oklch(0.55 0.02 260)",
    accent: "oklch(0.91 0.02 260)",
    accentForeground: "oklch(0.25 0.03 260)",
    border: "oklch(0.88 0.02 260)",
    input: "oklch(0.88 0.02 260)",
    ring: "oklch(0.55 0.15 260)",
    gradientFrom: "oklch(0.97 0.03 255)",
    gradientVia: "oklch(0.96 0.025 265)",
    gradientTo: "oklch(0.98 0.02 270)",
  },
  angry: {
    background: "oklch(0.98 0.03 25)",
    foreground: "oklch(0.2 0.05 25)",
    card: "oklch(0.99 0.02 25)",
    cardForeground: "oklch(0.2 0.05 25)",
    primary: "oklch(0.6 0.2 25)",
    primaryForeground: "oklch(0.98 0.02 25)",
    secondary: "oklch(0.95 0.03 25)",
    secondaryForeground: "oklch(0.25 0.05 25)",
    muted: "oklch(0.96 0.02 25)",
    mutedForeground: "oklch(0.5 0.04 25)",
    accent: "oklch(0.92 0.03 25)",
    accentForeground: "oklch(0.2 0.05 25)",
    border: "oklch(0.9 0.03 25)",
    input: "oklch(0.9 0.03 25)",
    ring: "oklch(0.6 0.2 25)",
    gradientFrom: "oklch(0.98 0.04 20)",
    gradientVia: "oklch(0.97 0.035 30)",
    gradientTo: "oklch(0.99 0.03 35)",
  },
  excited: {
    background: "oklch(0.98 0.04 330)",
    foreground: "oklch(0.2 0.05 330)",
    card: "oklch(0.99 0.02 330)",
    cardForeground: "oklch(0.2 0.05 330)",
    primary: "oklch(0.65 0.18 330)",
    primaryForeground: "oklch(0.98 0.02 330)",
    secondary: "oklch(0.95 0.03 330)",
    secondaryForeground: "oklch(0.25 0.05 330)",
    muted: "oklch(0.96 0.02 330)",
    mutedForeground: "oklch(0.5 0.04 330)",
    accent: "oklch(0.92 0.03 330)",
    accentForeground: "oklch(0.2 0.05 330)",
    border: "oklch(0.9 0.03 330)",
    input: "oklch(0.9 0.03 330)",
    ring: "oklch(0.65 0.18 330)",
    gradientFrom: "oklch(0.98 0.05 325)",
    gradientVia: "oklch(0.97 0.045 335)",
    gradientTo: "oklch(0.99 0.04 340)",
  },
  peaceful: {
    background: "oklch(0.98 0.02 150)",
    foreground: "oklch(0.2 0.02 150)",
    card: "oklch(0.99 0.01 150)",
    cardForeground: "oklch(0.2 0.02 150)",
    primary: "oklch(0.55 0.12 150)",
    primaryForeground: "oklch(0.98 0.01 150)",
    secondary: "oklch(0.95 0.02 150)",
    secondaryForeground: "oklch(0.25 0.02 150)",
    muted: "oklch(0.96 0.01 150)",
    mutedForeground: "oklch(0.5 0.02 150)",
    accent: "oklch(0.92 0.02 150)",
    accentForeground: "oklch(0.2 0.02 150)",
    border: "oklch(0.9 0.02 150)",
    input: "oklch(0.9 0.02 150)",
    ring: "oklch(0.55 0.12 150)",
    gradientFrom: "oklch(0.98 0.03 145)",
    gradientVia: "oklch(0.97 0.025 155)",
    gradientTo: "oklch(0.99 0.02 160)",
  },
  neutral: {
    background: "oklch(0.98 0.005 0)",
    foreground: "oklch(0.2 0.005 0)",
    card: "oklch(0.99 0.002 0)",
    cardForeground: "oklch(0.2 0.005 0)",
    primary: "oklch(0.5 0.01 0)",
    primaryForeground: "oklch(0.98 0.002 0)",
    secondary: "oklch(0.95 0.005 0)",
    secondaryForeground: "oklch(0.25 0.005 0)",
    muted: "oklch(0.96 0.002 0)",
    mutedForeground: "oklch(0.5 0.005 0)",
    accent: "oklch(0.92 0.005 0)",
    accentForeground: "oklch(0.2 0.005 0)",
    border: "oklch(0.9 0.005 0)",
    input: "oklch(0.9 0.005 0)",
    ring: "oklch(0.5 0.01 0)",
    gradientFrom: "oklch(0.98 0.008 0)",
    gradientVia: "oklch(0.97 0.006 0)",
    gradientTo: "oklch(0.99 0.004 0)",
  },
};

export function applyMoodTheme(mood: MoodTheme) {
  if (typeof document === "undefined") return;

  const theme = MOOD_THEMES[mood];
  const root = document.documentElement;

  root.style.setProperty("--background", theme.background);
  root.style.setProperty("--foreground", theme.foreground);
  root.style.setProperty("--card", theme.card);
  root.style.setProperty("--card-foreground", theme.cardForeground);
  root.style.setProperty("--primary", theme.primary);
  root.style.setProperty("--primary-foreground", theme.primaryForeground);
  root.style.setProperty("--secondary", theme.secondary);
  root.style.setProperty("--secondary-foreground", theme.secondaryForeground);
  root.style.setProperty("--muted", theme.muted);
  root.style.setProperty("--muted-foreground", theme.mutedForeground);
  root.style.setProperty("--accent", theme.accent);
  root.style.setProperty("--accent-foreground", theme.accentForeground);
  root.style.setProperty("--border", theme.border);
  root.style.setProperty("--input", theme.input);
  root.style.setProperty("--ring", theme.ring);

  // Set gradient colors
  root.style.setProperty("--gradient-from", theme.gradientFrom);
  if (theme.gradientVia) {
    root.style.setProperty("--gradient-via", theme.gradientVia);
  }
  root.style.setProperty("--gradient-to", theme.gradientTo);

  root.dataset.moodTheme = mood;
}
