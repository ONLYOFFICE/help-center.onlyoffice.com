import CONFIG from "@config/config";

const getDesktopArticles = async (locale, slug, pageUrl, isPopulate) => {
  const CMSConfigAPI = CONFIG.api.cms || "http://localhost:1337";
  let url = `${CMSConfigAPI}/api/article-desktops/?locale=${locale}&sort=title:asc&pagination[pageSize]=200`;

  if (slug) {
    url += `&filters[category_desktop][slug_id][$eq]=${slug}`;
  }

  if (pageUrl) {
    url += `&filters[url][$contains]=${pageUrl}`;
  }

  if (isPopulate) {
    url += `&fields[0]=title&fields[1]=url&populate=category,category_desktop,for_installation_category,for_developing_category,for_editors_category,for_pdf_category,for_plugins_category`;
  } else {
    url += `&populate=*`;
  }

  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export default getDesktopArticles;