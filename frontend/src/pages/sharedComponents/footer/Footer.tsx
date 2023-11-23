import { useEffect, useState } from "react";
import { FiGithub, FiMail } from "react-icons/fi";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";
import {
  github,
  linkedIn,
  mail,
  whatsapp,
} from "../../customization/AboutInfoText";

import sign from "../../../assets/sign.png";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="border-t bg-opacity bg-opacity-40">
      <div className="lg:w-4/6 lg:mx-[16.67%] py-10 mb-14 lg:mb-0 flex flex-col gap-10 ">
        <div className="flex justify-center">
          <img src={sign} alt="" className="w-32" />
        </div>
        <div className="flex justify-center gap-5">
          <Link
            to={github}
            target="_blank"
            className="shadow-md p-2 rounded-full hover:text-ts duration-200  "
          >
            <FiGithub className="text-2xl" />
          </Link>
          <Link
            target="_blank"
            to={linkedIn}
            className="shadow-md p-2 rounded-full hover:text-ts duration-200  "
          >
            <PiLinkedinLogoBold className="text-2xl" />
          </Link>

          <Link
            to={mail}
            target="_blank"
            className="shadow-md p-2 rounded-full hover:text-ts duration-200  "
          >
            <FiMail className="text-2xl" />
          </Link>
          <Link
            to={whatsapp}
            target="_blank"
            className="shadow-md p-2 rounded-full hover:text-ts duration-200  "
          >
            <BsWhatsapp className="text-2xl" />
          </Link>
        </div>
        <p className="text-center text-sm font-semi">
          &copy; {currentYear}, All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
