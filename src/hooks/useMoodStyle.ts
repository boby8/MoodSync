import { useMemo } from "react";

import { resolveMoodClasses, type MoodTone } from "@/lib/theme/mood-theme";
import { useMoodTheme } from "@/hooks/useMoodTheme";

export type MoodStyleVariant = "surface" | "pill";

export type MoodStyleClasses = {
  container: string;
  text: string;
  ring: string;
  badge: string;
};

/**
 * Returns Tailwind class tokens tuned to the current base theme plus (optionally)
 * an adaptive mood overlay.
 */
export function useMoodStyle(
  mood?: MoodTone | null,
  variant: MoodStyleVariant = "surface"
): MoodStyleClasses {
  const { adaptiveEnabled, baseThemeTokens } = useMoodTheme();

  return useMemo(() => {
    const baseBackground = baseThemeTokens("surface");
    const baseText = baseThemeTokens("text");
    const ring = baseThemeTokens("ring");

    const moodClasses = adaptiveEnabled
      ? resolveMoodClasses(mood)
      : resolveMoodClasses();

    const container = [
      variant === "pill" ? "rounded-full px-3 py-1.5" : "rounded-xl p-4",
      baseBackground,
      moodClasses.surface,
      "transition-all duration-350 shadow-card",
    ]
      .filter(Boolean)
      .join(" ");

    const text = [baseText, moodClasses.text].filter(Boolean).join(" ");
    const ringClass = [ring, moodClasses.ring, "ring-2"]
      .filter(Boolean)
      .join(" ");
    const badge = [
      "inline-flex items-center gap-2 text-sm font-medium",
      moodClasses.badge,
    ]
      .filter(Boolean)
      .join(" ");

    return {
      container,
      text,
      ring: ringClass,
      badge,
    };
  }, [adaptiveEnabled, baseThemeTokens, mood, variant]);
}
