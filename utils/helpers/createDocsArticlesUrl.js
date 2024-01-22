export default function createDocsArticlesUrl(data, pagepath) {
    const { category_doc, for_installation_category } = data.attributes;
    const { attributes: categoryAttributes } = category_doc?.data;
    const { level_2, level_3, level_4 } = for_installation_category;
  
    const levels = [level_2, level_3, level_4].filter(Boolean).map(level => level.toLowerCase().replace(/ /g, "_"));
    const fullPath = [categoryAttributes.url, ...levels].join("/");
  
    return  fullPath + "/" + pagepath;
  }