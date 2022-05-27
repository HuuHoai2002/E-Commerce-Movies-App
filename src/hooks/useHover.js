import React from "react";

export default function useHover() {
  // mouseover
  const [hovered, setHovered] = React.useState(false);
  const nodeRef = React.useRef(null);

  React.useEffect(() => {
    const dom = nodeRef.current;
    const handleMouseOver = () => {
      setHovered(true);
    };
    const handleMouseOut = () => {
      setHovered(false);
    };
    if (dom) {
      dom.addEventListener("mouseover", handleMouseOver);
      dom.addEventListener("mouseout", handleMouseOut);
    }

    return () => {
      dom && dom.removeEventListener("mouseover", handleMouseOver);
      dom && dom.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);
  return {
    hovered,
    nodeRef,
  };
}
