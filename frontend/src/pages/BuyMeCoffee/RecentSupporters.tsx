import { useContract, useContractRead } from "@thirdweb-dev/react";
import { CiCoffeeCup } from "react-icons/ci";
import { contractAddress } from "../../const/CA";
import SupportSkeleton from "../sharedComponents/_skeleton/SupportSkeleton";

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const RecentSupporters = () => {
  const { contract } = useContract(contractAddress);

  const { data: allCoffee, isLoading } = useContractRead(
    contract,
    "getAllCoffee"
  );

  function formatString(input: string) {
    const start = input.slice(0, 5);
    const end = input.slice(-2);
    return `${start}.....${end}`;
  }

  const color = getRandomColor();
  return (
    <div className="lg:col-span-2 border rounded p-4 lg:p-5 w-full ">
      <h2 className="text-xl font-semibold">Recent supporters</h2>
      <div className="flex flex-col gap-5 mt-5">
        {isLoading ? (
          <SupportSkeleton />
        ) : (
          <>
            {allCoffee &&
              // to use reverse need to use spreadoperator for immutability
              [...allCoffee].reverse().map((coffee: string[]) => (
                <div
                  key={coffee[0]}
                  className={`flex gap-3 w-full ${
                    coffee[2] ? "" : "items-center"
                  }`}
                >
                  <div className="w-10 h-10 bg-gray-700  rounded-full text-2xl flex justify-center items-center">
                    <CiCoffeeCup style={{ color: color }} />
                  </div>

                  <div className=" w-[90%] flex flex-col gap-3">
                    <p className="text-sm">
                      <span className="font-semibold">
                        {coffee[1] || formatString(coffee[0])}
                      </span>{" "}
                      bought {coffee[3] === "1" ? "a " : coffee[3] + " "}
                      coffee.
                    </p>
                    {coffee[1] && (
                      <div className="flex">
                        <p className="lg:max-w-[85%] border border-blue-200 p-3 rounded-md  text-sm bg-blue-200/10">
                          {coffee[2]}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
          </>
        )}
      </div>
    </div>
  );
};

export default RecentSupporters;
