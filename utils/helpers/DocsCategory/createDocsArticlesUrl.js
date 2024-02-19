export default function createDocsArticlesUrl(data, pagepath, secondWord) {
    const { category_doc, for_installation_category, for_userguides_category } = data.attributes;
    const { attributes: categoryAttributes } = category_doc?.data;
    
    let levels = [];
    let level_4;
    let fullPath = [];

    if (secondWord === "installation") {
        const { level_2, level_3, level_4: installationLevel4 } = for_installation_category;
        levels = [level_2, level_3].filter(Boolean).map(level => level.toLowerCase().replace(/ /g, "_"));
        level_4 = installationLevel4;
        if (level_4) {
            fullPath = `${[categoryAttributes.url, ...levels].join("/")}#${level_4.toLowerCase().replace(/ /g, "_")}`;
        }
    } else if (secondWord === "userguides") {
        const { level_2, level_3 } = for_userguides_category;
        levels = [level_2].filter(Boolean).map(level => level.toLowerCase().replace(/ /g, "_"));
        if (level_3) {
            fullPath = `${[categoryAttributes.url, ...levels].join("/")}#${level_3.toLowerCase().replace(/ /g, "_")}`;
        }
    }
  
  
    return fullPath + "/" + pagepath;
}
