import { backend, frontend } from "../../customization/SkillsIcons.constant";
import SpecificSkills from "./SpecificSkills";
import darkon from "../../../assets/mainIconsdark.svg";

const Skills = () => {
  return (
    <div className="lg:w-4/6 mx-auto py-16 relative" id="skills">
      <img
        src={darkon}
        alt=""
        className="absolute h-72 top-36 left-[-40%] opacity-20 z-[-1]"
      />
      <h2 className="text-4xl font-semi text-center">Skills</h2>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-32 mt-24 px-4 lg:px-0">
        <SpecificSkills title="Frontend" skills={frontend} />
        <SpecificSkills title="Backend" skills={backend} />
      </div>
    </div>
  );
};

export default Skills;
