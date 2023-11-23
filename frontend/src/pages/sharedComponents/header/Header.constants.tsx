import { BiHomeSmile, BiSend } from "react-icons/bi";
import { GoPerson } from "react-icons/go";
import { BsFileEarmarkBarGraph } from "react-icons/bs";
import { AiOutlineProject } from "react-icons/ai";
import { IoJournalOutline } from "react-icons/io5";

export const menus = [
  {
    title: "Home",
    icon: <BiHomeSmile />,
    id: "home",
  },
  {
    title: "About",
    icon: <GoPerson className="" />,
    id: "about",
  },
  {
    title: "Skills",
    icon: <BsFileEarmarkBarGraph />,
    id: "skills",
  },
  {
    title: "Contact",
    icon: <BiSend />,
    id: "contact",
  },
  {
    title: "Projects",
    icon: <AiOutlineProject />,
    id: "projects",
  },
  {
    title: "Journal",
    icon: <IoJournalOutline />,
    id: "journal",
  },
];
