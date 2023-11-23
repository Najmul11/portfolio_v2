/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../redux/hooks";
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { MdDeleteSweep } from "react-icons/md";

type IProps = {
  post: {
    _id: string;
    title: string;
    image: {
      publicId: string;
      photoUrl: string;
    };
    star: boolean;
    details: string;
  };
  handleStar: (id: string) => void;
  handleDelete: (id: string) => void;
  starLoad: boolean;
  isLoading: boolean;
};

const Actions = ({
  post,
  handleStar,
  starLoad,
  handleDelete,
  isLoading,
}: IProps) => {
  const { user } = useAppSelector((state) => state.user);

  return (
    <div>
      {user && user.role === "super admin" && (
        <div className="flex gap-10 justify-center text-xl w-full ">
          {post.star ? (
            <button disabled={starLoad} onClick={() => handleStar(post._id)}>
              <AiTwotoneStar className="text-ts" />
            </button>
          ) : (
            <button disabled={starLoad} onClick={() => handleStar(post._id)}>
              <AiOutlineStar />
            </button>
          )}
          <Link to={`/edit-post/${post._id}`}>
            <BiEdit className="cursor-pointer" />
          </Link>
          <button disabled={isLoading} onClick={() => handleDelete(post._id)}>
            <MdDeleteSweep className="cursor-pointer" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Actions;
