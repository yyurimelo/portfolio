import About from "./pages/about/page";
import Home from "./pages/home/page";
import Skills from "./pages/skills/page";

export default function App() {
  return (
    <>
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
    </>
  );
}
