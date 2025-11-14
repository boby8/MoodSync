import { useEffect, useState } from "react";
import { applyMoodTheme, type MoodTheme } from "@/lib/theme/mood-themes";

const MOOD_THEME_STORAGE_KEY = "moodsync:mood-theme";

function readStoredMoodTheme(): MoodTheme {
  if (typeof window === "undefined") {
    return "neutral";
  }
  const stored = window.localStorage.getItem(MOOD_THEME_STORAGE_KEY);
  const validMoods: MoodTheme[] = [
    "happy",
    "calm",
    "sad",
    "angry",
    "excited",
    "peaceful",
    "neutral",
  ];
  return validMoods.includes(stored as MoodTheme)
    ? (stored as MoodTheme)
    : "neutral";
}

export function useMoodTheme() {
  const [moodTheme, setMoodThemeState] = useState<MoodTheme>(() =>
    readStoredMoodTheme()
  );

  useEffect(() => {
    applyMoodTheme(moodTheme);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(MOOD_THEME_STORAGE_KEY, moodTheme);
    }
  }, [moodTheme]);

  const setMoodTheme = (mood: MoodTheme) => {
    setMoodThemeState(mood);
  };

  return {
    moodTheme,
    setMoodTheme,
  };
}
