type ISkills = {
  title: string;
  icon: JSX.Element;
};
type IProps = {
  title: string;
  skills: ISkills[];
};

const SpecificSkills = ({ title, skills }: IProps) => {
  return (
    <div className="py-5 rounded-xl border-[1px] lg:w-96 w-full bg-opacity bg-opacity-50 shadow-sm">
      <h1 className="font-semi text-center text-lg">{title}</h1>
      <div className="grid grid-cols-3 gap-x-5 items-center justify-items-center gap-y-5 mt-12">
        {skills.map((skill, index) => {
          const { icon, title } = skill;
          return (
            <div
              key={index}
              className="text-5xl cursor-pointer hover:-translate-y-1 transition-transform duration-200 relative group"
            >
              {icon}
              <div className="absolute top-[-18px] opacity-0 group-hover:opacity-100 duration-300">
                <p className="text-sm">{title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SpecificSkills;
