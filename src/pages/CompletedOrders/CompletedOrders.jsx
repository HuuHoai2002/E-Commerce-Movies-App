import React, { useEffect } from "react";
import { useBackToPage, useGetDataWithUserId } from "../../hooks";
import { Container } from "../../layouts/components/container";
import { Grid } from "../../layouts/components/grid";
import { ProductItem } from "../../layouts/products";

const CompletedOrders = () => {
  const { data } = useGetDataWithUserId("cart");
  const { handleBackToPage, isLogin } = useBackToPage(window.location.href);

  useEffect(() => {
    handleBackToPage();
  }, [handleBackToPage]);

  return (
    <Container>
      {isLogin && data?.completed_orders ? (
        <Grid col={5}>
          {data?.completed_orders?.map((item) => (
            <ProductItem data={item} key={item.id} />
          ))}
        </Grid>
      ) : (
        <div>Bạn chưa mua sản phẩm nào</div>
      )}
    </Container>
  );
};

export default CompletedOrders;
