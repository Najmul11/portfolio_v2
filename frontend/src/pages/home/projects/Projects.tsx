import { projects } from "../../customization/projects.constant";
import SingleProject from "./SingleProject";

const Projects = () => {
  return (
    <div className="md:w-[80%] lg:w-5/6  xl:w-4/6 mx-auto py-16" id="projects">
      <h2 className="text-4xl font-semi text-center">Projects</h2>
      <div className=" flex flex-col gap-10 mt-24">
        {projects.map((project, index) => (
          <SingleProject key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
