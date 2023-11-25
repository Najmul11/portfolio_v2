const PostImage = ({
  handleLightbox,
  src,
}: {
  handleLightbox: (src: string) => void;
  src: string;
}) => {
  return (
    <img
      src={src}
      alt=""
      onClick={() => handleLightbox(src)}
      className="w-56 h-36 lg:w-28 lg:h-20 rounded cursor-pointer"
    />
  );
};

export default PostImage;
