import CONFIG from "@config/config";

const getDocspaceArticles = async (locale, slug, pageUrl, isPopulate) => {
  const CMSConfigAPI = CONFIG.api.cms || "http://localhost:1337";
  let url = `${CMSConfigAPI}/api/article-docspaces/?locale=${locale}&sort=title:asc&pagination[pageSize]=200`;

  if (slug) {
    url += `&filters[category_docspace][slug_id][$eq]=${slug}`;
  }

  if (pageUrl) {
    url += `&filters[url][$contains]=${pageUrl}`;
  }

  if (isPopulate) {
    url += `&fields[0]=title&fields[1]=url&populate=category,category_docspace,for_installation_category,for_userguides_category,for_administration_category,for_configuration_category`;
  } else {
    url += `&populate=*`;
  }

  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export default getDocspaceArticles;