/* eslint-disable @typescript-eslint/ban-ts-comment */
import { AiOutlineClose } from "react-icons/ai";

interface Props {
  toggler: boolean;
  onClose: () => void;
  src: string;
}

const LightBox = ({ toggler, onClose, src }: Props) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <>
      {toggler && (
        <div className="fixed inset-0 w-100 h-screen bg-bg bg-opacity-80 z-50  backdrop-blur-xl">
          <div className="absolute right-2 lg:right-6 top-2 lg:top-6 flex items-center justify-center h-10 w-20">
            <AiOutlineClose
              className="cursor-pointer w-9 h-9"
              strokeWidth={2.5}
              onClick={handleClose}
            />
          </div>
          <div className="flex items-center justify-center w-full h-full">
            <img
              src={src}
              alt={src}
              className="p-2 md:p-5 lg:p-8 xl:p-10 xxl:p-12 max-h-full max-w-full mx-auto object-cover"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default LightBox;
