import CONFIG from "@config/config";

const getCategoryLevel1 = async (locale, slug) => {
  const CMSConfigAPI = CONFIG.api.cms || "http://localhost:1337";

  const res = await fetch(`${CMSConfigAPI}/api/categories/?locale=${locale}
    &populate=card_field_img
    &populate=category_docs.level_2_docs
    &populate=category_desktops.level_2_desktops
    &populate=category_docspaces.level_2_docspaces
    &populate=category_mobiles.level_2_mobiles
    &populate=category_workspaces.level_2_workspaces
    ${slug === "integration" ? "&populate=articles.connector_img" : "&populate=articles"}
  `);
  const data = await res.json();
  return data;
};

export default getCategoryLevel1;