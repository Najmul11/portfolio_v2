/* eslint-disable @typescript-eslint/no-explicit-any */
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useAppSelector } from "../../redux/hooks";
import { PropagateLoader } from "react-spinners";
import {
  useDeletePostMutation,
  useGetAllPostsQuery,
  useStarPostMutation,
} from "../../redux/api/apiSlice";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";
import LightBox from "./lightbox/Lightbox";
import Actions from "./actions/Actions";
import PostInfo from "./post/PostInfo";
import PostImage from "./post/PostImage";

type IPost = {
  _id: string;
  title: string;
  image: {
    publicId: string;
    photoUrl: string;
  };
  star: boolean;
  details: string;
  createdAt: Date;
};

type QueryState = {
  searchTerm?: string;
  star?: boolean;
};

const Journal = () => {
  useTitle("Journal");
  const [lightboxSrc, setlightboxSrc] = useState("");
  const [toggleLightbox, settoggleLightbox] = useState(false);

  const { accessToken } = useAppSelector((state) => state.accessToken);
  const { searchTerm } = useAppSelector((state) => state.searchTearm);

  const [star, setStar] = useState<boolean>();
  const [query, setQuery] = useState<QueryState | undefined>({
    searchTerm: "",
  });

  useEffect(() => {
    if (star) {
      setQuery({ star: star });
    }
    if (!star) {
      setQuery(undefined);
    }
  }, [star, setQuery]);

  useEffect(() => {
    if (searchTerm) {
      setQuery({ searchTerm: searchTerm });
    }
  }, [searchTerm]);

  const { data, isLoading: postLoading } = useGetAllPostsQuery(query);

  const [deletePost, { isLoading }] = useDeletePostMutation();
  const [startPost, { isLoading: starLoad }] = useStarPostMutation();

  const handleDelete = async (postId: string) => {
    toast("Deleting...", {
      duration: 1000,
    });
    const response = (await deletePost({ accessToken, postId })) as any;

    if (response.data) toast.success("post Deleted");
    if (response.error) toast.error("Something wrong");
  };

  const handleStar = async (postId: string) => {
    const response = (await startPost({ accessToken, postId })) as any;

    if (response.error) toast.error("Something wrong");
  };

  const handleLightbox = (src: string) => {
    setlightboxSrc(src);
    settoggleLightbox(true);
  };
  console.log(data?.data);

  return (
    <>
      {postLoading ? (
        <div className=" h-screen flex items-center justify-center w-full">
          <PropagateLoader color="#000000" loading className="my-5" />
        </div>
      ) : (
        <div className="pb-10">
          <div className="flex justify-center gap-20 my-10">
            <LightBox
              toggler={toggleLightbox}
              src={lightboxSrc}
              onClose={() => settoggleLightbox(false)}
            />
            <button
              onClick={() => setStar(!star)}
              className={`${
                star ? "text-ts" : ""
              } font-semo flex items-center gap-2`}
            >
              {star ? <AiFillStar /> : <AiOutlineStar />}
              Favourites
            </button>
          </div>
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-5 space-y-5 px-4 my-10">
            {data?.data?.map((post: IPost, index: number) => (
              <div key={index} className=" w-full  break-inside-avoid-column">
                <div className="flex flex-col  gap-5 mx-auto  rounded-lg shadow-md bg-opacity w-full ">
                  <PostImage
                    handleLightbox={handleLightbox}
                    src={post?.image?.photoUrl}
                  />
                  <div className="p-2 flex flex-col  gap-5 ">
                    <PostInfo
                      details={post.details}
                      title={post.title}
                      date={post?.createdAt}
                    />
                    <Actions
                      handleDelete={handleDelete}
                      handleStar={handleStar}
                      isLoading={isLoading}
                      post={post}
                      starLoad={starLoad}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Journal;
