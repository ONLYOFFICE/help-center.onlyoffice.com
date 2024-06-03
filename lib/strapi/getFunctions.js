import CONFIG from "@config/config";

const getFunctions = async (locale, pageUrl) => {
  const CMSConfigAPI = CONFIG.api.cms || "http://localhost:1337";
  let url = `${CMSConfigAPI}/api/functions/?locale=${locale}&sort=title:asc&populate=*`;

  if (pageUrl) {
    url += `&filters[url][$contains]=${pageUrl}`;
  }

  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export default getFunctions;