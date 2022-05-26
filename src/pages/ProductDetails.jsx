import { useSearchParams } from "react-router-dom";

const ProductDetails = () => {
  const [params, setParams] = useSearchParams();
  const id = params.get("id");

  console.log("id: ", id);

  return <div>ProductDetails: {id}</div>;
};

export default ProductDetails;
