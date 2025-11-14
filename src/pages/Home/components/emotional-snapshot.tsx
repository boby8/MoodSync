type EmotionalSnapshotProps = {
  mood?: string;
};

export function EmotionalSnapshot({ mood }: EmotionalSnapshotProps) {
  const moodText = mood || "calm";

  return (
    <div className="rounded-2xl border border-border/40 bg-card p-6 shadow-sm">
      <h2 className="mb-3 text-lg font-semibold text-foreground">
        Today's emotional snapshot
      </h2>
      <p className="text-muted-foreground">
        You were mostly{" "}
        <span className="font-semibold text-foreground">{moodText}</span> this
        morning. Keep up the positive{" "}
        <span className="font-semibold text-foreground">energy</span>!
      </p>
    </div>
  );
}
