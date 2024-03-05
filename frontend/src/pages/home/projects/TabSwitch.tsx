import {
  web2Projects,
  web3Projects,
} from "@/pages/customization/projects.constant";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs";
import SingleProject from "./SingleProject";
const TabSwitch = () => {
  return (
    <Tabs defaultValue="web2" className="">
      <TabsList className="mx-auto flex justify-center w-96 lg:w-4/5 lgtwo:w-2/3 lgthree:w-4/5 xl:w-3/4 xltwo:w-2/3 xxl:w-1/2 bg-LightNavy font-semibold mb-8 ">
        <TabsTrigger
          value="web2"
          className="w-1/2 font-bold  data-[state=active]:bg-white/80 "
        >
          Web2
        </TabsTrigger>

        <TabsTrigger
          value="web3"
          className="w-1/2 font-bold data-[state=active]:bg-white/80"
        >
          Web3
        </TabsTrigger>
      </TabsList>

      <TabsContent value="web2">
        <div className=" flex flex-col gap-10  ">
          {web2Projects.map((project, index) => (
            <SingleProject key={index} project={project} />
          ))}
        </div>
      </TabsContent>
      <TabsContent value="web3">
        <div className=" flex flex-col gap-10  ">
          {web3Projects.map((project, index) => (
            <SingleProject key={index} project={project} />
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default TabSwitch;
