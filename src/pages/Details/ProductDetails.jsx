import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "../../components/button";
import { Image } from "../../components/image";
import { QuantityInput } from "../../components/quantityInput";
import { image_url_with_size } from "../../config/api/apiProducts";
import { useGetInfoProducts } from "../../hooks";
import { Container } from "../../layouts/components/container";
import { Flex } from "../../layouts/components/flex";
import { View } from "../../layouts/components/view";
import { ProductInfo } from "../../layouts/products";
import { useServiceProducts } from "../../services";

const ProductDetails = () => {
  //get url params: id and type
  const [params] = useSearchParams();
  const id = params.get("id");
  const type = params.get("type");

  const { getDiscount, getPrice, getRootPrice } = useGetInfoProducts();
  const { getMovieDetails } = useServiceProducts();
  const [movieInfo, setMovieInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMovieDetails(id);
        const newResponse = {
          ...response,
          price: getPrice(response.vote_average, false),
          rootPrice: getRootPrice(response.vote_average, false),
          discount: getDiscount(response.vote_average),
        };
        newResponse && setMovieInfo(newResponse);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { poster_path } = movieInfo;

  // select values
  const [values, setValues] = useState(1);

  return (
    <Container minHeight="100%">
      {movieInfo && (
        <Flex radius="4px">
          <div className="max-w-[460px] py-4 pl-4">
            <View>
              <div className="">
                <Image
                  src={`${image_url_with_size}${poster_path}`}
                  className="rounded-none"
                />
              </div>
            </View>
          </div>
          <div className="min-h-full w-[1px] bg-cbg shrink-0 mx-8"></div>
          <div className="flex-1 flex flex-col pr-4 pb-4">
            <ProductInfo data={movieInfo} />
            <div className="action mt-auto">
              <div className="w-full flex flex-col gap-y-5">
                <QuantityInput
                  values={values}
                  setValues={setValues}
                  disabledSelect={true}
                />
                <div className="flex items-center gap-x-3">
                  <Button
                    className="!min-w-[300px] !min-h-[48px] !rounded hover:!opacity-80"
                    title="Mua hàng"
                    activeHover={true}
                  />
                  <Button
                    className="!min-w-[200px] !min-h-[48px] !bg-transparent !rounded"
                    title="Thêm vào giỏ hàng"
                    activeHover={false}
                    activeBorder={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </Flex>
      )}
    </Container>
  );
};

export default ProductDetails;
