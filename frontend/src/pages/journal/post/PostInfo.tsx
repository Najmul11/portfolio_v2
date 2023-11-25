import { format } from "date-fns";

type Props = {
  title: string;
  details: string;
  date: Date;
};

const PostInfo = ({ title, details, date }: Props) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="lg:flex justify-between">
        <h2 className="group-hover:text-highlight">{title}</h2>
        <h2 className="font-semi text-[12px] italic  opacity-80 text-second">
          {date ? format(new Date(date), "dd MMM yyyy") : null}
        </h2>
      </div>
      <p className="text-left text-sm text-second">{details}</p>
    </div>
  );
};

export default PostInfo;
