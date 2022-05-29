import { useSearchParams } from "react-router-dom";
// import { useSearchKeyword } from "../../hooks";
import { Container } from "../../layouts/components/container";

const Search = () => {
  const [params] = useSearchParams();
  const keyword = params.get("keyword");

  console.log(keyword);
  // const { data, loading } = useSearchKeyword(keyword);

  // console.log(data);
  return <Container></Container>;
};

export default Search;
