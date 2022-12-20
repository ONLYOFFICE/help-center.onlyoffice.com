import CONFIG from "@config/config";

const getArticles = async (locale) => {
  const CMSConfigAPI = "http://localhost:1337";
  const res = await fetch(
    `${CMSConfigAPI}/api/articles/?locale=${locale}`
  );
  const data = await res.json();
  return data;
};

export default getArticles;