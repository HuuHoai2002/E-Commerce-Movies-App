import { Fragment, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "../../components/button";
import { Image } from "../../components/image";
import { QuantityInput } from "../../components/quantityInput";
import { image_url_with_size } from "../../config/api/apiProducts";
import { useFetchingProductDetails } from "../../hooks";
import { Container } from "../../layouts/components/container";
import { Flex } from "../../layouts/components/flex";
import { View } from "../../layouts/components/view";
import { ProductInfo } from "../../layouts/products";
import { Review } from "../../layouts/reviews";
import { SimilarProduct } from "../../layouts/similar";

const ProductDetails = () => {
  //get url params: id and type
  const [params] = useSearchParams();
  const id = params.get("id");
  // const type = params.get("type");

  const { data } = useFetchingProductDetails(id);
  console.log(data);
  // select values
  const [values, setValues] = useState(1);

  return (
    <Container>
      {data && (
        <Fragment>
          <Flex radius="4px">
            <div className="max-w-[460px] py-4 pl-4">
              <View>
                <div className="">
                  <Image
                    src={`${image_url_with_size}${data.poster_path}`}
                    className="rounded-none"
                  />
                </div>
              </View>
            </div>
            <div className="min-h-full w-[1px] bg-cbg shrink-0 mx-8"></div>
            <div className="flex-1 flex flex-col pr-4 pb-4">
              <ProductInfo data={data} />
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
          <div className="bg-white mt-4 rounded">
            <SimilarProduct id={id} />
          </div>
          <div className="bg-white mt-4 rounded">
            <Review id={id} />
          </div>
        </Fragment>
      )}
    </Container>
  );
};

export default ProductDetails;
