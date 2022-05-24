import { useEffect } from "react";

const Scroll = ({ deps }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [deps]);
  return <div></div>;
};

export default Scroll;
