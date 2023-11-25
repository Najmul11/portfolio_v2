/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "../../../yup/Schemas";
import { usePostEmailMutation } from "../../../redux/api/apiSlice";
import { ScaleLoader } from "react-spinners";
import toast from "react-hot-toast";

interface FormData {
  name: string;
  email: string;
  query: string;
}

const Form = () => {
  const { control, handleSubmit, formState, reset } = useForm<FormData>({
    resolver: yupResolver(contactSchema),
  });

  const [postEmail, { isLoading }] = usePostEmailMutation();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const response = (await postEmail(data)) as any;

    if (response.data) {
      toast.success("Thank you for getting in touch");
      reset();
    }
    if (response.errors) toast.error("Something went wrong. Try again later");
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex gap-10 flex-col w-full"
      >
        <div className="relative h-12">
          <label
            htmlFor="name"
            className={`absolute -top-2 left-2 z-10 bg-bg rounded px-1 text-xs font-semi  ${
              formState.errors.name ? "text-red-500" : ""
            }`}
          >
            {formState.errors.name ? formState.errors.name.message : "Name"}
          </label>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                type="text"
                className="absolute top-0 left-0 border-LightNavy px-3 border bg-transparent rounded h-full w-full lg:w-96 focus:outline-none"
              />
            )}
          />
        </div>
        <div className="relative h-12">
          <label
            htmlFor="email"
            className={`absolute -top-2 left-2 z-10 bg-bg rounded px-1 text-xs font-semi  ${
              formState.errors.email ? "text-red-500" : ""
            }`}
          >
            {formState.errors.email ? formState.errors.email.message : "Email"}
          </label>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                type="text"
                className="absolute top-0 left-0 px-3 border border-LightNavy  bg-transparent rounded h-full w-full lg:w-96 focus:outline-none "
              />
            )}
          />
        </div>
        <div className="relative h-28">
          <label
            htmlFor="project"
            className={`absolute -top-2 left-2 z-10 bg-bg rounded px-1 text-xs font-semi  ${
              formState.errors.email ? "text-red-500" : ""
            }`}
          >
            {formState.errors.query ? formState.errors.query.message : "Query"}
          </label>
          <Controller
            name="query"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <textarea
                {...field}
                className="absolute top-0 left-0 px-3 border border-LightNavy  bg-transparent rounded h-full w-full lg:w-96 focus:outline-none resize-none py-2 "
              />
            )}
          />
        </div>
        <div>
          <button className="py-3 px-8 border border-[#84ecfa] text-[#84ecfa] rounded text-md hover:bg-LightNavy duration-200 overflow-hidden font-mono active:bg-LightestNavy">
            {isLoading ? (
              <ScaleLoader width={3} height={10} color="#84ecfa" />
            ) : (
              "Send"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
