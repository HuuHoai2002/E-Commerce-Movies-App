import PropTypes from "prop-types";
import { createPortal } from "react-dom";
// createPortal
const Modal = ({ open = false, handleClose = () => {} }) => {
  if (typeof document === "undefined") {
    return <div className="modal"></div>;
  }
  return createPortal(
    <div
      className={`modal fixed inset-0 z-50 flex items-center justify-center p-5 ${
        open ? "" : "opacity-0 invisible"
      }`}>
      <div
        className="overlay absolute inset-0 bg-black opacity-25"
        onClick={handleClose}></div>
    </div>,
    document.querySelector("body")
  );
};
// Props types để kiểm tra props truyền vào có hợp lệ không
Modal.prototype = {
  open: PropTypes.bool,
  handleClose: PropTypes.func.isRequired,
};
export default Modal;
