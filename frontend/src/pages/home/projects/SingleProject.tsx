import Icons from "./Icons";

type IProps = {
  project: {
    title: string;
    image: string;
    details: string;
    live: string;
    code: string;
    video?: string;
  };
};
const SingleProject = ({ project }: IProps) => {
  const { details, image, title, live, video, code } = project;

  return (
    <div
      className="flex justify-center "
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-2 bg-LightNavy  rounded  shadow-sm">
        <div
          className={`${image} h-64 lg:h-72  md:w-[400px] lg:w-[250px] lgtwo:w-[325px] lgthree:w-[425px] xl:w-[450px] xltwo:w-[530px] xlthree:w-[590px]  xxl:w-[600px] bg-project1 bg-top ease-in-out duration-[6000ms] bg-cover hover:bg-bottom cursor-pointer rounded `}
        >
          <div className="w-full h-full bg-highlight opacity-[.35] hover:opacity-0 duration-700"></div>
        </div>

        <div className="flex justify-between flex-col gap-10 p-5 lg:pl-0 w-96 select-none ">
          <div>
            <h3 className="text-center font-semi text-lg lg:text-right">
              {title}{" "}
            </h3>
            <p className="text-sm mt-10 text-second lg:text-right">{details}</p>
          </div>
          <Icons live={live} video={video} code={code} />
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
