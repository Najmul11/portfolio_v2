import IntroDetails from "./IntroDetails";
import IntroIcons from "./IntroIcons";

const Intro = () => {
  return (
    <div
      className="lg:w-4/6 mx-auto pt-16 lg:pt-36 pb-16  px-4 lg:px-0"
      id="home"
    >
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-0 items-center ">
        <IntroIcons />
        <IntroDetails />
      </div>
    </div>
  );
};

export default Intro;
