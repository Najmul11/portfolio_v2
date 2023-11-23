import { BsWhatsapp } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { mail, whatsapp } from "../../customization/AboutInfoText";

const ContactIcons = () => {
  return (
    <div className="absolute lg:flex-col gap-8 lg:h-60 lg:mt-8 lg:right-[52%] flex justify-center ">
      <a href={whatsapp} target="_blank" rel="noopener noreferrer">
        <BsWhatsapp className=" hover:-translate-y-1 duration-200 text-ts cursor-pointer text-3xl " />
      </a>
      <a href={mail} target="_blank" rel="noopener noreferrer">
        <FiMail className="text-3xl  hover:-translate-y-1 duration-200 text-ts cursor-pointer " />
      </a>
    </div>
  );
};

export default ContactIcons;
