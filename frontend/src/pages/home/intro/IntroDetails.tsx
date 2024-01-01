import { Link } from "react-router-dom";
import { introTag, mail } from "../../customization/AboutInfoText";

const IntroDetails = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-0 justify-center items-center w-full ">
      <div data-aos="fade-down" data-aos-duration="1000" className=" ">
        <div className=" lg:w-[65%] mx-auto text-center">
          <div className="flex  justify-center my-2 text-second">
            <h3 className="text-highlight  text-sm font-medium bg-highlight bg-opacity-20 py-1 px-3 rounded-full">
              Full Stack Developer
            </h3>
          </div>
          <h1 className="text-4xl lg:text-5xl font-semibold ">Najmul Hoque</h1>

          <div className="flex flex-col gap-14 mt-10">
            <p className="text-second text-center">{introTag}</p>
            <div className="flex gap-2 justify-center">
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
    </div>
  );
};

export default IntroDetails;
