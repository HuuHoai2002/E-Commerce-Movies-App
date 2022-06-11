import { createPortal } from "react-dom";
import { ModalWraps } from "../../layouts/components/modalWraps";
import { Button } from "../button";
import ModalPopup from "../modal/ModalPopup";

const ModalConfirm = ({ title, content, open, handleClose, handler }) => {
  return createPortal(
    <ModalPopup open={open} handleClose={handleClose}>
      <ModalWraps>
        <div className="bg-white w-full flex flex-col max-w-[800px] min-w-[350px] border-none p-4 rounded-md">
          <span className="font-medium">{title}</span>
          <p className="text-sm text-ctext">{content}</p>
          <div className="flex items-center gap-x-5 pt-12 ml-auto">
            <Button
              title="Xác nhận"
              className="!h-8 !min-h-0 !min-w-[80px] !bg-transparent !text-sm"
              activeBorder={true}
              onClick={() => {
                handler && handler();
                handleClose();
              }}
            />
            <Button
              title="Hủy"
              className="!h-8 !min-h-0 !min-w-[80px] !text-sm"
              onClick={handleClose}
            />
          </div>
        </div>
      </ModalWraps>
    </ModalPopup>,
    document.querySelector("body")
  );
};

export default ModalConfirm;
