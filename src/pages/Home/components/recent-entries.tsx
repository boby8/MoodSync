export function RecentEntries() {
  const entry = {
    date: "April 23, 2024",
    text: "A bright sunny day! Enjoyed a lovely walk outside in the warm sun.",
  };

  return (
    <div className="rounded-2xl border border-border/40 bg-card p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-foreground">
          Recent Journal Entries
        </h2>
        <span className="text-sm text-muted-foreground">{entry.date}</span>
      </div>
      <p className="text-muted-foreground">{entry.text}</p>
    </div>
  );
}
