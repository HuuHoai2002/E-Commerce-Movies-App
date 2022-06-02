const handleReplaceUrl = (url) => {
  return url.replace(`${"http://" || "https://"}` + window.location.host, "");
};

export default handleReplaceUrl;
