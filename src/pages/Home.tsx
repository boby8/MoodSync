import { useState, useEffect } from "react";
import { supabase } from "@/supabase-client";
import { MoodSelector } from "./Home/components/mood-selector";
import { EmotionalSnapshot } from "./Home/components/emotional-snapshot";
import { QuickActions } from "./Home/components/quick-actions";
import { RecentEntries } from "./Home/components/recent-entries";

export function HomePage() {
  const [selectedMood, setSelectedMood] = useState<string>("calm");

  useEffect(() => {
    async function readUsers() {
      const { data, error } = await supabase.from("users").select("*");
      console.log("Users data:", data);
      console.log("Error:", error);
    }
    readUsers();
  }, []);

  return (
    <div className="space-y-6">
      <MoodSelector
        selectedMood={selectedMood}
        onSelectMood={setSelectedMood}
      />
      <div className="grid gap-6 lg:grid-cols-2">
        <EmotionalSnapshot mood={selectedMood} />
        <QuickActions />
      </div>
      <RecentEntries />
    </div>
  );
}
