import { useEffect, useRef, useState } from "react";

export default function useClickOutSide(dom = "button") {
  const [show, setShow] = useState(false);

  const nodeRef = useRef(null);
  useEffect(() => {
    const handleClickOutSide = (event) => {
      // Kiểm tra xem vừa ấn nó có thuộc về cái nodeRef hay không và nodeRef không phải là cái dom
      if (nodeRef.current && !nodeRef.current.contains(event.target)) {
        setShow(false);
      } else {
        setShow(true);
      }
    };
    document.addEventListener("click", handleClickOutSide);

    return () => {
      document.removeEventListener("click", handleClickOutSide);
    };
  }, []);

  return {
    show,
    setShow,
    nodeRef,
  };
}
