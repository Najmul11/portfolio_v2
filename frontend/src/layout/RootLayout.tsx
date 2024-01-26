import { Outlet } from "react-router-dom";
import Header from "../pages/sharedComponents/header/Header";
import Footer from "../pages/sharedComponents/footer/Footer";
import SideIcons from "../pages/sharedComponents/sideIcons/SideIcons";
import { useEffect, useState } from "react";
import BuyMeCoffeeBtn from "../pages/sharedComponents/BuyMeCoffeeBtn/BuyMeCoffeeBtn";

const RootLayout = () => {
  const [showBuyMeCoffeeBtn, setShowBuyMeCoffeeBtn] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowBuyMeCoffeeBtn(true);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div>
      <Header />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
      <SideIcons />
      {showBuyMeCoffeeBtn && <BuyMeCoffeeBtn />}
    </div>
  );
};

export default RootLayout;
