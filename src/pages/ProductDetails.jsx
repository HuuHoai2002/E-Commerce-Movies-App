import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Image } from "../components/image";
import QuantityInput from "../components/quantityInput/QuantityInput";
import { image_url_with_size } from "../config/api/apiProducts";
import { useGetInfoProducts } from "../hooks";
import { Container } from "../layouts/components/container";
import { Flex } from "../layouts/components/flex";
import { ProductInfo } from "../layouts/products";
import { useServiceProducts } from "../services";

const ProductDetails = () => {
  const [params, setParams] = useSearchParams();
  // const { slug } = useParams();
  const id = params.get("id");
  const { handleGetDiscount, handleGetPrice, handleGetRootPrice } =
    useGetInfoProducts();

  const { getMovieDetails } = useServiceProducts();
  const [movieInfo, setMovieInfo] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMovieDetails(id);
        const clone = {
          ...response,
          price: handleGetPrice(response.vote_average, false),
          rootPrice: handleGetRootPrice(response.vote_average, false),
          discount: handleGetDiscount(response.vote_average),
        };
        setMovieInfo(clone);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [values, setValues] = useState(1);
  console.log(values);
  return (
    <Container minHeight="100%">
      {movieInfo && (
        <Flex radius="4px">
          <div className="max-w-[460px] py-4 pl-4">
            <div className="w-full h-full">
              <div className="">
                <Image
                  src={`${image_url_with_size}${movieInfo.poster_path}`}
                  className="rounded-none"
                />
              </div>
            </div>
          </div>
          <div className="min-h-full w-[1px] bg-cbg shrink-0 mx-8"></div>
          <div className="flex-1 pr-4">
            <ProductInfo data={movieInfo} />
            <div className="action">
              <QuantityInput
                values={values}
                setValues={setValues}
                disabledSelect={true}
              />
            </div>
          </div>
        </Flex>
      )}
    </Container>
  );
};

export default ProductDetails;
