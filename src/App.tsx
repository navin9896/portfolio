import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-100">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-slate-900 focus:px-3 focus:py-2"
      >
        Skip to content
      </a>
      <Navbar />
      <main className="pt-16">
        <section id="home">
          <Hero />
        </section>
        <section id="about" className="scroll-mt-24">
          <About />
        </section>
        <section id="skills" className="scroll-mt-24">
          <Skills />
        </section>
        <section id="projects" className="scroll-mt-24">
          <Projects />
        </section>
        <section id="contact" className="scroll-mt-24">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

