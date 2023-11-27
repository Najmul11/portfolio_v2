import { Link } from "react-router-dom";
import { github, lastUpdate } from "../../customization/AboutInfoText";
import SideIcons from "../sideIcons/SideIcons";

const Footer = () => {
  return (
    <div className="pt-32 pb-5 flex flex-col gap-3 mb-12 lg:mb-0 ">
      <SideIcons isFooter={true} />
      <div className=" font-mono text-second text-[13px] flex flex-col lg:flex-row items-center justify-center ">
        <Link
          to={"https://github.com/bchiang7/v4"}
          className="hover:text-highlight duration-200"
        >
          Inspired From Brittany Chiang |
        </Link>{" "}
        <Link
          to={github}
          className="hover:text-highlight duration-200 mr-5 lg:mr-0"
        >
          &nbsp;&nbsp;| Designed & Built by Najmul
        </Link>{" "}
      </div>
      <p className="text-second font-mono text-[13px] text-center">
        {lastUpdate}
      </p>
    </div>
  );
};

export default Footer;
