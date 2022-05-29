import { routes } from "../config/routes";
import { useSlugify } from "../hooks";

const useNavigation = () => {
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
  return { detailsPage, searchKeyword };
};

export default useNavigation;
