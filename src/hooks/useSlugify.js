import slugify from "slugify";

const useSlugify = () => {
  const handleSlug = (slug = "") => {
    return slugify(slug, {
      locale: "vi",
      lower: true,
    remove: /[@&'()|<>#:_,.?$+!*]/,
    });
  };

  return {
    handleSlug,
  };
};

export default useSlugify;
