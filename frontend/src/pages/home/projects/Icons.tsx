import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { LuVideo } from "react-icons/lu";
import { PiArrowSquareOut } from "react-icons/pi";

type IProps = {
  live: string;
  code: string;
  video?: string;
};

const Icons = ({ live, code, video }: IProps) => {
  return (
    <div className="flex justify-center lg:justify-end  text-xl font-semi lg:text-right gap-6 items-center">
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
