import { useSearchParams } from "react-router-dom";

export default function useNavigateFrom(urlName) {
  const [params] = useSearchParams();
  const url = params.get(urlName);

  return {
    url: url || null,
  };
}
