import { Metadata } from "next";
import { Home } from "./pages/home/page";

export const metadata: Metadata = {
  title: "Portfólio - YM",
  description: "",
};

export default function App() {
  return (
    <div>
      <Home />
    </div>
  );
}
