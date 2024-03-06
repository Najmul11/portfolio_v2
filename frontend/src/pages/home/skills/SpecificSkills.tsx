/* eslint-disable @typescript-eslint/no-unused-vars */
type ISkills = {
  title: string;
  icon: JSX.Element;
};
type IProps = {
  title: string;
  skills: ISkills[];
  index?: number;
};

const SpecificSkills = ({ title, skills }: IProps) => {
  return (
    <div className="p-5 bg-LightNavy/70 rounded hover:scale-105 transition-transform duration-300">
      <h3 className="text-xl font-semi text-center">{title}</h3>
      <div className="flex flex-wrap justify-center gap-3 lg:gap-5 mt-8 mb-4">
        {skills.map((skill, i) => (
          <div
            key={i}
            className=" flex items-center gap-2 py-2 border px-3 border-second/60 rounded-md cursor-pointer hover:bg-second hover:text-LightNavy duration-200"
          >
            <span className="text-2xl">{skill.icon}</span>
            <p className="">{skill.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecificSkills;
