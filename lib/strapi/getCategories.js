import CONFIG from "@config/config";

const getCategories = async (locale) => {
  const CMSConfigAPI = CONFIG.api.cms || "http://localhost:1337";
  const res = await fetch(`${CMSConfigAPI}/api/categories/?locale=${locale}
    &populate=card_field_img
    &populate=articles
    &populate=category_docs.level_2_docs
    &populate=category_desktops.level_2_desktops
    &populate=category_docspaces.level_2_docspaces
    &populate=category_mobiles.level_2_mobiles
    &populate=category_workspaces.level_2_workspaces
  `);
  const data = await res.json();
  return data;
};

export default getCategories;
