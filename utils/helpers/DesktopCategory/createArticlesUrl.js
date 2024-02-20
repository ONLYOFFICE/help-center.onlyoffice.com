export default function createArticlesUrl(data, pagepath, secondWord) {
    const { category_desktop, for_installation_category, for_developing_category, for_pdf_category, for_editors_category, for_plugins_category } = data.attributes;
    const { attributes: categoryAttributes } = category_desktop?.data;
    
    let levels = [];
    let level_4;
    let fullPath = [[categoryAttributes.url, ...levels].join("/")];

    if (secondWord === "installing") {
        const { level_2 } = for_installation_category;
        levels = [level_2].filter(Boolean).map(level => level.toLowerCase().replace(/ /g, "_"));
    } else if (secondWord === "developing") {
        const { level_2 } = for_developing_category;
        levels = [level_2].filter(Boolean).map(level => level.toLowerCase().replace(/ /g, "_"));
    } else if (secondWord === "pdf") {
        const { level_2 } = for_pdf_category;
        levels = [level_2].filter(Boolean).map(level => level.toLowerCase().replace(/ /g, "_"));
    } else if (secondWord === "editors") {
        const { level_2 } = for_editors_category;
        levels = [level_2].filter(Boolean).map(level => level.toLowerCase().replace(/ /g, "_"));
    } else if (secondWord === "plugin") {
        const { level_2, level_3 } = for_plugins_category;
        levels = [level_2].filter(Boolean).map(level => level.toLowerCase().replace(/ /g, "_"));
    }
  
  
    return fullPath + "/" + pagepath;
}
