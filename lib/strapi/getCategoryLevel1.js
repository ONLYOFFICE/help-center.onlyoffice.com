import CONFIG from "@config/config";

const getCategoryLevel1 = async (locale, slug) => {
  const CMSConfigAPI = CONFIG.api.cms || "http://localhost:1337";

  const params = [
    `filters[slug_id][$eq]=docs&populate=category_docs.level_2_docs&populate=category_docs.article_docs&populate=category_docs.card_field_img`,
    `filters[slug_id][$eq]=desktop&populate=category_desktops.level_2_desktops&populate=category_desktops.article_desktops&populate=category_desktops.card_field_img`,
    `filters[slug_id][$eq]=docspace&populate=category_docspaces.level_2_docspaces&populate=category_docspaces.article_docspaces&populate=category_docspaces.card_field_img`,
    `filters[slug_id][$eq]=mobile&populate=category_mobiles.level_2_mobiles&populate=category_mobiles.article_mobiles&populate=category_mobiles.card_field_img`,
    `filters[slug_id][$eq]=workspace&populate=category_workspaces.level_2_workspaces&populate=category_workspaces.article_workspaces&populate=category_workspaces.card_field_img`,
    `filters[slug_id][$eq]=integration${slug === "integration" ? "&populate=articles.connector_img" : "&populate=articles"}`
  ];

  const urls = params.map(param => `${CMSConfigAPI}/api/categories/?&locale=${locale}&populate=card_field_img&${param}`);
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

export default getCategoryLevel1;