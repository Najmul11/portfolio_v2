import banner from "../../assets/banner.webp";
const Banner = () => {
  return (
    <div className=" flex items-center justify-center text-white ">
      <img
        src={banner}
        alt=""
        width={1000}
        height={1000}
        className="w-full h-44 lg:h-64"
      />
    </div>
  );
};

export default Banner;
