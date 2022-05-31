import { useSelector } from "react-redux";

export default function useGetAuth() {
  const auth = useSelector((state) => state.auth);

  return {
    auth,
  };
}
