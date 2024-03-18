import { useState, useEffect } from 'react';

export default function filterWorkspaceArticles(articles, category) {
    const installationCategoryLinks = [];
    const userguidesCategoryLinks = [];
    const administrationCategoryLinks = [];
    const [cardData, setCardData] = useState([]);

    const uniqueInstallationCategorySet = new Set();
    const uniqueUserguidesCategorySet = new Set();
    const uniqueAdministrationCategorySet = new Set();

    articles?.forEach((article) => {
        if (article.attributes.for_installation_category) {
            const level2 = article?.attributes.for_installation_category.level_2;
            const level3 = article?.attributes.for_installation_category.level_3;
            const level4 = article?.attributes.for_installation_category.level_4;
            const uniqueLevel5Set = new Set();

            if (!uniqueInstallationCategorySet.has(level2)) {
                installationCategoryLinks.push({
                    name: level2,
                    slug_id: level2?.toLowerCase(),
                    url: `/workspace/installation/${level2.toLowerCase()}`,
                    level_3: [],
                });
                uniqueInstallationCategorySet.add(level2);
            }

            const targetCategoryForLvl3 = installationCategoryLinks.find(category => category.name === level2);
            if (targetCategoryForLvl3) {
                const isUnique = !targetCategoryForLvl3.level_3.some(item => item.name === level3);
                if (isUnique) {
                  const newLevel3 = {
                    name: `${level3}`,
                    slug_id: level3?.toLowerCase(),
                    url: `/workspace/installation/${level2?.toLowerCase()}/${level3?.toLowerCase()}`,
                    level_4: [],
                  };
                  targetCategoryForLvl3.level_3.push(newLevel3);
                }
              }

              const targetCategoryForLvl4 = targetCategoryForLvl3?.level_3.find(category => category.name === `${level3}`);
              if (targetCategoryForLvl4) {
                  const isUnique = targetCategoryForLvl4.level_4 && !targetCategoryForLvl4.level_4.some(item => item.name === level4);
                  if (isUnique) {
                      const newLevel4 = {
                          name: `${level4}`,
                          slug_id: level4?.toLowerCase().replace(/ /g, "_"),
                          url: `/workspace/installation/${level2?.toLowerCase().replace(/ /g, "_")}/${level3?.toLowerCase().replace(/ /g, "_")}#${level4?.toLowerCase().replace(/ /g, "_")}`,
                          level_5: [],
                      };
                      targetCategoryForLvl4.level_4.push(newLevel4);
                  }
              }
  
              const targetCategoryForLvl5 = targetCategoryForLvl4?.level_4 && targetCategoryForLvl4?.level_4.find(category => category.name === `${level4}`);
  
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

        if (article.attributes.for_userguides_category) {
            const level2 = article.attributes.for_userguides_category.level_2;
            const level3 = article?.attributes.for_userguides_category.level_3;
            const uniqueLevel4Set = new Set();

            if (!uniqueUserguidesCategorySet.has(level2)) {
                userguidesCategoryLinks.push({
                    name: level2,
                    url: `/workspace/userguides/${level2.toLowerCase().replace(/ /g, "_")}`,
                });
                uniqueUserguidesCategorySet.add(level2);
            }
            const targetCategoryForLvl3 = userguidesCategoryLinks.find(category => category.name === level2);
            if (targetCategoryForLvl3) {
                const isUnique = !targetCategoryForLvl3.level_3.some(item => item.name === level3);
                if (isUnique) {
                  const newLevel3 = {
                    name: `${level3}`,
                    slug_id: level3?.toLowerCase(),
                    url: `/workspace/userguides/${level2?.toLowerCase()}/${level3?.toLowerCase()}`,
                    level_4: [],
                  };
                  targetCategoryForLvl3.level_3.push(newLevel3);
                }
              }

            const targetCategoryForLvl4 = targetCategoryForLvl3?.level_3.find(category => category.name === `${level3}`);

            if (targetCategoryForLvl4) {
                const newLevel4 = {
                    name: `${article?.attributes.title}`,
                    url: `${article?.attributes.url}`,
                    videos: article?.attributes.videos?.data.map(video => ({
                        title: video.attributes.title,
                        description: video.attributes.description,
                        url: video.attributes.url,
                    })) || [],
                };

                targetCategoryForLvl4.level_4.push(newLevel4);
                uniqueLevel4Set.add(newLevel4);
            }
        }

        if (article.attributes.for_administration_category) {
            const level2 = article.attributes.for_administration_category.level_2;
            const level3 = article?.attributes.for_administration_category.level_3;
            const uniqueLevel4Set = new Set();

            if (!uniqueAdministrationCategorySet.has(level2)) {
                administrationCategoryLinks.push({
                    name: level2,
                    url: `/workspace/administation/${level2.toLowerCase().replace(/ /g, "_")}`,
                    level_3: [],
                });
                uniqueAdministrationCategorySet.add(level2);
            }
            const targetCategoryForLvl3 = administrationCategoryLinks.find(category => category.name === level2);
            if (targetCategoryForLvl3) {
                const isUnique = !targetCategoryForLvl3.level_3.some(item => item.name === level3);
                if (isUnique) {
                  const newLevel3 = {
                    name: `${level3}`,
                    slug_id: level3?.toLowerCase(),
                    url: `/workspace/administation/${level2?.toLowerCase()}/${level3?.toLowerCase()}`,
                    level_4: [],
                  };
                  targetCategoryForLvl3.level_3.push(newLevel3);
                }
              }

            const targetCategoryForLvl4 = targetCategoryForLvl3?.level_3.find(category => category.name === `${level3}`);

            if (targetCategoryForLvl4) {
                const newLevel4 = {
                    name: `${article?.attributes.title}`,
                    url: `${article?.attributes.url}`,
                    videos: article?.attributes.videos?.data.map(video => ({
                        title: video.attributes.title,
                        description: video.attributes.description,
                        url: video.attributes.url,
                    })) || [],
                };

                targetCategoryForLvl4.level_4.push(newLevel4);
                uniqueLevel4Set.add(newLevel4);
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
        else if (category == "administration") {
            setCardData(administrationCategoryLinks);
        }
    }, [category]);

    return cardData;
}