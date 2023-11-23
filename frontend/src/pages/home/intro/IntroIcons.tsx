import { Link } from "react-router-dom";
import { FiGithub } from "react-icons/fi";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { github, linkedIn } from "../../customization/AboutInfoText";

const IntroIcons = () => {
  return (
    <div className="flex  lg:flex-col gap-10 lg:gap-5 text-2xl lg:w-1/6  w-full justify-center">
      <Link target="_blank" to={github} className="">
        <FiGithub className="hover:text-ts transition-colors  duration-200" />
      </Link>
      <Link target="_blank" to={linkedIn}>
        <PiLinkedinLogoBold className="hover:text-ts transition-colors  duration-200 " />
      </Link>
    </div>
  );
};

export default IntroIcons;
