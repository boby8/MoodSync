import type { NavItem } from "../types";

type NavProps = {
  items: NavItem[];
};

export function Nav({ items }: NavProps) {
  return (
    <nav className="flex items-center gap-6 text-sm font-medium text-foreground">
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className={`transition-colors hover:text-primary ${
            item.isActive ? "text-primary" : "text-muted-foreground"
          }`}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
