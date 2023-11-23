import { Link } from "react-router-dom";
import { aboutInfo, resume } from "../../customization/AboutInfoText";

const AboutInfo = () => {
  return (
    <div className="lg:w-1/2 lg:h-80 flex flex-col justify-center gap-20">
      <p className="text-md lg:w-[80%]">{aboutInfo}</p>
      <div>
        <Link
          to={resume}
          target="_blank"
          className="px-8 py-2 bg-ts bg-opacity-90 hover:bg-opacity-100 duration-200 text-white rounded-lg font-semi"
        >
          Resume
        </Link>
      </div>
    </div>
  );
};

export default AboutInfo;
