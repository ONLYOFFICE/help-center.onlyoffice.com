import CONFIG from "@config/config";

const getDocsArticles = async (locale, slug, pageUrl) => {
  const CMSConfigAPI = CONFIG.api.cms || "http://localhost:1337";
  let url = `${CMSConfigAPI}/api/articles-docs/?locale=${locale}&sort=title:asc&pagination[pageSize]=200&populate=*`;

  if (slug) {
    url += `&filters[category_docs][slug_id][$eq]=${slug}`;
  }

  if (pageUrl) {
    url += `&filters[url][$contains]=${pageUrl}`;
  }

  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export default getDocsArticles;