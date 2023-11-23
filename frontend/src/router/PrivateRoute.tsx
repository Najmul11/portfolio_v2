import { Navigate, useLocation } from "react-router-dom";
import { ReactNode } from "react";
import { useAppSelector } from "../redux/hooks";
import { useGetProfileQuery } from "../redux/api/apiSlice";
import { PropagateLoader } from "react-spinners";

type IProps = {
  children: ReactNode;
};

const PrivateRoute = ({ children }: IProps) => {
  const location = useLocation();

  const { accessToken } = useAppSelector((state) => state.accessToken);
  const { data: user, isLoading } = useGetProfileQuery(accessToken);

  if (isLoading) {
    return (
      <div className="flex h-screen justify-center items-center">
        <PropagateLoader color="#000000" loading />
      </div>
    );
  }

  if (!user?.data) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
