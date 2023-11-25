import { Link } from "react-router-dom";
import { introTag, mail } from "../../customization/AboutInfoText";

const IntroDetails = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-0 justify-between items-center w-full ">
      <div className=" lg:w-1/2">
        <div className="md:w-[60%] lg:w-[80%] mx-auto">
          <h1 className="text-4xl lg:text-5xl font-semibold ">Najmul Hoque</h1>

          <div className="flex gap-2 items-center my-3 text-second">
            <hr className="w-8 border text-second border-gray-400" />
            <h3 className="text-second text-lg font-medium">
              Full Stack Developer
            </h3>
          </div>

          <div className="flex flex-col gap-14 mt-14">
            <p className="text-second">{introTag}</p>
            <div>
              <Link
                to={mail}
                className="py-3 px-8 border border-highlight text-highlight font-thin text-md hover:bg-LightNavy font-mono rounded active:bg-LightestNavy"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className=" hidden lg:flex lg:justify-end justify-center relative lg:w-1/2 w-full ">
        <div className=" w-56 h-64 lg:w-80 lg:h-80 bg-no-repeat bg-center  bg-cover bg-icons lg:mr-12 opacity-[.35] "></div>
      </div>
    </div>
  );
};

export default IntroDetails;
