import Modal from "@mui/material/Modal";

const ModalPopup = ({ children, open, handleClose }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        {children}
      </Modal>
    </div>
  );
};

export default ModalPopup;
