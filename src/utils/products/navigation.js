import { routes } from "../../config/routes";
import { useSlugify } from "../../hooks";

const navigation = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { handleSlug } = useSlugify();

  const detailsPage = (slug, id = "") => {
    return `/${routes.details}/${handleSlug(slug)}?id=${id}`;
  };
  const searchKeyword = (keyword) => {
    return `/${routes.search}?keyword=${keyword}`;
  };
  const userPage = () => {};
  const loginPage = () => {};
  const cartPage = () => {};
  const checkOut = (orderId = "", userId = "") => {
    return `/${routes.checkout}?orders_id=${orderId}&user_id=${userId}`;
  };
  return { detailsPage, searchKeyword, checkOut };
};

export default navigation;
