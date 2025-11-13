import { AppShell } from "@/components/layout/app-shell";
import { HomePage } from "@/pages/Home";

function App() {
  return (
    <AppShell
      title="Today’s emotional snapshot"
      description="Track how you feel, capture why, and keep your rhythm aligned with intentional habits."
    >
      <HomePage />
    </AppShell>
  );
}

export default App;
