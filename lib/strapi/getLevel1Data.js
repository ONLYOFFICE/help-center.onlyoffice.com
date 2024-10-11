import CONFIG from "@config/config";

const getLevel1Data = async (locale, slug) => {
  const CMSConfigAPI = CONFIG.api.cms || "http://localhost:1337";
  const categorySlugMany = slug === "docs" ? "docs" : `${slug}s`;

  const res = await fetch(`${CMSConfigAPI}/api/categories/?&locale=${locale}&filters[slug_id][$eq]=${slug}&fields=name,url,slug_id,seo_title,seo_description` +
    (slug === "integration"
      ? `&populate[articles][populate]=connector_img&populate[articles][fields]=title,url,description`
      : `&populate[category_${categorySlugMany}][fields]=name,url,description,slug_id,position&populate[category_${categorySlugMany}][populate][level_2_${categorySlugMany}][fields]=name,url,position&populate[category_${categorySlugMany}][populate][article_${categorySlugMany}][fields]=title,url,position&populate[category_${categorySlugMany}][populate]=card_field_img`) +
    `&populate=card_field_img`
  );
  const data = await res.json();
  return data;
};

export default getLevel1Data;