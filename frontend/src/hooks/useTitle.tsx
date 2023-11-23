import { useEffect } from "react";

const useTitle = (title: string, subTitle: string = "Najmul Hoque") => {
  useEffect(() => {
    document.title = `${title} | ${subTitle}`;
  }, [title, subTitle]);
};
export default useTitle;
