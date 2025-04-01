import { Home } from "./pages/home/page";
import { Me } from "./pages/me/page";

export default function App() {
  return (
    <>
      <div className="min-h-screen px-4">
        <Home />
      </div>
      <Me />
    </>
  );
}
