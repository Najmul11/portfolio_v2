import { Outlet } from "react-router-dom";
import JournalHeader from "../pages/sharedComponents/header/JournalHeader";
import Footer from "../pages/sharedComponents/footer/Footer";

const JournalLayout = () => {
  return (
    <div>
      <JournalHeader />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default JournalLayout;
