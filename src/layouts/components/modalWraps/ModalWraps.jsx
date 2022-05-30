import { forwardRef } from "react";

const ModalWraps = forwardRef(({ children }, ref) => {
  return (
    <div
      className="modal-wrap absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 outline-none"
      ref={ref}
      tabIndex="-1">
      {children}
    </div>
  );
});

export default ModalWraps;
