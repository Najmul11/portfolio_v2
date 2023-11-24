import useTitle from "../../hooks/useTitle";
import About from "./about/About";
import Contact from "./contact/Contact";
import Intro from "./intro/Intro";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";

const Home = () => {
  useTitle("Najmul Hoque");
  return (
    <div>
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
