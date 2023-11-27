/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import useTitle from "../../hooks/useTitle";

import { ScaleLoader } from "react-spinners";

import {
  useEditPostMutation,
  useGetSinglePostQuery,
} from "../../redux/api/apiSlice";
import { useAppSelector } from "../../redux/hooks";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Logout from "./Logout";

type IFormData = {
  title: string;
  details: string;
  image?: File | undefined;
  imagePreview?: string;
};

const EditPost = () => {
  useTitle("Edit post", "- Najmul Hoque");
  const { id } = useParams();
  const { data } = useGetSinglePostQuery(id ? id : undefined);

  const { control, handleSubmit, setValue, reset, watch, formState } =
    useForm<IFormData>();

  const [editPost, { isLoading }] = useEditPostMutation();

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];

    if (file) {
      const previewURL = URL.createObjectURL(file);
      setValue("image", file);
      setValue("imagePreview", previewURL);
    }
  };

  const navigate = useNavigate();

  const { accessToken } = useAppSelector((state) => state.accessToken);

  const onSubmit: SubmitHandler<IFormData> = async (data) => {
    const formData = new FormData();
    if (data.image) formData.append("file", data.image);
    formData.append("title", data.title);
    formData.append("details", data.details);

    const response = (await editPost({
      data: formData,
      accessToken,
      postId: id,
    })) as any;

    if (response.data) {
      reset();
      toast.success("Post edited");
      navigate("/journal");
    }
    if (response.error) toast.error("Something wrong");
  };

  const imagePreview = watch("imagePreview");

  return (
    <>
      <div className="min-h-screen  ">
        <div className=" flex justify-center gap-5">
          {data?.data && (
            <div className=" mt-16 lg:mt-20 px-10 pt-10 pb-5">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex gap-4  flex-col pt-8  "
              >
                <div className="flex flex-col gap-10">
                  <div className="flex items-center ">
                    <div className="relative  px-4">
                      <label
                        htmlFor="file-upload"
                        className="bg-gradient2 bg-opacity-40 transition-all duration-150 rounded-2xl px-4 py-1  cursor-pointer hover:bg-gradient2"
                      >
                        <span className="font-semi text-sm bg-LightNavy rounded-2xl p-2">
                          Select Image
                        </span>
                        <input
                          name="image"
                          onChange={(e) => handleFileChange(e)}
                          type="file"
                          id="file-upload"
                          className="absolute  w-full h-full opacity-0 "
                        />
                      </label>
                    </div>

                    <div className="shrink-0 ">
                      {imagePreview && (
                        <img
                          className="h-20 w-20 object-cover rounded-full"
                          src={imagePreview ? imagePreview : ""}
                        />
                      )}
                    </div>
                  </div>
                  <div className="relative h-12 w-96">
                    <label
                      htmlFor=""
                      className={`absolute -top-3 left-1 z-30 bg-bg px-1 text-sm font-semi ${
                        formState.errors.title ? "text-red-500" : ""
                      }`}
                    >
                      {formState.errors.title
                        ? formState.errors.title.message
                        : "Title*"}
                    </label>
                    <Controller
                      name="title"
                      control={control}
                      defaultValue={data?.data?.title}
                      render={({ field }) => (
                        <input
                          {...field}
                          type="text"
                          placeholder="Title"
                          className="absolute top-0 left-0 px-3 border bg-transparent rounded  h-full w-full  focus:outline-none"
                        />
                      )}
                    />
                  </div>
                  <div className="relative h-28 w-96">
                    <label
                      htmlFor=""
                      className={`absolute -top-3 left-1 z-30 bg-bg px-1 text-sm font-semi ${
                        formState.errors.details ? "text-red-500" : ""
                      }`}
                    >
                      {formState.errors.details
                        ? formState.errors.details.message
                        : "Details*"}
                    </label>
                    <Controller
                      name="details"
                      control={control}
                      defaultValue={data?.data?.details}
                      render={({ field }) => (
                        <textarea
                          {...field}
                          className="absolute top-0 left-0 px-3 border border-gray-300 bg-transparent rounded h-full w-full lg:w-96 focus:outline-none resize-none py-2"
                        />
                      )}
                    />
                  </div>
                </div>

                <div className="">
                  <button
                    type="submit"
                    className="px-8 h-14 text-highlight w-full border border-highlight bg-opacity-90 hover:bg-LightNavy duration-200  rounded font-semi "
                  >
                    {isLoading ? (
                      <ScaleLoader width={3} height={10} color="#84ecfa" />
                    ) : (
                      "Edit Post"
                    )}
                  </button>
                </div>
              </form>
              <Link
                to={"/journal"}
                className="px-8 h-14 text-redis w-full  flex justify-center items-center duration-200  rounded font-semi bg-LightNavy border border-highlight  mt-5"
              >
                Go Back
              </Link>
            </div>
          )}
        </div>
      </div>
      <Logout />
    </>
  );
};

export default EditPost;
