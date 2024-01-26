type Props = {
  input: number;
  setInput: (input: number) => void;
  amount: number;
};
const SupportBtn = ({ input, setInput, amount }: Props) => {
  return (
    <button
      onClick={() => setInput(input)}
      className={` ${
        amount === input ? "bg-blue-500 text-white" : ""
      } w-10 h-10 rounded-full flex justify-center border items-center hover:border-blue-400 duration-200`}
    >
      {input}
    </button>
  );
};

export default SupportBtn;
