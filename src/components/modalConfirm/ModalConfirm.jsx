import { createPortal } from "react-dom";
import { useModal } from "../../contexts/ModalContext";
import { ModalWraps } from "../../layouts/components/modalWraps";
import { Button } from "../button";
import ModalPopup from "../modal/ModalPopup";

const ModalConfirm = ({ title, open, handleClose }) => {
  const { setSelect } = useModal();
  return createPortal(
    <ModalPopup
      open={open}
      handleClose={() => {
        handleClose(setSelect(false));
      }}>
      <ModalWraps>
        <div className="bg-white w-full flex flex-col max-w-[800px] min-w-[350px] border-none p-4 rounded-md">
          <span className="font-medium">{title}</span>
          <div className="flex items-center gap-x-5 pt-10 ml-auto">
            <Button
              title="Xác nhận"
              className="!h-8 !min-h-0 !min-w-[80px] !bg-transparent !text-sm"
              activeBorder={true}
              onClick={() => {
                setSelect(true);
                handleClose();
              }}
            />
            <Button
              title="Hủy"
              className="!h-8 !min-h-0 !min-w-[80px] !text-sm"
              onClick={() => {
                setSelect(false);
                handleClose();
              }}
            />
          </div>
        </div>
      </ModalWraps>
    </ModalPopup>,
    document.querySelector("body")
  );
};

export default ModalConfirm;
