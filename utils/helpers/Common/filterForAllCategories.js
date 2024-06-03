import { useState, useEffect } from 'react';

export default function filterArticles(articles, category, mainCategory) {
    const [cardData, setCardData] = useState([]);
    const categoryData = {};

    articles?.forEach((article) => {
        const categoryAttribute = article.attributes[`for_${category}_category`] || article.attributes.for_all_mobile_articles;
        if (categoryAttribute) {
            const level2 = categoryAttribute.level_2;
            const level3 = categoryAttribute.level_3;
            const level4 = categoryAttribute.level_4;

            if (!categoryData[level2]) {
                categoryData[level2] = {
                    name: level2,
                    slug_id: level2?.toLowerCase().replace(/ /g, "_"),
                    url: `/${mainCategory}/${category}/${level2?.toLowerCase().replace(/ /g, "_")}`,
                    level_3: [],
                };
            }

            const targetCategory = categoryData[level2];
            const isFaqOrGettingStarted = level3?.toLowerCase().replace(/ /g, "_") === "faq" || level3?.toLowerCase().replace(/ /g, "_") === "getting_started";

            let targetCategoryForLvl3 = targetCategory.level_3.find(category => category.name === `${level3}`);

            if (!targetCategoryForLvl3) {
                targetCategoryForLvl3 = {
                    name: isFaqOrGettingStarted ? `${article?.attributes.title}` : `${level3}`,
                    slug_id: level3?.toLowerCase().replace(/\/ /g, '').replace(/ /g, '_'),
                    url: isFaqOrGettingStarted ? `${article?.attributes.url}` : `/${mainCategory}/${category}/${level2?.toLowerCase().replace(/\/ /g, '').replace(/ /g, '_')}/${level3?.toLowerCase().replace(/\/ /g, '').replace(/ /g, '_')}`,
                    level_4: [],
                };
                targetCategory.level_3.push(targetCategoryForLvl3);
            }
    
            if (level4 && level4 !== "") {
                const isUniqueLevel4 = !targetCategoryForLvl3.level_4.some(item => item.name === level4);
                if (isUniqueLevel4) {
                    const newLevel4 = {
                        name: `${level4}`,
                        slug_id: level4?.toLowerCase().replace(/ /g, "_"),
                        url: `/${mainCategory}/${category}/${level2?.toLowerCase().replace(/ /g, "_")}/${level3?.toLowerCase().replace(/ /g, "_")}#${level4?.toLowerCase().replace(/ /g, "_")}`,
                        level_5: [],
                    };
                    targetCategoryForLvl3.level_4.push(newLevel4);
                }
            } else {
                const isUniqueLevel3Article = !targetCategoryForLvl3.level_4.some(item => item.name === article?.attributes.title);
                if (isUniqueLevel3Article) {
                    const newLevel4 = {
                        name: `${article?.attributes.title}`,
                        url: `${article?.attributes.url}`,
                        videos: article?.attributes.videos?.data.map(video => ({
                            title: video.attributes.title,
                            description: video.attributes.description,
                            url: video.attributes.url,
                        })) || [],
                    };
                    targetCategoryForLvl3.level_4.push(newLevel4);
                }
            }
            targetCategoryForLvl3.level_4.forEach(level4Item => {
                if (!level4Item.level_5) {
                    level4Item.level_5 = [];
                }
                const newLevel5 = {
                    name: `${article?.attributes.title}`,
                    url: `${article?.attributes.url}`,
                    videos: article?.attributes.videos?.data.map(video => ({
                        title: video.attributes.title,
                        description: video.attributes.description,
                        url: video.attributes.url,
                    })) || [],
                };
                level4Item.level_5.push(newLevel5);
            });
        }
        if (mainCategory === "docs" && (article.attributes.category_docs.data.attributes.slug_id === "development" || article.attributes.category_docs.data.attributes.slug_id === "contribution")) {
            const level2 = article.attributes.title;
            if (!categoryData[level2]) {
                categoryData[level2] = {
                    name: level2,
                    url: article.attributes.url,
                };
            }
        }
    });

    useEffect(() => {
        setCardData(Object.values(categoryData));
    }, [articles, category]);

    return cardData;
}