import { AiOutlineClose, AiOutlineAppstore } from "react-icons/ai";
import { menus } from "./Header.constants";
import { Link } from "react-router-dom";
import { useState } from "react";
import { BiHomeSmile } from "react-icons/bi";

const ResponsiveHeader = ({ journal }: { journal: boolean }) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <div className="relative lg:hidden z-[1000] bg-red-500">
      <div className="flex justify-between items-center p-4 lg:hidden fixed bottom-0 w-full bg-white border-t  ">
        <div>
          {!showMenu ? <h1 className="text-xl font-semi">Najmul</h1> : " "}
        </div>
        {journal ? (
          <Link to={"/"} className="text-2xl ">
            <BiHomeSmile />
          </Link>
        ) : (
          <div className="text-2xl " onClick={() => setShowMenu(!showMenu)}>
            {!showMenu && <AiOutlineAppstore />}
            {showMenu && <AiOutlineClose />}
          </div>
        )}
      </div>
      {showMenu && (
        <div className="fixed bottom-[57px] w-full z-[150]">
          <ul className="grid grid-cols-3 justify-items-center gap-y-10 px-4 py-8  font-semi text-sm bg-opacity rounded-t-3xl ">
            {menus.map((menu, index) => {
              const { title, icon, id } = menu;
              return (
                <li key={index}>
                  {title === "Journal" ? (
                    <Link to={id} className="flex flex-col items-center">
                      {icon} {title}
                    </Link>
                  ) : (
                    <a href={`#${id}`} className="flex flex-col items-center">
                      {icon}
                      {title}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ResponsiveHeader;
