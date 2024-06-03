import CONFIG from "@config/config";

const getDocsArticles = async (locale, slug, pageUrl, isPopulate) => {
  const CMSConfigAPI = CONFIG.api.cms || "http://localhost:1337";
  let url = `${CMSConfigAPI}/api/articles-docs/?locale=${locale}&sort=title:asc&pagination[pageSize]=200`;

  if (slug) {
    url += `&filters[category_docs][slug_id][$eq]=${slug}`;
  }

  if (pageUrl) {
    url += `&filters[url][$contains]=${pageUrl}`;
  }

  if (isPopulate) {
    url += `&fields[0]=title&fields[1]=url&populate=category,category_docs,for_installation_category,for_userguides_category`;
  } else {
    url += `&populate=*`;
  }

  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export default getDocsArticles;