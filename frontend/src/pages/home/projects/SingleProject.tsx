import Icons from "./Icons";

type IProps = {
  project: {
    title: string;
    image: string;
    details: string;
    live: string;
    frontend: string;
    backend: string;
  };
};
const SingleProject = ({ project }: IProps) => {
  const { details, image, title, live, backend, frontend } = project;

  return (
    <div className="flex justify-center">
      <div className="flex flex-col lg:flex-row gap-5 bg-opacity bg-opacity-50 rounded-xl border-b shadow-sm">
        <div
          className={`${image} h-64 lg:h-72  lg:w-[600px] bg-project1 bg-top ease-in-out duration-eight bg-cover hover:bg-bottom cursor-pointer rounded-xl `}
        ></div>

        <div className="flex justify-between flex-col gap-10 p-5 w-96">
          <h3 className="text-center font-semi text-lg">{title} </h3>
          <p>{details}</p>
          <Icons live={live} backend={backend} frontend={frontend} />
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
