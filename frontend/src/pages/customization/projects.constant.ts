import web3Project1 from "../../assets/web3Projects/project1.png";
export type TProject = {
  project: {
    title: string;
    image: string;
    details: string;
    live: string;
    code: string;
    video?: string;
    techs: string[];
  };
};

export const web2Projects = [
  {
    title: "Learnify",
    image: "bg-learnify",
    details:
      "A robust Learning Management System with ironclad Digital Rights Management for content security. Integrated with Stripe for secure transactions, it enables swift access to premium course videos. ",
    live: "https://learnify-v1.vercel.app/",
    code: "https://github.com/Najmul11/LMS-SkillDigger",
    video:
      "https://drive.google.com/file/d/1oyGxdD5Qt5nwlQwP4SMka73hqsJvMu7-/view?usp=sharing",
    techs: ["Next.js", "Node.js", "MongoDB"],
  },
  {
    title: "Imeginus",
    image: "bg-imagenius",
    details:
      "ImeGenius: A dynamic image marketplace with user authentication, cart management, and admin control for seamless digital image commerce. Elevates visual content experiences.",
    live: "https://imageniusbd.netlify.app/",
    code: "https://github.com/Najmul11/Imagenius-client",
    techs: ["Next.js", "Node.js", "PostgreSQL", "Prisma"],
  },
  {
    title: "Tiny Link",
    image: "bg-tinyLink",
    details:
      "Tiny Link provides a sleek platform for managing and sharing long URLs. Users can shorten URLs, set expiry dates, limit clicks, and track views. QR codes are also available for easy access.",
    live: "https://tiny-link-frontend.vercel.app/",
    code: "https://github.com/Najmul11/tiny-link",
    techs: ["Next.js", "Node.js", "PostgreSQL", "Prisma"],
  },
];
export const web3Projects = [
  {
    title: "Buy me a coffee",
    image: web3Project1,
    details:
      "A robust Learning Management System with ironclad Digital Rights Management for content security. Integrated with Stripe for secure transactions, it enables swift access to premium course videos. ",
    live: "https://learnify-v1.vercel.app/",
    code: "https://github.com/Najmul11/LMS-SkillDigger",
    techs: ["Next.js", "Solidity", "Ether.js"],
  },
];
