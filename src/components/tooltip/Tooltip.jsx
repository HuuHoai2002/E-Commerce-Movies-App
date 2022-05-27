import { useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { useHover } from "../../hooks";

const TooltipStyles = styled.div``;

const TooltipContentStyles = styled.p`
  display: inline-block;
  position: absolute;
  padding: 0.75rem;
  background-color: ${(props) => props.theme.background || "white"};
  transform: translate(-50%, -100%);
  color: ${(props) => props.theme.ctext};
  border-radius: 0.75rem;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1);
`;
const Tooltip = ({ children, text }) => {
  const { hovered, nodeRef } = useHover();
  const [coords, setCoords] = useState({});

  const handleHover = (e) => {
    setCoords(e.target.getBoundingClientRect());
  };
  return (
    <TooltipStyles>
      {hovered && (
        <TooltipContent children={children} coords={coords}></TooltipContent>
      )}
      <span
        className="font-semibold hover:opacity-80"
        ref={nodeRef}
        onMouseOver={handleHover}>
        {text}
      </span>
    </TooltipStyles>
  );
};

const TooltipContent = ({ children, coords }) => {
  return createPortal(
    <TooltipContentStyles
      style={{
        top: coords.top - coords.height,
        left: coords.left + coords.width / 2,
      }}>
      {children}
    </TooltipContentStyles>,
    document.querySelector("body")
  );
};
export default Tooltip;
