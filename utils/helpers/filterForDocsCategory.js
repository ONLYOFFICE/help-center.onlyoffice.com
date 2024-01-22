import { useState, useEffect } from 'react';

export default function filterDocsArticles(articles, category) {
    const installationCategoryLinks = [];
    const userguidesCategoryLinks = [];
    const [cardData, setCardData] = useState();

    const uniqueInstallationCategorySet = new Set();
    const uniqueUserguidesCategorySet = new Set();

    articles.forEach((article) => {
        if (article.attributes.for_installation_category) {
            const level2 = article?.attributes.for_installation_category.level_2;
            const level3 = article?.attributes.for_installation_category.level_3;
            const level4 = article?.attributes.for_installation_category.level_4;
            const uniqueLevel3Set = new Set();
            const uniqueLevel4Set = new Set();

            if (!uniqueInstallationCategorySet.has(level2)) {
                installationCategoryLinks.push({
                    name: `Docs ${level2}`,
                    slug_id: level2?.toLowerCase(),
                    url: `/docs/installation/${level2.toLowerCase()}`,
                    level_3: [],
                });
                uniqueInstallationCategorySet.add(level2);
            }

            const targetCategoryForLvl3 = installationCategoryLinks.find(category => category.name === `Docs ${level2}`);

            if (targetCategoryForLvl3 && !uniqueLevel3Set.has(level3)) {
                const newLevel3 = {
                    name: `${level3}`,
                    slug_id: level3?.toLowerCase(),
                    url: `/docs/installation/${level2?.toLowerCase()}/${level3?.toLowerCase()}`,
                    level_4: [],
                };

                targetCategoryForLvl3.level_3.push(newLevel3);
                uniqueLevel3Set.add(level3);
            }

            const targetCategoryForLvl4 = targetCategoryForLvl3?.level_3.find(category => category.name === `${level3}`);

            if (targetCategoryForLvl4 && !uniqueLevel4Set.has(level4)) {
                const newLevel4 = {
                    name: `${level4}`,
                    slug_id: level4?.toLowerCase().replace(/ /g, "_"),
                    url: `/docs/installation/${level2?.toLowerCase()}/${level3?.toLowerCase()}/${level4?.toLowerCase().replace(/ /g, "_")}`,
                };

                targetCategoryForLvl4.level_4.push(newLevel4);
                uniqueLevel4Set.add(newLevel4);
            }
        }

        if (article.attributes.for_userguides_category) {
            const level2 = article.attributes.for_userguides_category.level_2;
            if (!uniqueUserguidesCategorySet.has(level2)) {
                userguidesCategoryLinks.push({
                    name: level2,
                    url: `/docs/userguides/${level2.toLowerCase().replace(/ /g, "_")}`,
                });
                uniqueUserguidesCategorySet.add(level2);
            }
        }
    });

    useEffect(() => {
        if (category == "installation") {
            setCardData(installationCategoryLinks);
        }
        else if (category == "userguides") {
            setCardData(userguidesCategoryLinks);
        }
    }, [category]);

    return cardData;
}