export default function createArticlesUrl(data, pagepath, secondWord) {
    const { category_mobile, for_all_mobile_articles } = data.attributes;
    const { attributes: categoryAttributes } = category_mobile?.data;
    
    let levels = [];
    let fullPath = [[categoryAttributes.url, ...levels].join("/")];
    const { level_2, level_3, level_4 } = for_all_mobile_articles;
    levels = [level_2, level_3, level_4].filter(Boolean).map(level => level.toLowerCase().replace(/ /g, "_"));
  
    return fullPath + "/" + pagepath;
}
