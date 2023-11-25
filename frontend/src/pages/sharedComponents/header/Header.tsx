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
    <>
      <div
        className={`${bg} z-20 fixed w-full duration-100`}
        style={headerStyle}
      >
        <div className="hidden lg:block lg:mx-[3%]">
          <div className="flex justify-between items-center pt-5 pb-3">
            <Link to={"/"}>
              <h1 className="text-lg font-semi">Najmul</h1>
            </Link>
            <ul className="flex gap-8 font-semi text-sm items-center">
              {menus.map((menu, index) => {
                const { title, icon, id } = menu;
                return (
                  <li key={index}>
                    {title === "Journal" ? (
                      <Link
                        to={id}
                        className="flex items-center gap-1  hover:text-highlight "
                      >
                        {icon} {title}
                      </Link>
                    ) : (
                      <a
                        href={`#${id}`}
                        className="flex items-center gap-1 hover:text-highlight "
                      >
                        {title}
                      </a>
                    )}
                  </li>
                );
              })}
              <Link
                to={"/"}
                className="flex items-center justify-center hover:text-highlight font-mono border border-highlight hover:bg-LightNavy active:bg-LightestNavy h-10 w-24 rounded duration-200"
              >
                Resume
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <ResponsiveHeader journal={false} />
    </>
  );
};

export default Header;
