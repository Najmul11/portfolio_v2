import { Link } from "react-router-dom";
import { menus } from "./Header.constants";
import { useEffect, useState } from "react";
import ResponsiveHeader from "./ResponsiveHeader";

const Header = () => {
  const [bg, setBg] = useState<string>("transparent");

  const updateBg = () => {
    const scrollY = window.scrollY;
    if (scrollY > 50) {
      setBg("white");
    } else {
      setBg("transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", updateBg);
    return () => {
      window.removeEventListener("scroll", updateBg);
    };
  }, []);

  return (
    <div className={`bg-${bg} z-20 fixed w-full duration-100`}>
      <div className="hidden lg:block lg:mx-[16.67%] lg:w-4/6">
        <div className="flex justify-between items-center h-14">
          <Link to={"/"}>
            <h1 className="text-lg font-semi">Najmul</h1>
          </Link>
          <ul className="flex gap-10 font-semi text-sm">
            {menus.map((menu, index) => {
              const { title, icon, id } = menu;
              return (
                <li key={index}>
                  {title === "Journal" ? (
                    <Link
                      to={id}
                      className="flex items-center gap-1  hover:text-ts"
                    >
                      {icon} {title}
                    </Link>
                  ) : (
                    <a
                      href={`#${id}`}
                      className="flex items-center gap-1 hover:text-ts"
                    >
                      {title}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <ResponsiveHeader journal={false} />
    </div>
  );
};

export default Header;
