import Spotlight from "../../sharedComponents/spotlight/spotlight";
import IntroDetails from "./IntroDetails";

const Intro = () => {
  return (
    <div
      className="md:w-[60%]  lg:w-5/6  xl:w-5/6 xxl:w-4/6 mx-auto  px-4 lg:px-0 h-[90vh] lg:h-[100vh]  flex items-center"
      id="home"
    >
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-40" fill="red" />
      <IntroDetails />
    </div>
  );
};

export default Intro;
