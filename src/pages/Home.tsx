import { useState, useEffect } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useMoodTheme } from "@/hooks/useMoodTheme";
import { useMoodStyle } from "@/hooks/useMoodStyle";
import { supabase } from "@/supabase-client";

const moods: Array<Parameters<typeof useMoodStyle>[0]> = [
  "happy",
  "calm",
  "sad",
  "angry",
  "excited",
  "peaceful",
  "neutral",
];

/**
 * Demonstrates mood-aware theming controls and adaptive surfaces.
 */
export function HomePage() {
  const [mood, setMood] = useState<(typeof moods)[number]>("calm");
  const {
    baseTheme,
    setBaseTheme,
    adaptiveEnabled,
    setAdaptiveEnabled,
    baseThemeTokens,
  } = useMoodTheme();
  const moodClasses = useMoodStyle(mood);

  useEffect(() => {
    async function readUsers() {
      const { data, error } = await supabase.from("moods").select("*");
      console.log("Users data:", data);
      console.log("Error:", error);
    }
    readUsers();
  }, []);

  return (
    <>
      <Card className="lg:col-span-8">
        <CardHeader className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <CardTitle className="text-2xl">Mood overview</CardTitle>
            <CardDescription>
              Tailor the UI by updating your current mood.
            </CardDescription>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {moods.map((option) => (
              <Button
                key={option}
                variant={option === mood ? "default" : "outline"}
                size="sm"
                onClick={() => setMood(option)}
                aria-pressed={option === mood}
              >
                {option}
              </Button>
            ))}
          </div>
        </CardHeader>
        <CardContent className="grid gap-4 sm:grid-cols-2">
          <div className={`${moodClasses.container} ${moodClasses.ring}`}>
            <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Current mood
            </p>
            <p className={`${moodClasses.text} mt-3 text-lg`}>
              You’re feeling <span className={moodClasses.badge}>{mood}</span>{" "}
              right now.
            </p>
          </div>
          <div className="rounded-xl border border-border/60 bg-muted/40 p-4 transition-all duration-350">
            <p className="text-sm font-medium text-muted-foreground">
              Theme base
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {(["serene", "midnight", "zen", "vibrant"] as const).map(
                (themeKey) => (
                  <Button
                    key={themeKey}
                    size="sm"
                    variant={baseTheme === themeKey ? "default" : "outline"}
                    onClick={() => setBaseTheme(themeKey)}
                  >
                    {themeKey}
                  </Button>
                )
              )}
            </div>
            <div className="mt-6 flex items-center justify-between rounded-xl border border-dashed border-border/50 bg-background/60 px-4 py-3">
              <span className="text-sm text-muted-foreground">
                Adaptive mood overlay
              </span>
              <Button
                variant={adaptiveEnabled ? "default" : "outline"}
                size="sm"
                onClick={() => setAdaptiveEnabled(!adaptiveEnabled)}
                aria-pressed={adaptiveEnabled}
              >
                {adaptiveEnabled ? "On" : "Off"}
              </Button>
            </div>
          </div>
          <div className="sm:col-span-2 rounded-xl border border-border/60 bg-muted/40 p-6">
            <h2 className={`text-lg font-semibold ${baseThemeTokens("text")}`}>
              Intentional focus
            </h2>
            <p className={`mt-2 text-sm ${baseThemeTokens("muted")}`}>
              Align your journaling environment to your current emotion.
              Adaptive mode blends your base palette with mood overlays for
              subtle but meaningful feedback.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="lg:col-span-4">
        <CardHeader>
          <CardTitle>Quick actions</CardTitle>
          <CardDescription>
            Tap into rituals that reinforce your chosen mood.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button variant="outline" className="w-full justify-start">
            ✍️ Journal prompt
          </Button>
          <Button variant="outline" className="w-full justify-start">
            🎧 Play mindful playlist
          </Button>
          <Button variant="outline" className="w-full justify-start">
            💬 Daily affirmation
          </Button>
        </CardContent>
      </Card>
    </>
  );
}
