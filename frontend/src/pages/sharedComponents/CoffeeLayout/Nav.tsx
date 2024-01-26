import logo from "../../../assets/logo.png";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import { Link } from "react-router-dom";

const Nav = () => {
  const address = useAddress();

  return (
    <div className="py-3 pl-3 pr-4 bg-white ">
      <div className="w-full lg:w-[95%]  mx-auto flex justify-between items-center">
        {/* logo */}
        <Link to={"/"}>
          <img src={logo} alt="" width={50} height={50} />
        </Link>

        <div className="flex items-center gap-10 ">
          <ConnectWallet
            className={`!border !py-2 !px-5   !text-sm !font-semibold !rounded ${
              address ? "!bg-gray-800" : ""
            }  duration-200`}
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
