import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { slug } = useParams();
  console.log(slug);
  return <div>ProductDetails</div>;
};

export default ProductDetails;
