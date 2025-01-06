import CONFIG from "@config/config";

const getFunctions = async (locale, url) => {
  const CMSConfigAPI = CONFIG.api.cms || "http://localhost:1337";

  const res = await fetch(`${CMSConfigAPI}/api/functions/?locale=${locale}&filters[url][$eq]=${url}&fields=title,content&populate[tags][fields]=title`);
  const data = await res.json();
  return data;
};

export default getFunctions;