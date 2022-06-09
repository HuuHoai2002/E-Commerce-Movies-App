import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

const useModal = () => {
  const context = useContext(ModalContext);
  if (typeof context === "undefined") {
    throw new Error("You count must be used with a Count Provider");
  }

  return context;
};

// Tạo ra 1 conponents provider , dùng để ôm lại các children => children có thể lấy dữ liệu
const ModalProvider = ({ children }) => {
  const [select, setSelect] = useState(false);

  const value = { select, setSelect };
  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

export { useModal, ModalProvider };
