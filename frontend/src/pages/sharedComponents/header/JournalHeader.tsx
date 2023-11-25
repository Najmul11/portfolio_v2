import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../redux/hooks";
import { setSearch } from "../../../redux/slices/searchTermSlice";
import { menus } from "./Header.constants";
import ResponsiveHeader from "./ResponsiveHeader";

const JournalHeader = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="lg:mx-[3%] pt-1 lg:pt-3 pb-3">
      <div className="flex justify-between items-center h-14 px-4 lg:px-0">
        <Link to={"/dashboard"} className=" hidden lg:block">
          {" "}
          <h1 className="text-lg font-semi">Najmul</h1>
        </Link>
        <div className="w-full lg:w-80 ">
          <input
            onChange={(e) => dispatch(setSearch(e.target.value))}
            type="text"
            placeholder="Can't remember? Recall..."
            className=" py-2 px-4 w-full lg:w-80 text-sm placeholder:text-center focus:outline-none bg-opacity rounded text-bg"
          />
        </div>
        <ul className="hidden lg:flex font-semi text-sm  justify-end ">
          {menus.map((menu, index) => {
            const { title, icon } = menu;
            return (
              <li key={index}>
                {title === "Home" && (
                  <Link
                    to={"/"}
                    className="flex items-center gap-1 hover:text-highlight"
                  >
                    {icon} {title}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
      <ResponsiveHeader journal={true} />
    </div>
  );
};

export default JournalHeader;
