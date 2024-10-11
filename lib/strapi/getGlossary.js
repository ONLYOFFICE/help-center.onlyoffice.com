import CONFIG from "@config/config";

const getGlossary = async (locale) => {
  const CMSConfigAPI = CONFIG.api.cms || "http://localhost:1337";
  const res = await fetch(
    `${CMSConfigAPI}/api/glossaries/?locale=${locale}&sort=title:asc&pagination[limit]=-1&fields=title,subtitle,definition`
  );
  const data = await res.json();
  return data;
};

export default getGlossary;