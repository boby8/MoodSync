import type { ReactNode } from "react";

type MainContentProps = {
  children: ReactNode;
};

export function MainContent({ children }: MainContentProps) {
  return (
    <main className="flex-1">
      <section className="flex w-full flex-col gap-6 px-6 py-12">
        {children}
      </section>
    </main>
  );
}
