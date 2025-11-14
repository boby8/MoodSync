import { Button } from "@/components/ui/button";

const actions = [
  { id: "journal", label: "Write in Journal", icon: "📝" },
  { id: "gratitude", label: "Reflect on Gratitude", icon: "✅" },
  { id: "entry", label: "Add a New Entry", icon: "🏔️" },
];

export function QuickActions() {
  return (
    <div className="rounded-2xl border border-border/40 bg-card p-6 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold text-foreground">
        Quick Actions
      </h2>
      <div className="space-y-3">
        {actions.map((action) => (
          <Button
            key={action.id}
            variant="outline"
            className="w-full justify-start gap-3 text-left"
          >
            <span className="text-xl">{action.icon}</span>
            <span>{action.label}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}
