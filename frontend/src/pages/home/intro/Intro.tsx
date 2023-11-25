import IntroDetails from "./IntroDetails";

const Intro = () => {
  return (
    <div
      className="lg:w-4/6 mx-auto  px-4 lg:px-0 h-[90vh] lg:h-[100vh]  flex items-center "
      id="home"
    >
      <IntroDetails />
    </div>
  );
};

export default Intro;
