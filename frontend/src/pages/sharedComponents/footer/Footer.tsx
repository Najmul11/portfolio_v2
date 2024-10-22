import { Link } from "react-router-dom";
import { github, lastUpdate } from "../../customization/AboutInfoText";
import SideIcons from "../sideIcons/SideIcons";

const Footer = () => {
  return (
    <div className="pt-32 pb-5 flex flex-col gap-3 mb-12 lg:mb-0 ">
      <SideIcons isFooter={true} />
      <div className=" font-mono text-second text-[13px] flex flex-col lg:flex-row items-center justify-center ">
        <Link
          to={github}
          className="hover:text-highlight duration-200 mr-5 lg:mr-0"
        >
          Designed & Built by Najmul&nbsp;&nbsp;|
        </Link>{" "}
        <p className="text-second font-mono text-[13px] text-center">
          &nbsp;&nbsp;{lastUpdate}
        </p>
      </div>
    </div>
  );
};

export default Footer;
