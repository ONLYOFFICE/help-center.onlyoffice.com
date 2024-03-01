import CONFIG from "@config/config";

const getGlossary = async (locale) => {
  const CMSConfigAPI = "https://cmshelpcenter.teamlab.info" || "http://localhost:1337";
  const res = await fetch(
    `${CMSConfigAPI}/api/glossaries/?locale=${locale}&sort=name:asc&pagination[pageSize]=100&populate=*`
  );
  const data = await res.json();
  return data;
};

export default getGlossary;