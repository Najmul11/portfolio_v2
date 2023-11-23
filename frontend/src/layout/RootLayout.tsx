import { Outlet } from "react-router-dom";
import Header from "../pages/sharedComponents/header/Header";
import Footer from "../pages/sharedComponents/footer/Footer";

const RootLayout = () => {
  return (
    <div>
      <Header />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
