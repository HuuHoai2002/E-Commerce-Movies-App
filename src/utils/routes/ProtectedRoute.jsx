import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { routes } from "../../config/routes";

const ProtectedRoute = ({ children }) => {
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.is_login) {
      navigate(`${routes.home}`);
    }
  }, [auth.is_login, navigate]);
  return children;
};

export default ProtectedRoute;
