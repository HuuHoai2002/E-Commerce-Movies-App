import { contents } from "../../config/api/apiProducts";
import { useFetchingProductsContent } from "../../hooks";
import { ProductListScroll } from "../products";

const SimilarProduct = ({ id, title }) => {
  const { data } = useFetchingProductsContent(id, contents.SIMILAR);
  return (
    <div className="similar-product">
      {data && (
        <div>
          <h1 className="px-4 py-2 text-[rgb(51 51 51)] font-medium text-[20px]">
            Sản Phẩm Tương Tự
          </h1>
          <ProductListScroll isFlashSale={false} movies={data} />
        </div>
      )}
    </div>
  );
};

export default SimilarProduct;
