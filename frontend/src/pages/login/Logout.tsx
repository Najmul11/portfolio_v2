import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { clearAccessToken } from "../../redux/slices/accessTokenSlice";
import { clearUser } from "../../redux/slices/userSlice";
import toast from "react-hot-toast";

const Logout = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await dispatch(clearAccessToken());
    await dispatch(clearUser());
    toast("Logout success");
    navigate("/");
  };
  return (
    <button
      onClick={handleLogout}
      className=" fixed top-10 left-[60%]  p-5 hover:bg-LightestNavy   flex justify-center items-center duration-200  rounded-full font-semi bg-LightNavy border border-highlight  mt-5"
    >
      Logout
    </button>
  );
};

export default Logout;
