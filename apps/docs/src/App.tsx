import { Outlet } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <div className="min-h-screen bg-chalkboard-background">
      <Sidebar />
      <main className="lg:pl-60">
        <div className="mx-auto max-w-4xl p-8 pt-16 lg:pt-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default App;
