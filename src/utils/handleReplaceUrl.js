const handleReplaceUrl = (url) => {
  return decodeURIComponent(url).replace(
    `${"http://" || "https://"}` + window.location.host,
    ""
  );
};

export default handleReplaceUrl;
