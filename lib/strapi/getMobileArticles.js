import CONFIG from "@config/config";

const getMobileArticles = async (locale) => {
  const CMSConfigAPI = "https://cmshelpcenter.teamlab.info" || "http://localhost:1337";
  const res = await fetch(
    `${CMSConfigAPI}/api/articles-mobiles/?locale=${locale}&populate=*`
  );
  const data = await res.json();
  return data;
};

export default getMobileArticles;