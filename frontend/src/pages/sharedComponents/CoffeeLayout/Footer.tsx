import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="h-28  bg-[#F9F9F9]">
      <div className="xl:w-[60%] xl:min-w-[1000px] mx-auto flex justify-between items-center h-full px-4 lg:px-[unset]">
        <div className="flex gap-5 items-center text-2xl text-black">
          <Link
            className="hover:text-blue-500 duration-200"
            to={"https://www.linkedin.com/in/najmulhoque-/"}
          >
            <FaLinkedin />
          </Link>

          <Link
            className="hover:text-blue-500 duration-200"
            to={"https://discord.com/channels/@slise.web3"}
          >
            <FaDiscord />
          </Link>
          <Link
            className="hover:text-blue-500 duration-200 text-2xl"
            to={"https://github.com/Najmul11"}
          >
            <FaGithub />
          </Link>
        </div>
        <div className="flex gap-5 items-center text-black">
          <Link className="hover:text-blue-500 duration-200 text-3xl" to={"/"}>
            <CiGlobe />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
