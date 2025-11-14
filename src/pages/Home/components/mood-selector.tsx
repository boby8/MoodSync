const moods = [
  { id: "happy", label: "Happy", emoji: "😊" },
  { id: "calm", label: "Calm", emoji: "😌" },
  { id: "sad", label: "Sad", emoji: "😢" },
  { id: "angry", label: "Angry", emoji: "😠" },
  { id: "excited", label: "Excited", emoji: "🤩" },
  { id: "peaceful", label: "Peaceful", emoji: "😇" },
  { id: "neutral", label: "Neutral", emoji: "😐" },
] as const;

type MoodSelectorProps = {
  selectedMood?: string;
  onSelectMood: (mood: string) => void;
};

export function MoodSelector({
  selectedMood,
  onSelectMood,
}: MoodSelectorProps) {
  return (
    <div className="rounded-2xl border border-border/40 bg-card p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-semibold text-foreground">
        How are you feeling?
      </h2>
      <div className="flex flex-wrap gap-4">
        {moods.map((mood) => (
          <button
            key={mood.id}
            onClick={() => onSelectMood(mood.id)}
            className={`flex flex-col items-center gap-2 rounded-full p-4 transition-all ${
              selectedMood === mood.id
                ? "bg-primary/10 ring-2 ring-primary"
                : "bg-muted/40 hover:bg-muted/60"
            }`}
          >
            <span className="text-3xl">{mood.emoji}</span>
            <span className="text-sm font-medium text-foreground">
              {mood.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
