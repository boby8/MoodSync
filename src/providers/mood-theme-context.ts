import { createContext } from "react";

import type { BaseTheme } from "@/lib/theme/mood-theme";

export type BaseThemeTokenKey =
  | "background"
  | "surface"
  | "text"
  | "muted"
  | "ring";

export type MoodThemeContextValue = {
  baseTheme: BaseTheme;
  adaptiveEnabled: boolean;
  setBaseTheme: (theme: BaseTheme) => void;
  setAdaptiveEnabled: (enabled: boolean) => void;
  baseThemeTokens: (key: BaseThemeTokenKey) => string;
};

export const MoodThemeContext = createContext<MoodThemeContextValue | null>(
  null
);
