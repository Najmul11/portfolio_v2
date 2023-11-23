import { introTag } from "../../customization/AboutInfoText";

const IntroDetails = () => {
  return (
    <div className="lg:w-5/6 flex flex-col-reverse lg:flex-row gap-10 lg:gap-0 justify-between items-center ">
      <div className=" lg:w-[40%]">
        <h1 className="text-4xl lg:text-5xl font-semibold ">Najmul Hoque</h1>
        <div className="flex gap-2 items-center my-3">
          <hr className="w-8 border border-gray-400" />
          <h3>Full Stack Developer</h3>
        </div>
        <p>{introTag}</p>
      </div>

      <div className="lg:w-[60%] flex justify-end ">
        <div className="w-80 h-80 bg-profile bg-no-repeat bg-center  bg-cover shadow-white-inset intro-img animate-radius lg:mr-12"></div>
      </div>
    </div>
  );
};

export default IntroDetails;
