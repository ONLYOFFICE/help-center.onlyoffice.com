import CONFIG from "@config/config";

const getMobileArticles = async (locale, slug, pageUrl, isPopulate) => {
  const CMSConfigAPI = CONFIG.api.cms || "http://localhost:1337";
  let url = `${CMSConfigAPI}/api/article-mobiles/?locale=${locale}&sort=title:asc&pagination[pageSize]=200`;

  if (slug) {
    url += `&filters[category_mobile][slug_id][$eq]=${slug}`;
  }

  if (pageUrl) {
    url += `&filters[url][$contains]=${pageUrl}`;
  }

  if (isPopulate) {
    url += `&fields[0]=title&fields[1]=url&populate=category,category_mobile,for_all_mobile_articles`;
  } else {
    url += `&populate=*`;
  }

  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export default getMobileArticles;