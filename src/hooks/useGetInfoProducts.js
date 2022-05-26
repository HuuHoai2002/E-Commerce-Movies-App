import { defaultPrice, priceFlashSale } from "../config/products/products";

const useGetInfoProducts = () => {
  const handleGetDiscount = (data) => {
    return (data * 3).toFixed();
  };
  const handleGetSold = (data) => {
    return (data * 8).toFixed();
  };

  const handleGetRootPrice = (data, isFlashSale = false) => {
    const rate = isFlashSale ? priceFlashSale : defaultPrice;
    const rootPrice = data * rate;
    return rootPrice.toLocaleString("vi", {
      style: "currency",
      currency: "VND",
    });
  };

  const handleGetPrice = (data, isFlashSale = false) => {
    const rate = isFlashSale ? priceFlashSale : defaultPrice;
    return (
      data * rate -
      (data * rate * handleGetDiscount(data)) / 100
    ).toLocaleString("vi", {
      style: "currency",
      currency: "VND",
    });
  };
  return {
    handleGetPrice,
    handleGetDiscount,
    handleGetSold,
    handleGetRootPrice,
  };
};

export default useGetInfoProducts;
