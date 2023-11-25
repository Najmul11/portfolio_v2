import { FaDiscord, FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";
import {
  discord,
  github,
  linkedIn,
  whatsapp,
} from "../../customization/AboutInfoText";
import { IoLogoWhatsapp } from "react-icons/io";

const SideIcons = ({ isFooter }: { isFooter?: boolean }) => {
  return (
    <div
      className={`flex text-[20px] text-primary  ${
        isFooter
          ? "lg:hidden items-center justify-center gap-12 mb-2"
          : "flex-col gap-8  fixed w-20  bottom-20 left-[3%] sm:hidden lg:flex"
      }`}
    >
      <Link to={github} target="_blank">
        <FaGithub className="hover:text-highlight duration-200" />
      </Link>
      <Link to={linkedIn} target="_blank">
        <BsLinkedin className="hover:text-highlight duration-200" />
      </Link>
      <Link to={discord} target="_blank">
        <FaDiscord className="hover:text-highlight duration-200" />
      </Link>
      <Link to={whatsapp} target="_blank">
        <IoLogoWhatsapp className="hover:text-highlight duration-200 text-[22px]" />
      </Link>
    </div>
  );
};

export default SideIcons;
