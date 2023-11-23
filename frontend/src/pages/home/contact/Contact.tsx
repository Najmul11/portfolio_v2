import ContactIcons from "./ContactIcons";
import contact from "../../../assets/contact.png";
import Form from "./Form";

const Contact = () => {
  return (
    <div className="lg:w-4/6 mx-auto pt-16 pb-32 " id="contact">
      <h2 className="text-4xl font-semi text-center ">Contact</h2>

      <div className="flex mt-24">
        <div className=" w-1/2  hidden  lg:flex justify-center relative">
          <img src={contact} alt="" className="h-64  my-6 " />
          <ContactIcons />
        </div>
        <div className="w-full lg:w-1/2 px-4 lg:px-0">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Contact;
