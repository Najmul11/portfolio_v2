const NpxCard = () => {
  return (
    <div className=" flex flex-col gap-10 lg:mt-12 text-center lg:text-left z-10">
      <div className="flex flex-col gap-5">
        <h1 className="text-xl text-center">
          Connect With me as a true <br className="hidden lg:block" /> JS
          Developer
        </h1>
        <h2 className="text-second">
          👇just hit this in your terminal with npm installed👇
        </h2>
      </div>
      <div className="flex justify-center">
        <button className="py-3 px-5 bg-LightNavy  text-highlight group active:bg-LightestNavy rounded text-md duration-200 font-mono active:text-red-500 hover:bg-LightestNavy">
          <span className="text-red-500 group-active:text-highlight">npx</span>{" "}
          najmul
        </button>
      </div>
    </div>
  );
};

export default NpxCard;
// border-[#84bdfa]
