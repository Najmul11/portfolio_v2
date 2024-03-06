import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { TProject } from "@/pages/customization/projects.constant";
import Icons from "./Icons";

const Web3Project = ({ project }: TProject) => {
  const { details, image, title, live, video, code, techs } = project;
  return (
    <CardContainer className="inter-var ">
      <CardBody className="bg-LightNavy relative group/card     w-auto sm:w-[30rem]  rounded-xl p-5 ">
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

        <div className="flex flex-col gap-5 mt-8">
          <div className="flex gap-3 items-center justify-center ">
            {techs.map((tech, i) => (
              <p
                key={i}
                className="text-sm text-second border px-2 py-[2px] rounded border-second/80 cursor-pointer hover:bg-second hover:text-LightNavy duration-200"
              >
                {tech}
              </p>
            ))}
          </div>
          {live ? (
            <Icons live={live} video={video} code={code} />
          ) : (
            <p className="text-sm text-right">Coming soon</p>
          )}
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default Web3Project;
