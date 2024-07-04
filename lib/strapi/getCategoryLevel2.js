import CONFIG from "@config/config";

const getCategoryLevel2 = async (locale, slug) => {
  const CMSConfigAPI = CONFIG.api.cms || "http://localhost:1337";

  const res = await fetch(`${CMSConfigAPI}/api/categories/?locale=${locale}
    &filters[slug_id][$eq]=${slug}
    &populate=card_field_img
    ${slug === "docs" ? "&populate=category_docs.level_2_docs" :
      slug === "desktop" ? "&populate=category_desktops.level_2_desktops" :
      slug === "docspace" ? "&populate=category_docspaces.level_2_docspaces" :
      slug === "mobile" ? "&populate=category_mobiles.level_2_mobiles" :
      slug === "workspace" ? "&populate=category_workspaces.level_2_workspaces" :
      slug === "integration" ? "&populate=articles.connector_img" : null
    }
  `);
  const data = await res.json();
  return data;
};

export default getCategoryLevel2;