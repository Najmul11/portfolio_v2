import { Link } from "react-router-dom";
import { CiCoffeeCup } from "react-icons/ci";
import { useState } from "react";

const BuyMeCoffeeBtn = () => {
  const [show, setShow] = useState(false);
  return (
    <div
      className="fixed bottom-5 right-5  items-center md:flex hidden"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {show && <h1 className="text-sm">Buy me a coffee☕</h1>}

      <Link
        to={"/buy-me-coffee"}
        className="  text-yellow-500 text-4xl flex justify-center items-center hover:scale-110 duration-300 "
      >
        <CiCoffeeCup />
      </Link>
    </div>
  );
};

export default BuyMeCoffeeBtn;
