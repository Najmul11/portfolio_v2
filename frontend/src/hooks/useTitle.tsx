import { useEffect } from "react";

const useTitle = (title: string, subTitle: string = "") => {
  useEffect(() => {
    document.title = `${title}  ${subTitle}`;
  }, [title, subTitle]);
};
export default useTitle;
