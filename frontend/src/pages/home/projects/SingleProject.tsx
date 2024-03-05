import { TProject } from "@/pages/customization/projects.constant";
import Icons from "./Icons";

const SingleProject = ({ project }: TProject) => {
  const { details, image, title, live, video, code, techs } = project;

  return (
    <div
      className="flex justify-center "
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-2 bg-LightNavy  rounded  shadow-sm ">
        <div
          className={`${image} h-64 lg:h-72  md:w-[400px] lg:w-[250px] lgtwo:w-[325px] lgthree:w-[425px] xl:w-[450px] xltwo:w-[530px] xlthree:w-[590px]  xxl:w-[600px] bg-project1 bg-top ease-in-out duration-[6000ms] bg-cover hover:bg-bottom cursor-pointer rounded `}
        >
          <div className="w-full h-full bg-highlight opacity-[.35] hover:opacity-0 duration-700 rounded"></div>
        </div>

        <div className="flex justify-between flex-col gap-5  p-5 lg:pl-0 w-96 select-none  ">
          <div className="flex flex-col gap-5">
            <h3 className="text-center font-semi text-lg lg:text-right">
              {title}
            </h3>
            <p className="text-sm mt-5  text-second lg:text-right">{details}</p>
          </div>

          <div className="flex flex-col gap-6 ">
            <div className="flex items-center justify-center lg:justify-end gap-3 ">
              {techs.map((tech, i) => (
                <p
                  key={i}
                  className="text-sm text-second border px-1 rounded border-second/80 cursor-pointer hover:bg-second hover:text-LightNavy duration-200"
                >
                  {tech}
                </p>
              ))}
            </div>
            <Icons live={live} video={video} code={code} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
