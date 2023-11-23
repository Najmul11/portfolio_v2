import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import { MdOutlineCode } from "react-icons/md";

type IProps = {
  live: string;
  frontend: string;
  backend: string;
};

const Icons = ({ live, frontend, backend }: IProps) => {
  return (
    <div className="flex justify-center gap-10 text-xl font-semi">
      <Link
        to={live}
        target="_blank"
        className="flex items-center gap-1 hover:text-ts"
      >
        <FiArrowUpRight /> <span className="text-sm">Live</span>
      </Link>
      <Link
        to={frontend}
        target="_blank"
        className="flex items-center gap-1 hover:text-ts"
      >
        <MdOutlineCode /> <span className="text-sm">Frontend</span>
      </Link>
      <Link
        to={backend}
        target="_blank"
        className="flex items-center gap-1 hover:text-ts"
      >
        <MdOutlineCode /> <span className="text-sm">Backend</span>
      </Link>
    </div>
  );
};

export default Icons;
