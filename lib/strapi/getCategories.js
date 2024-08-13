import CONFIG from "@config/config";

const getCategories = async (locale, isMainPage) => {
  const CMSConfigAPI = CONFIG.api.cms || "http://localhost:1337";

  const params = [
    `filters[slug_id][$eq]=docs&populate=category_docs.level_2_docs&populate=category_docs.article_docs`,
    `filters[slug_id][$eq]=desktop&populate=category_desktops.level_2_desktops&populate=category_desktops.article_desktops`,
    `filters[slug_id][$eq]=docspace&populate=category_docspaces.level_2_docspaces&populate=category_docspaces.article_docspaces`,
    `filters[slug_id][$eq]=mobile&populate=category_mobiles.level_2_mobiles&populate=category_mobiles.article_mobiles`,
    `filters[slug_id][$eq]=workspace&populate=category_workspaces.level_2_workspaces&populate=category_workspaces.article_workspaces`,
    `filters[slug_id][$eq]=integration&populate=articles`
  ];

  const urls = params.map(param => `${CMSConfigAPI}/api/categories/?&locale=${locale}&${param}${isMainPage ? "&populate=card_field_img" : ""}`);
  const fetchPromises = urls.map(url => fetch(url).then(res => res.json()));
  const results = await Promise.all(fetchPromises);
  const data = results.reduce((acc, result) => {
    if (result.data && Array.isArray(result.data)) {
      return acc.concat(result.data);
    }
    return acc;
  }, []);

  return { data };
};

export default getCategories;
