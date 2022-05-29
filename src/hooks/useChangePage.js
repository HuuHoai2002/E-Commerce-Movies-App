import { useCallback, useState } from "react";

export default function useChangePage(init) {
  const [page, setPage] = useState(init || 0);

  const handleNextPage = useCallback(() => {
    setPage((page) => page + 1);
  }, []);

  const handlePreviousPage = useCallback(() => {
    setPage((page) => page - 1);
  }, []);

  return {
    page,
    handleNextPage,
    handlePreviousPage,
  };
}
