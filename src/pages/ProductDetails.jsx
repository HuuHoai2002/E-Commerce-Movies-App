import { useParams, useSearchParams } from "react-router-dom";

const ProductDetails = () => {
  const [params, setParams] = useSearchParams();
  const { slug } = useParams();
  const id = params.get("id");

  console.log("id: ", id);

  return (
    <div className="details">
      ProductDetails:{slug} : {id}
    </div>
  );
};

export default ProductDetails;
