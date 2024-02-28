export default function createArticlesUrl(data, pagepath) {
    const { category_mobile, for_all_mobiles_category } = data.attributes;
    const { attributes: categoryAttributes } = category_mobile?.data;
    
    let levels = [];
    let fullPath = [[categoryAttributes.url, ...levels].join("/")];
    const { level_2, level_3, level_4 } = for_all_mobiles_category;
    levels = [level_2, level_3, level_4].filter(Boolean).map(level => level.toLowerCase().replace(/ /g, "_"));
  
    return fullPath + "/" + pagepath;
}
