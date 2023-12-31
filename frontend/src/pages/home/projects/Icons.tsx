import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { LuVideo } from "react-icons/lu";
import { PiArrowSquareOut } from "react-icons/pi";

type IProps = {
  live: string;
  code: string;
  video?: string;
  index: number;
};

const Icons = ({ live, code, video, index }: IProps) => {
  return (
    <div
      className={`${
        (index + 1) % 2 === 0 ? "lg:pl-5 lg:justify-start" : "lg:justify-end"
      } flex justify-center  text-xl font-semi lg:text-right gap-6 items-center`}
    >
      {video && (
        <Link
          to={video}
          target="_blank"
          className="flex items-center gap-1 hover:text-highlight mt-[2px]"
        >
          <LuVideo className="text-[24px]" />
        </Link>
      )}
      <Link
        to={code}
        target="_blank"
        className="flex items-center gap-1 hover:text-highlight"
      >
        <FaGithub />
      </Link>

      <Link
        to={live}
        target="_blank"
        className="flex items-center gap-1 hover:text-highlight"
      >
        <PiArrowSquareOut className="text-[24px]" />
      </Link>
    </div>
  );
};

export default Icons;
