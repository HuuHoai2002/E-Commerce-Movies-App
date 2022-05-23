import { defaultPrice, priceFlashSale } from "../config/products";

const useGetInfoProducts = () => {
  const handleGetPrice = (data, isFlashSale = false) => {
    return (
      data * (isFlashSale ? priceFlashSale : defaultPrice)
    ).toLocaleString("vi", {
      style: "currency",
      currency: "VND",
    });
  };

  const handleGetDiscount = (data) => {
    return (data * 4).toFixed();
  };

  const handleGetSold = (data) => {
    return (data * 8).toFixed();
  };

  return { handleGetPrice, handleGetDiscount, handleGetSold };
};

export default useGetInfoProducts;
