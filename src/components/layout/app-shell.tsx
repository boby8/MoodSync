import type { ReactNode } from "react";
import { Header } from "./components/header";
import { MainContent } from "./components/main-content";
import { PageHeader } from "./components/page-header";
import type { NavItem } from "./types";
import { defaultNav } from "./constants";

type AppShellProps = {
  title?: string;
  description?: string;
  navItems?: NavItem[];
  actions?: ReactNode;
  children: ReactNode;
};

export function AppShell({
  title,
  description,
  actions,
  children,
  navItems = defaultNav,
}: AppShellProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header navItems={navItems} actions={actions} />
      <MainContent>
        {title && (
          <PageHeader
            title={title}
            description={description}
            actions={actions}
          />
        )}
        {children}
      </MainContent>
    </div>
  );
}
