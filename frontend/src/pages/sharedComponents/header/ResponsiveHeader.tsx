import { menus } from "./Header.constants";
import { Link } from "react-router-dom";
import { BiHomeSmile } from "react-icons/bi";
import { useState } from "react";
import { AiOutlineClose, AiOutlineAppstore } from "react-icons/ai";

const ResponsiveHeader = ({ journal }: { journal: boolean }) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <div className="relative lg:hidden  z-[1000] ">
      <div className="flex justify-between items-center h-[60px] px-4 lg:hidden fixed bottom-0 w-full bg-bg   ">
        <div>
          <h1 className="text-xl font-semi">Najmul</h1>
        </div>
        {journal ? (
          <Link to={"/"} className="text-2xl ">
            <BiHomeSmile />
          </Link>
        ) : (
          <div
            className="text-2xl "
            onClick={() => setShowMenu(!showMenu)}
            style={{
              transition: " transform 0.6s ease",
              transform: showMenu ? "rotate(90deg)" : "rotate(0deg)",
            }}
          >
            {!showMenu && <AiOutlineAppstore />}
            {showMenu && <AiOutlineClose />}
          </div>
        )}
      </div>
      {showMenu && (
        <div className="fixed bottom-[60px] w-full z-[150] ">
          <ul className="grid grid-cols-3 justify-items-center gap-y-10 px-4 py-12  font-semi text-sm bg-LightestNavy rounded-t ">
            {menus.map((menu, index) => {
              const { title, icon, id } = menu;
              return (
                <li key={index}>
                  {title === "Journal" ? (
                    <Link to={id} className="flex flex-col items-center">
                      {icon} {title}
                    </Link>
                  ) : (
                    <a
                      href={`#${id}`}
                      className="flex flex-col items-center"
                      onClick={() => setShowMenu(false)}
                    >
                      {icon}
                      {title}
                    </a>
                  )}
                </li>
              );
            })}
            <Link
              to={"/"}
              className="flex items-center justify-center hover:text-highlight font-mono border border-highlight hover:bg-LightNavy active:bg-LightestNavy h-10 w-24 rounded duration-200 col-span-3"
            >
              Resume
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ResponsiveHeader;
