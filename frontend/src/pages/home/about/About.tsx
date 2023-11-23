import AboutInfo from "./AboutInfo";
import AboutPhoto from "./AboutPhoto";

const About = () => {
  return (
    <div className="py-16 lg:w-4/6 mx-auto" id="about">
      <h2 className="text-4xl font-semi text-center">About Me</h2>
      <div className="mt-24 px-4 lg:px-0  flex flex-col lg:flex-row justify-center gap-10 lg:gap-0  ">
        <AboutPhoto />
        <AboutInfo />
      </div>
    </div>
  );
};

export default About;
