import { useState } from "react";
import SupportBtn from "./SupportBtn";
import { Web3Button } from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { contractAddress } from "../../const/CA";

const Support = () => {
  const [amount, setAmount] = useState<number>(1);

  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  const setInput = (input: number) => {
    setAmount(input);
  };

  const clearInputs = () => {
    setMessage("");
    setName("");
  };

  return (
    <div className="border rounded-md p-4 lg:p-5 w-96 mx-auto ">
      <p className="text-xl font-bold">
        Buy <span className="text-gray-500">Najmul</span> a coffee
      </p>

      <div className="flex flex-col gap-3 mt-5">
        <div className="p-5 bg-blue-200/10 border border-blue-200/50 rounded m">
          <div className="flex gap-5 items-center font-semibold">
            <span className="text-4xl">☕</span>

            <span className="text-gray-500">x</span>

            <div className="flex gap-3 justify-end w-full ">
              <SupportBtn amount={amount} input={1} setInput={setInput} />
              <SupportBtn amount={amount} input={3} setInput={setInput} />
              <SupportBtn amount={amount} input={5} setInput={setInput} />

              <input
                type="number"
                value={amount}
                placeholder="10"
                defaultValue={1}
                onChange={(e) => setInput(parseInt(e.target.value))}
                className="px-1 w-10 h-10 border rounded focus:border-gray-400 focus:outline-none text-center font-normal"
              />
            </div>
          </div>
        </div>

        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Name or @yourtwitter (optional)"
          className="placeholder:text-slate-500 placeholder:text-sm p-2 border w-full rounded focus:outline-none focus:border-gray-400/80"
        />

        <textarea
          name=""
          id=""
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Say something nice (optional)"
          rows={4}
          className="placeholder:text-slate-500 placeholder:text-sm p-2 border w-full rounded focus:outline-none focus:border-gray-400/80 resize-none"
        />

        <Web3Button
          contractAddress={contractAddress}
          action={async (contract) => {
            contract.call("buyCoffee", [message, name, amount || 1], {
              value: ethers.utils.parseEther(`${amount || 1 * 1}`),
            });
          }}
          onSuccess={() => clearInputs()}
          className="!bg-blue-500 !py-2 !rounded-full !font-semibold !text-white hover:!scale-[102%] !duration-300"
        >
          Support {amount ? amount : 1} Matic
        </Web3Button>
      </div>
    </div>
  );
};

export default Support;
