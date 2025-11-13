import type { ReactNode } from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";

type NavItem = {
  label: string;
  href: string;
  isActive?: boolean;
};

type AppShellProps = {
  title: string;
  description?: string;
  navItems?: NavItem[];
  actions?: ReactNode;
  children: ReactNode;
};

const defaultNav: NavItem[] = [
  { label: "Dashboard", href: "#", isActive: true },
  { label: "Journal", href: "#journal" },
  { label: "Trends", href: "#trends" },
  { label: "Settings", href: "#settings" },
];

export function AppShell({
  title,
  description,
  actions,
  children,
  navItems = defaultNav,
}: AppShellProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur supports-backdrop-filter:bg-background/60">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-4">
          <div className="flex items-center gap-6">
            <span className="text-lg font-semibold tracking-tight">
              MoodSync
            </span>
            <nav className="hidden items-center gap-2 text-sm font-medium text-muted-foreground md:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`rounded-md px-3 py-1.5 transition-colors ${
                    item.isActive
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-muted hover:text-foreground"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-2">
            {actions}
            <ThemeToggle />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-12">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1">
              <h1 className="text-3xl font-semibold tracking-tight text-foreground">
                {title}
              </h1>
              {description ? (
                <p className="text-sm text-muted-foreground">{description}</p>
              ) : null}
            </div>
            <div className="flex items-center gap-2 sm:justify-end">
              {!actions ? (
                <Button variant="outline" size="sm">
                  Sync Mood
                </Button>
              ) : null}
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-12">{children}</div>
        </section>
      </main>
    </div>
  );
}
