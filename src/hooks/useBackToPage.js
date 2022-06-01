import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "../config/routes";
import useGetAuth from "./useGetAuth";

export default function useBackToPage(from) {
  const { auth } = useGetAuth();
  const navigate = useNavigate();

  const handleBackToPage = useCallback(() => {
    if (!auth?.is_login) {
      navigate(`/${routes.signin}?from=${from}`);
    }
  }, [auth?.is_login, from, navigate]);

  return {
    isLogin: auth?.is_login,
    handleBackToPage,
  };
}
