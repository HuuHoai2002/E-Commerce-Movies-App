import { Fragment, useState } from "react";
// import { Button } from "../../components/button";
import { Button } from "../../components/form/button";
import { IPlay } from "../../components/icons";
import { Image } from "../../components/image";
import { QuantityInput } from "../../components/quantityInput";
import { image_url_with_size } from "../../config/api/apiProducts";
import {
  useBackToPage,
  useFetchingProductDetails,
  useGetParamsUrl,
} from "../../hooks";
import { Container } from "../../layouts/components/container";
import { Flex } from "../../layouts/components/flex";
import { View } from "../../layouts/components/view";
import { ProductInfo } from "../../layouts/products";
import { Review } from "../../layouts/reviews";
import { SimilarProduct } from "../../layouts/similar";
import { firebaseServices } from "../../services";

const ProductDetails = () => {
  const { updateDataToFirestore } = firebaseServices();
  const { url: id } = useGetParamsUrl("id");
  const { data } = useFetchingProductDetails(id);
  const { handleBackToPage, isLogin } = useBackToPage(window.location.href);
  const [loading, setLoading] = useState(false);

  const handleAddToCart = async (data) => {
    handleBackToPage();
    if (isLogin) {
      setLoading(true);
      await updateDataToFirestore(data);
      setLoading(false);
    }
  };

  return (
    <Container>
      {data && (
        <Fragment>
          <Flex radius="4px">
            <div className="max-w-[460px] py-4 pl-4">
              <View>
                <div className="relative group cursor-pointer">
                  <Image
                    src={`${image_url_with_size}${data.poster_path}`}
                    className="rounded-none"
                  />
                  <div className="opacity-0 absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 group-hover:opacity-100 transition-all">
                    <IPlay fill="white" />
                  </div>
                </div>
              </View>
            </div>
            <div className="min-h-full w-[1px] bg-cbg shrink-0 mx-8"></div>
            <div className="flex-1 flex flex-col pr-4 pb-4">
              <ProductInfo data={data} />
              <div className="action mt-auto">
                <div className="w-full flex flex-col gap-y-5">
                  <QuantityInput disabledSelect={true} />
                  <div className="flex items-center gap-x-3">
                    <div className="min-w-[300px]">
                      <Button
                        height="48px"
                        onClick={() => handleAddToCart(data)}
                        isLoading={loading}>
                        Mua Hàng
                      </Button>
                    </div>
                    {/* <Button
                      className="!min-w-[300px] !min-h-[48px] !rounded hover:!opacity-80"
                      title="Mua hàng"
                      activeHover={true}
                      onClick={() => handleClick(data)}
                    /> */}
                    {/* <Button
                      className="!min-w-[200px] !min-h-[48px] !bg-transparent !rounded"
                      title="Thêm vào giỏ hàng"
                      activeHover={false}
                      activeBorder={true}
                      onClick={handleClick}
                    /> */}
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
