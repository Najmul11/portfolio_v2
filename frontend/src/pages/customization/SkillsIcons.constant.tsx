import {
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoNodejs,
  BiLogoMongodb,
  BiLogoPostgresql,
} from "react-icons/bi";
import { FaSass, FaReact } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiPrisma,
  SiRedis,
} from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";

export const frontend = [
  {
    title: "Typescript",
    icon: <BiLogoTypescript className="text-ts" />,
  },
  {
    title: "Javascript",
    icon: <BiLogoJavascript className="text-js" />,
  },
  {
    title: "React",
    icon: <FaReact className="text-react" />,
  },
  {
    title: "NextJs",
    icon: <SiNextdotjs className="" />,
  },
  {
    title: "Redux",
    icon: <TbBrandRedux className="text-purple-500" />,
  },
  {
    title: "Tailwind",
    icon: <SiTailwindcss className="text-tailwind" />,
  },
  {
    title: "Sass",
    icon: <FaSass className="text-sass" />,
  },
];

export const backend = [
  {
    title: "NodeJs",
    icon: <BiLogoNodejs className=" text-node" />,
  },
  {
    title: "Express",
    icon: <SiExpress className="" />,
  },
  {
    title: "MongoDB",
    icon: <BiLogoMongodb className=" text-mongo" />,
  },
  {
    title: "PostgreSQL",
    icon: <BiLogoPostgresql className=" text-postgre" />,
  },
  {
    title: "Prisma",
    icon: <SiPrisma className=" text-prisma" />,
  },
  {
    title: "Redis",
    icon: <SiRedis className=" text-redis" />,
  },
];

export const others = [];
