import { createPortal } from "react-dom";

const Overlay = ({ show }) => {
  return createPortal(
    <div className={`${show ? "modal fixed inset-0 z-50" : "hidden"}`}>
      <div className="overlay absolute inset-0 bg-black opacity-25"></div>
    </div>,
    document.querySelector("body")
  );
};

export default Overlay;
