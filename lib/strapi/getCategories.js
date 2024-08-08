import CONFIG from "@config/config";

const getCategories = async (locale, isMainPage) => {
  const CMSConfigAPI = CONFIG.api.cms || "http://localhost:1337";
  
  let populateParams = `&populate=category_docs.level_2_docs
    &populate=category_docs.article_docs
    &populate=category_desktops.level_2_desktops
    &populate=category_desktops.article_desktops
    &populate=category_docspaces.level_2_docspaces
    &populate=category_docspaces.article_docspaces
    &populate=category_mobiles.level_2_mobiles
    &populate=category_mobiles.article_mobiles
    &populate=category_workspaces.level_2_workspaces
    &populate=category_workspaces.article_workspaces
    &populate=articles
  `;

  if (isMainPage) {
    populateParams += `
      &populate=card_field_img
    `;
  }

  const res = await fetch(`${CMSConfigAPI}/api/categories/?locale=${locale}${populateParams}`);
  const data = await res.json();
  return data;
};

export default getCategories;
