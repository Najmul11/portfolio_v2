import Form from "./Form";
import NpxCard from "./NpxCard";

const Contact = () => {
  return (
    <div className="lg:w-4/6 mx-auto pt-16 pb-32 " id="contact">
      <h2 className="text-4xl font-semi text-center ">Contact</h2>

      <div className="flex flex-col  lg:flex-row mt-24 gap-12 lg:gap-0">
        <div className=" w-full lg:w-1/2   lg:flex justify-center  relative px-4">
          <NpxCard />
        </div>
        <div className="w-full lg:w-1/2 px-4 lg:px-12">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Contact;
