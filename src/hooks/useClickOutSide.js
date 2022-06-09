import { useEffect, useRef, useState } from "react";

export default function useClickOutSide() {
  const [show, setShow] = useState(false);

  // console.log(show);
  const nodeRef = useRef(null);

  useEffect(() => {
    if (show) {
      setShow(false);
    }
    const handleClickOutSide = (event) => {
      // Kiểm tra xem vừa ấn nó có thuộc về cái nodeRef hay không và nodeRef không phải là cái dom
      if (nodeRef.current && !nodeRef.current.contains(event.target)) {
        setShow(false);
      } else {
        if (nodeRef.current) {
          setShow(true);
        }
      }
    };
    document.addEventListener("click", handleClickOutSide);
    return () => {
      document.removeEventListener("click", handleClickOutSide);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.location.pathname]);

  return {
    show,
    setShow,
    nodeRef,
  };
}
