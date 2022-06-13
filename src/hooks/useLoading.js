import { useState } from "react";

export default function useLoading(init) {
  const [loading, setLoading] = useState(init);

  return {
    loading,
    setLoading,
  };
}
