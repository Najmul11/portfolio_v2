import { backend, frontend } from "../../customization/SkillsIcons.constant";
import SpecificSkills from "./SpecificSkills";

const Skills = () => {
  return (
    <div
      className="md:w-[80%] lg:w-5/6 xl:w-6/6 xxl:w-5/6 mx-auto py-16 relative"
      id="skills"
    >
      <h2 className="text-4xl font-semi text-center">Skills</h2>

      <div className=" max-w-screen-xl grid grid-cols-1 lg:grid-cols-2 gap-5 mx-auto  mt-24 px-4">
        <SpecificSkills title="Frontend" skills={frontend} />
        <SpecificSkills title="Backend" skills={backend} />

        {/* <div className="col-span-2 ">
          <SpecificSkills title="Others" skills={backend} />
        </div> */}
      </div>
    </div>
  );
};

export default Skills;
