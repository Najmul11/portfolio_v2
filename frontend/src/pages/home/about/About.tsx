import AboutInfo from "./AboutInfo";
import AboutPhoto from "./AboutPhoto";

const About = () => {
  return (
    <div
      className="py-16 md:w-[70%] lg:w-5/6 xl:w-5/6 xxl:w-4/6 mx-auto"
      id="about"
    >
      <h2 className="text-4xl font-semi text-center">About Me</h2>
      <div className="mt-24 px-4 lg:px-0  flex flex-col-reverse lg:flex-row justify-center gap-10 lg:gap-0  items-center ">
        <AboutPhoto />
        <AboutInfo />
      </div>
    </div>
  );
};

export default About;
