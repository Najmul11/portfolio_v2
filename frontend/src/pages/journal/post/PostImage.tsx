const PostImage = ({
  handleLightbox,
  src,
}: {
  handleLightbox: (src: string) => void;
  src: string;
}) => {
  return (
    <div className=" w-full" onClick={() => handleLightbox(src)}>
      <img
        src={src}
        alt=""
        className=" w-full h-64 rounded-lg cursor-pointer"
      />
    </div>
  );
};

export default PostImage;
