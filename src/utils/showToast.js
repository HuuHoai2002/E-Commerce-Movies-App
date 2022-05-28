import { toast } from "react-toastify";

const showToast = (content = "", isError = false, isWarning = false) => {
  if (isError) {
    toast.error(content, { pauseOnHover: false });
  } else if (isWarning) {
    toast.warning(content, { pauseOnHover: false });
  } else {
    toast.success(content, { pauseOnHover: false });
  }
};

export default showToast;
