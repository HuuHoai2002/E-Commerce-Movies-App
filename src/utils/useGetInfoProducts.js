const useGetInfoProducts = () => {
  const handleGetPrice = (e) => {
    return (e * 23000).toLocaleString("vi", {
      style: "currency",
      currency: "VND",
    });
  };

  const handleGetDiscount = (e) => {
    return (e * 5).toFixed();
  };

  const handleGetSold = (e) => {
    return (e * 8).toFixed();
  };

  return { handleGetPrice, handleGetDiscount, handleGetSold };
};

export default useGetInfoProducts;
