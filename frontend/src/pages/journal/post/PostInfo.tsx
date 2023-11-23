import { format } from "date-fns";

type Props = {
  title: string;
  details: string;
  date: Date;
};

const PostInfo = ({ title, details, date }: Props) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <h2 className="font-semi text-lg capitalize ">{title}</h2>
        <h2 className="font-semi text-sm italic  opacity-80">
          {date ? format(new Date(date), "dd MMM yyyy") : null}
        </h2>
      </div>
      <p className="text-left">{details}</p>
    </div>
  );
};

export default PostInfo;
