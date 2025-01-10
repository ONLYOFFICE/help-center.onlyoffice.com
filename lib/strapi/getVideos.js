import CONFIG from "@config/config";

const getVideos = async (locale) => {
  const CMSConfigAPI = CONFIG.api.cms || "http://localhost:1337";

  const params = `
    &sort=title:asc&pagination[limit]=-1
    &fields=title,url
    &populate[article][fields]=title
    &populate[article_docs][fields]=title
    &populate[article_desktop][fields]=title
    &populate[article_workspace][fields]=title
    &populate[article_mobile][fields]=title
    &populate[article_docspace][fields]=title
  `.replace(/\s+/g, "");

  const res = await fetch(`${CMSConfigAPI}/api/videos/?locale=${locale}${params}`);
  const data = await res.json();
  return data;
};

export default getVideos;