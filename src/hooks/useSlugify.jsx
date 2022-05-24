import slugify from "slugify";

const useSlugify = () => {
  const handleSlug = (slug = "") => {
    return slugify(slug, { locale: "vi" });
  };

  return {
    handleSlug,
  };
};

export default useSlugify;
