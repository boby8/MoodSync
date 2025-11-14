import type { ReactNode } from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Logo } from "./logo";
import { Nav } from "./nav";
import type { NavItem } from "../types";

type HeaderProps = {
  navItems: NavItem[];
  actions?: ReactNode;
};

export function Header({ navItems, actions }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/95">
      <div className="flex w-full items-center justify-between gap-4 px-6 py-4">
        <Logo />
        <Nav items={navItems} />
        <div className="flex items-center gap-2">
          {actions}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
