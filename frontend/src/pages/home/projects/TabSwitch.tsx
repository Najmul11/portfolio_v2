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
    <Tabs defaultValue="account" className="">
      <TabsList className="mx-auto flex justify-center w-96">
        <TabsTrigger value="account" className="w-1/2">
          Web2
        </TabsTrigger>
        <TabsTrigger value="password" className="w-1/2">
          web3
        </TabsTrigger>
      </TabsList>

      <TabsContent value="account">
        <div className=" flex flex-col gap-10  ">
          {web2Projects.map((project, index) => (
            <SingleProject key={index} project={project} />
          ))}
        </div>
      </TabsContent>
      <TabsContent value="password">
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
