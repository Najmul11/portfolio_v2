import profile from "../../assets/profile2.jpg";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import { BigNumber } from "ethers";
import Skeleton from "react-loading-skeleton";
import { contractAddress } from "../../const/CA";

const Profile = () => {
  const { contract } = useContract(contractAddress);

  const { data: totalSupporters, isLoading: totalSupportLoading } =
    useContractRead(contract, "getTotalCoffee");
  return (
    <div className="  relative flex items-start justify-center ">
      <img
        src={profile}
        alt=""
        className="rounded-full absolute -top-12 w-24 h-24"
      />

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-center">Najmul Hoque</h2>
        {totalSupportLoading ? (
          <Skeleton />
        ) : (
          <p className="text-center w-full text-gray-600 text-sm">
            💓 {BigNumber.from(totalSupporters._hex).toNumber()} supports
          </p>
        )}
        <p>writing bugs on the web</p>
      </div>
    </div>
  );
};

export default Profile;
