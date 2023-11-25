/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLocation, useNavigate } from "react-router-dom";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import useTitle from "../../hooks/useTitle";
import { useUserLoginMutation } from "../../redux/api/apiSlice";
import jwtDecode from "jwt-decode";
import { setUser } from "../../redux/slices/userSlice";
import toast from "react-hot-toast";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../yup/Schemas";
import { useAppDispatch } from "../../redux/hooks";
import { setAccessToken } from "../../redux/slices/accessTokenSlice";

type IFormData = {
  _id?: string;
  email: string;
  password: string;
};

const Login = () => {
  useTitle("Login");
  const [userLogin, { isLoading }] = useUserLoginMutation();

  const { handleSubmit, control, formState } = useForm<IFormData>({
    resolver: yupResolver(loginSchema),
  });

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/dashboard";

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<IFormData> = async (data) => {
    const response = (await userLogin(data)) as any;
    if (response.data) {
      const accessToken = response.data?.data?.accessToken;

      await dispatch(setAccessToken(accessToken));
      const decodedToken: IFormData = jwtDecode(accessToken);
      await dispatch(setUser(decodedToken));
      toast.success(`Welcome Back Boss`);
      navigate(from, { replace: true });
    }
    if (response.error) toast.error(response.error.data.message);
  };

  return (
    <div className="min-h-screen bg-auth bg-no-repeat bg-center bg-cover">
      <div className="flex justify-center">
        <div className="mt-16 lg:mt-20 px-10 pt-10 pb-5">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex gap-4 flex-col pt-8"
          >
            <div className="flex flex-col gap-10">
              <div className="relative h-12 w-96">
                <label
                  className={`absolute -top-3 left-2 z-30 bg-bg px-1 text-sm font-semi ${
                    formState.errors.email ? "text-red-500" : ""
                  }`}
                >
                  {formState.errors.email
                    ? formState.errors.email.message
                    : "Email*"}
                </label>
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      placeholder="Email Address"
                      className="absolute top-0 left-0 px-3 border bg-transparent rounded h-full w-full lg:w-96 focus:outline-none"
                    />
                  )}
                />
              </div>
              <div>
                <div className="relative h-12">
                  <label
                    className={`absolute -top-3 left-2 z-30 bg-bg px-1 text-sm font-semi ${
                      formState.errors.password ? "text-red-500" : ""
                    }`}
                  >
                    {formState.errors.password
                      ? formState.errors.password.message
                      : "Password*"}
                  </label>
                  <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <input
                        {...field}
                        type="password"
                        placeholder="Password"
                        className="absolute top-0 left-0 px-3 border bg-transparent rounded h-full w-full lg:w-96 focus:outline-none"
                      />
                    )}
                  />
                </div>
              </div>
            </div>
            <div>
              <button
                disabled={isLoading}
                type="submit"
                className="px-8 h-12 text-highlight hover:bg-LightNavy  w-full border border-highlight bg-opacity-90 hover:bg-opacity-100 duration-200 rounded font-semi"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
