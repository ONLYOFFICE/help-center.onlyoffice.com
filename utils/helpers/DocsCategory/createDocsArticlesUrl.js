export default function createDocsArticlesUrl(data, pagepath, secondWord) {
    const { category_doc, for_installation_category, for_userguides_category } = data.attributes;
    const { attributes: categoryAttributes } = category_doc?.data;
    
    let levels = [];
    let level_4;

    if (secondWord === "installation") {
        const { level_2, level_3, level_4: installationLevel4 } = for_installation_category;
        levels = [level_2, level_3].filter(Boolean).map(level => level.toLowerCase().replace(/ /g, "_"));
        level_4 = installationLevel4;
    } else if (secondWord === "userguides") {
        const { level_2, level_3 } = for_userguides_category;
        levels = [level_2, level_3].filter(Boolean).map(level => level.toLowerCase().replace(/ /g, "_"));
    }
  
    let fullPath = [categoryAttributes.url, ...levels].join("/");

    if (level_4) {
        fullPath += `#${level_4.toLowerCase().replace(/ /g, "_")}`;
    }
  
    return fullPath + "/" + pagepath;
}
