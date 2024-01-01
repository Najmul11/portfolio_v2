import { backend, frontend } from "../../customization/SkillsIcons.constant";
import SpecificSkills from "./SpecificSkills";

const Skills = () => {
  return (
    <div
      className="md:w-[60%] lg:w-5/6 xl:w-5/6 xxl:w-4/6 mx-auto py-16 relative"
      id="skills"
    >
      <h2 className="text-4xl font-semi text-center">Skills</h2>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-10 xl:gap-16 xxl:gap-32 mt-24 px-4 lg:px-0">
        <SpecificSkills title="Frontend" skills={frontend} index={0} />
        <SpecificSkills title="Backend" skills={backend} />
      </div>
    </div>
  );
};

export default Skills;
