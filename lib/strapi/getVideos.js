import CONFIG from "@config/config";

const getVideos = async (locale) => {
  const CMSConfigAPI = CONFIG.api.cms || "http://localhost:1337";
  let url = `${CMSConfigAPI}/api/videos/?locale=${locale}&sort=title:asc&pagination[pageSize]=200`;

  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export default getVideos;