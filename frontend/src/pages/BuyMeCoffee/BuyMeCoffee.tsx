import Banner from "./Banner";
import Profile from "./Profile";
import RecentSupporters from "./RecentSupporters";
import Support from "./Support";

const BuyMeCoffee = () => {
  return (
    <div className="">
      <Banner />
      <Profile />

      <div className=" flex flex-col-reverse justify-center lg:flex-row gap-5   xl:w-[60%] xl:min-w-[1000px] mx-auto  mt-5  xl:px-[unset] pb-20 ">
        <div className="flex-grow px-2">
          <RecentSupporters />
        </div>

        <div className="">
          <Support />
        </div>
      </div>
    </div>
  );
};

export default BuyMeCoffee;
