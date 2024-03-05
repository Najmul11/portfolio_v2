import TabSwitch from "./TabSwitch";

const Projects = () => {
  return (
    <div className="md:w-[80%] lg:w-5/6  xl:w-4/6 mx-auto py-16 " id="projects">
      <h2 className="text-4xl font-semi text-center">Projects</h2>

      <div className="mt-20 mx-auto ">
        <TabSwitch />
      </div>
    </div>
  );
};

export default Projects;
