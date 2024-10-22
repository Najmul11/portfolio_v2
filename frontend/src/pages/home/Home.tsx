import useTitle from "../../hooks/useTitle";
import About from "./about/About";
import Contact from "./contact/Contact";
import Experience from "./experience/Experience";
import Intro from "./intro/Intro";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";

const Home = () => {
  useTitle("Najmul Hoque");
  return (
    // overflow hidden for animation , left right animation overflowing
    <div className="overflow-hidden">
      <Intro />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
