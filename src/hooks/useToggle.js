import { useCallback, useState } from "react";

export default function useToggle(init) {
  const [open, setState] = useState(init);

  const handleOpen = useCallback(() => {
    setState(true);
  }, []);

  const handleClose = useCallback(() => {
    setState(false);
  }, []);

  const handleToggle = useCallback(() => {
    setState(!open);
  }, [open]);
  return {
    open,
    handleOpen,
    handleClose,
    handleToggle,
  };
}
