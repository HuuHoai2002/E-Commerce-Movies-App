import { useSearchParams } from "react-router-dom";
// import { useSearchKeyword } from "../../hooks";
import { useSearchProducts } from "../../hooks";
import { Container } from "../../layouts/components/container";

const Search = () => {
  const [params] = useSearchParams();
  const keyword = params.get("keyword");

  console.log(keyword);

  const { data, handleNextPage } = useSearchProducts(keyword);
  // const { data, loading } = useSearchKeyword(keyword);

  console.log(data);
  return (
    <Container>
      <button onClick={handleNextPage}>Next Page</button>
    </Container>
  );
};

export default Search;
