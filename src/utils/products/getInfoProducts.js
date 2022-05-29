import { defaultPrice, priceFlashSale } from "../../config/products/products";

const getInfoProducts = () => {
  const getDiscount = (data) => {
    return (data * 3).toFixed();
  };
  const getSold = (data) => {
    return (data * 8).toFixed();
  };

  const getRootPrice = (data, isFlashSale = false) => {
    const rate = isFlashSale ? priceFlashSale : defaultPrice;
    const rootPrice = data * rate;
    return rootPrice.toLocaleString("vi", {
      style: "currency",
      currency: "VND",
    });
  };

  const getPrice = (data, isFlashSale = false) => {
    const rate = isFlashSale ? priceFlashSale : defaultPrice;
    return (
      data * rate -
      (data * rate * getDiscount(data)) / 100
    ).toLocaleString("vi", {
      style: "currency",
      currency: "VND",
    });
  };
  return {
    getPrice,
    getDiscount,
    getSold,
    getRootPrice,
  };
};

export default getInfoProducts;
