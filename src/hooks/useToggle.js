import { useCallback, useState } from "react";

export default function useToggle(init) {
  const [state, setState] = useState(init || true);

  const handleToggle = useCallback(() => {
    setState(false);
  }, []);

  return {
    state,
    handleToggle,
  };
}
