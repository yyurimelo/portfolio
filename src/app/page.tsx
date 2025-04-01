import { Home } from "./pages/home/page";
import Me from "./pages/me/page";
import Projects from "./pages/projects/page";

export default function App() {
  return (
    <div>
      <div className="min-h-screen">
        <Home />
      </div>
      <div>
        <Me />
      </div>
      <div className="min-h-screen">
        <Projects />
      </div>
    </div>
  );
}
