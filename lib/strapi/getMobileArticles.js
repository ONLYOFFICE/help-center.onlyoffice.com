import CONFIG from "@config/config";

const getMobileArticles = async (locale, slug, pageUrl, isPopulate, level2, level3, level4) => {
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

  if (!pageUrl && level2) {
    url += `&filters[for_all_mobile_articles][level_2][$eq]=${level2.replace(/_/g, " ")}`;
    if (level3) {
      url += `&filters[for_all_mobile_articles][level_3][$eq]=${level3.replace(/_/g, " ")}`;
      if (level4) {
        url += `&filters[for_all_mobile_articles][level_4][$eq]=${level4.replace(/_/g, " ")}`;
      }
    }
  }

  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export default getMobileArticles;