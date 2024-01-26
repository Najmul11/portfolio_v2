import Skeleton from "react-loading-skeleton";

const SupportSkeleton = () => {
  return (
    <>
      {[...Array(2)].map((_, index) => (
        <div key={index} className={`flex gap-3 w-full`}>
          <Skeleton circle width={40} height={40} />

          <div className="flex flex-col gap-2">
            <Skeleton width={200} />

            <Skeleton width={400} />
            <Skeleton width={400} />
          </div>
        </div>
      ))}
    </>
  );
};

export default SupportSkeleton;
