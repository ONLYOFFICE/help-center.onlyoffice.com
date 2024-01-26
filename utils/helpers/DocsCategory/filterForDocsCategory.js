import { useState, useEffect } from 'react';

export default function filterDocsArticles(articles, category) {
    const installationCategoryLinks = [];
    const userguidesCategoryLinks = [];
    const [cardData, setCardData] = useState([]);

    const uniqueInstallationCategorySet = new Set();
    const uniqueUserguidesCategorySet = new Set();

    articles?.forEach((article) => {
        if (article.attributes.for_installation_category) {
            const level2 = article?.attributes.for_installation_category.level_2;
            const level3 = article?.attributes.for_installation_category.level_3;
            const level4 = article?.attributes.for_installation_category.level_4;
            const uniqueLevel5Set = new Set();

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
            if (targetCategoryForLvl3) {
                const isUnique = !targetCategoryForLvl3.level_3.some(item => item.name === level3);
                if (isUnique) {
                  const newLevel3 = {
                    name: `${level3}`,
                    slug_id: level3?.toLowerCase(),
                    url: `/docs/installation/${level2?.toLowerCase()}/${level3?.toLowerCase()}`,
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
                    url: `/docs/installation/${level2?.toLowerCase()}/${level3?.toLowerCase()}#${level4?.toLowerCase().replace(/ /g, "_")}`,
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
                };

                targetCategoryForLvl5.level_5.push(newLevel5);
                uniqueLevel5Set.add(newLevel5);
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

// import { useState, useEffect } from 'react';

// export default function filterDocsArticles(articles, category) {
//     const installationCategoryLinks = [];
//     const userguidesCategoryLinks = [];
//     const [cardData, setCardData] = useState([]);

//     const uniqueInstallationCategorySet = new Set();
//     const uniqueUserguidesCategorySet = new Set();

//     articles?.forEach((article) => {
//         if (article.attributes.for_installation_category) {
//             const { level_2, level_3, level_4 } = article.attributes.for_installation_category;

//             let installationCategory = installationCategoryLinks.find(category => category.name === level_2);
//             if (!installationCategory) {
//                 installationCategory = {
//                     name: `Docs ${level_2}`,
//                     slug_id: level_2?.toLowerCase(),
//                     url: `/docs/installation/${level_2.toLowerCase()}`,
//                     level_3: [],
//                 };
//                 installationCategoryLinks.push(installationCategory);
//             }

//             let level3 = installationCategory.level_3.find(category => category.name === level_3);
//             if (!level3) {
//                 level3 = {
//                     name: `${level_3}`,
//                     slug_id: level_3?.toLowerCase(),
//                     url: `/docs/installation/${level_2?.toLowerCase()}/${level_3?.toLowerCase()}`,
//                     level_4: [],
//                 };
//                 installationCategory.level_3.push(level3);
//             }

//             let level4 = level3.level_4.find(category => category.name === level_4);
//             if (!level4) {
//                 level4 = {
//                     name: `${level_4}`,
//                     slug_id: level_4?.toLowerCase().replace(/ /g, "_"),
//                     url: `/docs/installation/${level_2?.toLowerCase()}/${level_3?.toLowerCase()}#${level_4?.toLowerCase().replace(/ /g, "_")}`,
//                     level_5: [],
//                 };
//                 level3.level_4.push(level4);
//             }

//             level4.level_5.push({
//                 name: `${article?.attributes.title}`,
//                 url: `${article?.attributes.url}`,
//             });
//         }

//         if (article.attributes.for_userguides_category) {
//             const level2 = article.attributes.for_userguides_category.level_2;
//             let userguidesCategory = userguidesCategoryLinks.find(category => category.name === level2);
//             if (!userguidesCategory) {
//                 userguidesCategory = {
//                     name: level2,
//                     url: `/docs/userguides/${level2.toLowerCase().replace(/ /g, "_")}`,
//                 };
//                 userguidesCategoryLinks.push(userguidesCategory);
//             }
//         }
//     });

//     useEffect(() => {
//         if (category === "installation") {
//             setCardData(installationCategoryLinks);
//         } else if (category === "userguides") {
//             setCardData(userguidesCategoryLinks);
//         }
//     }, [category]);

//     return cardData;
// }
