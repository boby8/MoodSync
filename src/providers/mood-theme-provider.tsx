import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import {
  BASE_THEME_TOKENS,
  type BaseTheme,
  isBaseTheme,
} from "@/lib/theme/mood-theme";
import {
  MoodThemeContext,
  type MoodThemeContextValue,
} from "@/providers/mood-theme-context";

const BASE_THEME_STORAGE_KEY = "moodsync:base-theme";
const ADAPTIVE_STORAGE_KEY = "moodsync:adaptive-enabled";

function readStoredTheme(): BaseTheme {
  if (typeof window === "undefined") {
    return "serene";
  }
  const stored = window.localStorage.getItem(BASE_THEME_STORAGE_KEY);
  return isBaseTheme(stored) ? stored : "serene";
}

function readAdaptiveFlag(): boolean {
  if (typeof window === "undefined") {
    return true;
  }
  return window.localStorage.getItem(ADAPTIVE_STORAGE_KEY) !== "false";
}

/**
 * Provides MoodSync base theme selection and adaptive-mode toggles, persisting
 * user choices and exposing utility helpers for Tailwind class composition.
 */
export function MoodThemeProvider({ children }: { children: ReactNode }) {
  const [baseTheme, setBaseThemeState] = useState<BaseTheme>(() =>
    readStoredTheme()
  );
  const [adaptiveEnabled, setAdaptiveEnabledState] = useState<boolean>(() =>
    readAdaptiveFlag()
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(BASE_THEME_STORAGE_KEY, baseTheme);
    document.documentElement.dataset.moodsyncTheme = baseTheme;
  }, [baseTheme]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(ADAPTIVE_STORAGE_KEY, String(adaptiveEnabled));
  }, [adaptiveEnabled]);

  const setBaseTheme = useCallback((theme: BaseTheme) => {
    setBaseThemeState(theme);
  }, []);

  const setAdaptiveEnabled = useCallback((enabled: boolean) => {
    setAdaptiveEnabledState(enabled);
  }, []);

  const baseThemeTokens = useCallback<MoodThemeContextValue["baseThemeTokens"]>(
    (key) => BASE_THEME_TOKENS[baseTheme][key],
    [baseTheme]
  );

  const value = useMemo<MoodThemeContextValue>(
    () => ({
      baseTheme,
      adaptiveEnabled,
      setBaseTheme,
      setAdaptiveEnabled,
      baseThemeTokens,
    }),
    [
      adaptiveEnabled,
      baseTheme,
      baseThemeTokens,
      setAdaptiveEnabled,
      setBaseTheme,
    ]
  );

  return (
    <MoodThemeContext.Provider value={value}>
      {children}
    </MoodThemeContext.Provider>
  );
}
