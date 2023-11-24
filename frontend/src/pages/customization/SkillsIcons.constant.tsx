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
    icon: <BiLogoNodejs className="text-5xl text-node" />,
  },
  {
    title: "Express",
    icon: <SiExpress className="text-5xl" />,
  },
  {
    title: "MongoDB",
    icon: <BiLogoMongodb className="text-5xl text-mongo" />,
  },
  {
    title: "PostgreSQL",
    icon: <BiLogoPostgresql className="text-5xl text-postgre" />,
  },
  {
    title: "Prisma",
    icon: <SiPrisma className="text-5xl text-prisma" />,
  },
  {
    title: "Redis",
    icon: <SiRedis className="text-5xl text-redis" />,
  },
];
