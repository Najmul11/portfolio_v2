import { Toaster } from "react-hot-toast";
import "./App.css";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { setUser } from "./redux/slices/userSlice";
import jwtDecode from "jwt-decode";
import { useAppDispatch } from "./redux/hooks";
import ScrollTopAuto from "./pages/sharedComponents/scrollToTopAuto/ScrollTopAuto";
import CursorGlow from "./pages/sharedComponents/CursorGlow/CursorGlow";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      try {
        const decodedToken = jwtDecode(accessToken);

        dispatch(setUser(decodedToken));
      } catch (error) {
        console.error("Error decoding access token:", error);
      }
    }
  }, [dispatch]);

  return (
    <>
      <ScrollTopAuto />
      <CursorGlow />
      <Toaster />
      <Outlet />
    </>
  );
}

export default App;
