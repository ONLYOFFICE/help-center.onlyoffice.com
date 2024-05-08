import CONFIG from "@config/config";

const getTags = async (locale, title) => {
  const CMSConfigAPI = CONFIG.api.cms || "http://localhost:1337";
  let url = `${CMSConfigAPI}/api/tags/?locale=${locale}&sort=title:asc&pagination[pageSize]=100&populate[articles][fields][0]=url&populate[articles][fields][1]=title&populate[articles][fields][2]=subtitle&populate[articles][populate][0]=mark`;

  if (title) {
    url += `&filters[title][$eq]=${title}`;
  }

  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export default getTags;