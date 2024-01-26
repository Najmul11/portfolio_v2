import { Outlet } from "react-router-dom";
import Nav from "../pages/sharedComponents/CoffeeLayout/Nav";
import Footer from "../pages/sharedComponents/CoffeeLayout/Footer";

const CoffeeLayout = () => {
  return (
    <div>
      <Nav />
      <div className="min-h-screen bg-white text-black">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default CoffeeLayout;
