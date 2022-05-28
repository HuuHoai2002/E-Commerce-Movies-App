import { routes } from "../config/routes";
import { useSlugify } from "../hooks";

const useNavigation = () => {
  const { handleSlug } = useSlugify();

  const detailsPage = (slug, id = "") => {
    return `/${routes.details}/${handleSlug(slug)}?id=${id}`;
  };

  const userPage = () => {};
  const loginPage = () => {};
  const cartPage = () => {};
  return { detailsPage };
};

export default useNavigation;
