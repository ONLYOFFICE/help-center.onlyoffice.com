import CONFIG from "@config/config";

const getDesktopArticles = async (locale, slug, pageUrl, isPopulate, level2) => {
  const CMSConfigAPI = CONFIG.api.cms || "http://localhost:1337";
  let url = `${CMSConfigAPI}/api/article-desktops/?locale=${locale}&sort=title:asc&pagination[pageSize]=200`;

  if (slug) {
    url += `&filters[category_desktop][slug_id][$eq]=${slug}`;
  }

  if (pageUrl) {
    url += `&filters[url][$contains]=${pageUrl}`;
  }

  if (isPopulate) {
    url += `&fields[0]=title&fields[1]=url&populate=category,category_desktop,for_installation_category,for_developing_category`;
  } else {
    url += `&populate=*`;
  }

  if (!pageUrl && level2) {
    url += `&filters[$or][0][for_installation_category][level_2][$eq]=${level2.replace(/_/g, " ")}&filters[$or][1][for_developing_category][level_2][$eq]=${level2.replace(/_/g, " ")}`;
  }

  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export default getDesktopArticles;