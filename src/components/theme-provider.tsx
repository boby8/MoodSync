import { ThemeProvider as NextThemeProvider } from "next-themes";
import { type ReactNode } from "react";

import { MoodThemeProvider } from "@/providers/mood-theme-provider";

type ThemeProviderProps = {
  children: ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <NextThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <MoodThemeProvider>{children}</MoodThemeProvider>
    </NextThemeProvider>
  );
}
