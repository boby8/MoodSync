import { useContext } from "react";

import { MoodThemeContext } from "@/providers/mood-theme-context";

export function useMoodTheme() {
  const ctx = useContext(MoodThemeContext);
  if (!ctx) {
    throw new Error("useMoodTheme must be used within a MoodThemeProvider.");
  }
  return ctx;
}
