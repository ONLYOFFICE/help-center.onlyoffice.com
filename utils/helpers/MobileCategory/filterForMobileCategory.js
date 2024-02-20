import { useState, useEffect } from 'react';

export default function filterMobileArticles(articles, category) {
    const categoryLinks = [];
    const [cardData, setCardData] = useState([]);

    const uniqueCategorySet = new Set();

    articles?.forEach((article) => {
        if (article.attributes.for_all_mobiles_category) {
            const level2 = article?.attributes.for_all_mobiles_category.level_2;
            const level3 = article?.attributes.for_all_mobiles_category.level_3;
            const level4 = article?.attributes.for_all_mobiles_category.level_4;
            const uniqueLevel5Set = new Set();

            if (!uniqueCategorySet.has(level2)) {
                categoryLinks.push({
                    name: level2,
                    slug_id: level2?.toLowerCase().replace(/ /g, "_"),
                    url: `/mobile/${category}/${level2.toLowerCase().replace(/ /g, "_")}`,
                    level_3: [],
                });
                uniqueCategorySet.add(level2);
            }

            const targetCategoryForLvl3 = categoryLinks.find(category => category.name === level2);
            if (targetCategoryForLvl3) {
                const isUnique = !targetCategoryForLvl3.level_3.some(item => item.name === level3);
                if (isUnique) {
                  const newLevel3 = {
                    name: `${level3}`,
                    slug_id: level3?.toLowerCase().replace(/ /g, "_"),
                    url: `/mobile/${category}/${level2?.toLowerCase().replace(/ /g, "_")}/${level3?.toLowerCase().replace(/ /g, "_")}`,
                    level_4: [],
                  };
                  targetCategoryForLvl3.level_3.push(newLevel3);
                }
              }

            const targetCategoryForLvl4 = targetCategoryForLvl3?.level_3.find(category => category.name === `${level3}`);
            if (targetCategoryForLvl4) {
                const isUnique = !targetCategoryForLvl4.level_4.some(item => item.name === level4);
                if (isUnique) {
                  const newLevel4 = {
                    name: `${level4}`,
                    slug_id: level4?.toLowerCase().replace(/ /g, "_"),
                    url: `/mobile/${category}/${level2?.toLowerCase().replace(/ /g, "_")}/${level3?.toLowerCase().replace(/ /g, "_")}#${level4?.toLowerCase().replace(/ /g, "_")}`,
                    level_5: [],
                  };
                  targetCategoryForLvl4.level_4.push(newLevel4);
                }
              }

            const targetCategoryForLvl5 = targetCategoryForLvl4?.level_4.find(category => category.name === `${level4}`);

            if (targetCategoryForLvl5) {
                const newLevel5 = {
                    name: `${article?.attributes.title}`,
                    url: `${article?.attributes.url}`,
                    videos: article?.attributes.videos?.data.map(video => ({
                        title: video.attributes.title,
                        description: video.attributes.description,
                        url: video.attributes.url,
                    })) || [],
                };

                targetCategoryForLvl5.level_5.push(newLevel5);
                uniqueLevel5Set.add(newLevel5);
            }
        }
    });

    useEffect(() => {
        setCardData(categoryLinks);
    }, [category]);

    return cardData;
}