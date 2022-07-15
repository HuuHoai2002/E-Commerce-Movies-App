const handleReplaceUrl = (url) => {
  return decodeURIComponent(url).replace(
    `https://e-commerce-movies-app.vercel.app`,
    ""
  );
};

export default handleReplaceUrl;
