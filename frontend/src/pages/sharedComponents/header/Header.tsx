import { Link } from "react-router-dom";
import { menus } from "./Header.constants";
import { useEffect, useState } from "react";
import ResponsiveHeader from "./ResponsiveHeader";

const Header = () => {
  const [bg, setBg] = useState<string>("bg-transparent");
  const [isScrolled, setIsScrolled] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const updateBg = () => {
    const scrollY = window.scrollY;
    if (scrollY > 50) {
      setBg("bg-[#0f172a]");
    } else {
      setBg("bg-transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", updateBg);
    return () => {
      window.removeEventListener("scroll", updateBg);
    };
  }, []);

  const headerStyle = {
    transition: "transform 0.3s ease",
    transform: isScrolled ? "translateY(0)" : "translateY(-100%)",
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const shouldShow =
        currentScrollPos < prevScrollPos || currentScrollPos < 100;

      setIsScrolled(shouldShow);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div className={`${bg} z-20 fixed w-full duration-100`} style={headerStyle}>
      <div className="hidden lg:block lg:mx-[3%]">
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
