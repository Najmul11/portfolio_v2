import Icons from "./Icons";

type IProps = {
  project: {
    title: string;
    image: string;
    details: string;
    live: string;
    code: string;
    video: string;
  };
};
const SingleProject = ({ project }: IProps) => {
  const { details, image, title, live, video, code } = project;

  return (
    <div className="flex justify-center">
      <div className="flex flex-col lg:flex-row gap-5 bg-LightNavy  rounded  shadow-sm">
        <div
          className={`${image} h-64 lg:h-72  lg:w-[600px] bg-project1 bg-top ease-in-out duration-eight bg-cover hover:bg-bottom cursor-pointer rounded `}
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
