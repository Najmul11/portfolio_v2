import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { TProject } from "@/pages/customization/projects.constant";

const Web3Project = ({ project }: TProject) => {
  const { details, image, title, live, video, code, techs } = project;
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-LightNavy relative group/card  dark:hover:shadow-2xl    w-auto sm:w-[30rem] h-auto rounded-xl p-5 ">
        <CardItem translateZ="50" className="text-center font-semi text-lg">
          {title}
        </CardItem>

        <CardItem
          as="p"
          translateZ="60"
          className="max-w-sm mt-2  text-sm  text-second "
        >
          {details}
        </CardItem>

        <CardItem translateZ="100" className="w-full mt-6">
          <img
            src={image}
            className="h-60 w-full object-cover rounded-md group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>

        <div className="flex gap-3 items-center justify-center mt-10">
          {techs.map((tech, i) => (
            <p
              key={i}
              className="text-sm text-second border px-2 py-[2px] rounded border-second/80 cursor-pointer hover:bg-second hover:text-LightNavy duration-200"
            >
              {tech}
            </p>
          ))}
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default Web3Project;

{
  /* <div className="bg-LightNavy/50 p-5 rounded">
<img src={image} alt="" className="rounded " />

<div className="flex justify-between flex-col gap-5  mt-5 lg:pl-0 select-none  ">
  <div className="flex flex-col gap-5">
    <h3 className=" font-semi text-lg ">{title}</h3>
    <p className="text-sm  text-second ">{details}</p>
  </div>

  <div className="flex flex-col gap-6 mt-3">
    <div className="flex items-center justify-center gap-3 ">
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
</div> */
}
