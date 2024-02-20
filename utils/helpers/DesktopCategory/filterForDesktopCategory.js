import { useState, useEffect } from 'react';

export default function filterDesktopArticles(articles, category) {
    const installationCategoryLinks = [];
    const developingCategoryLinks = [];
    const pdfCategoryLinks = [];
    const pluginsCategoryLinks = [];
    const editorsCategoryLinks = [];
    const [cardData, setCardData] = useState([]);

    const uniqueInstallationCategorySet = new Set();
    const uniqueDevelopingCategorySet = new Set();
    const uniquePDFCategorySet = new Set();
    const uniquePluginsCategorySet = new Set();
    const uniqueEditorsCategorySet = new Set();

    articles?.forEach((article) => {
        if (article.attributes.for_installation_category) {
            const level2 = article?.attributes.for_installation_category.level_2;
            const uniqueLevel3Set = new Set();

            if (!uniqueInstallationCategorySet.has(level2)) {
                installationCategoryLinks.push({
                    name: level2,
                    slug_id: level2?.toLowerCase(),
                    url: `/desktop/installing/${level2.toLowerCase()}`,
                    level_3: [],
                });
                uniqueInstallationCategorySet.add(level2);
            }

            const targetCategoryForLvl3 = installationCategoryLinks.find(category => category.name === level2);

            if (targetCategoryForLvl3) {
                const newLevel3 = {
                    name: `${article?.attributes.title}`,
                    url: `${article?.attributes.url}`,
                    videos: article?.attributes.videos?.data.map(video => ({
                        title: video.attributes.title,
                        description: video.attributes.description,
                        url: video.attributes.url,
                    })) || [],
                };

                targetCategoryForLvl3.level_3.push(newLevel3);
                uniqueLevel3Set.add(newLevel3);
            }
        }
        if (article.attributes.for_developing_category) {
            const level2 = article.attributes.for_developing_category.level_2;
            const uniqueLevel3Set = new Set();

            if (!uniqueDevelopingCategorySet.has(level2)) {
                developingCategoryLinks.push({
                    name: level2,
                    url: `/desktop/developing/${level2.toLowerCase().replace(/ /g, "_")}`,
                    level_3: [],
                });
                uniqueDevelopingCategorySet.add(level2);
            }
            const targetCategoryForLvl3 = developingCategoryLinks.find(category => category.name === level2);

            if (targetCategoryForLvl3) {
                const newLevel3 = {
                    name: `${article?.attributes.title}`,
                    url: `${article?.attributes.url}`,
                    videos: article?.attributes.videos?.data.map(video => ({
                        title: video.attributes.title,
                        description: video.attributes.description,
                        url: video.attributes.url,
                    })) || [],
                };

                targetCategoryForLvl3.level_3.push(newLevel3);
                uniqueLevel3Set.add(newLevel3);
            }
        }
        if (article.attributes.for_pdf_category) {
            const level2 = article.attributes.for_pdf_category.level_2;
            const uniqueLevel3Set = new Set();

            if (!uniquePDFCategorySet.has(level2)) {
                pdfCategoryLinks.push({
                    name: level2,
                    url: `/desktop/pdf/${level2.toLowerCase().replace(/ /g, "_")}`,
                    level_3: [],
                });
                uniquePDFCategorySet.add(level2);
            }
            const targetCategoryForLvl3 = pdfCategoryLinks.find(category => category.name === level2);

            if (targetCategoryForLvl3) {
                const newLevel3 = {
                    name: `${article?.attributes.title}`,
                    url: `${article?.attributes.url}`,
                    videos: article?.attributes.videos?.data.map(video => ({
                        title: video.attributes.title,
                        description: video.attributes.description,
                        url: video.attributes.url,
                    })) || [],
                };

                targetCategoryForLvl3.level_3.push(newLevel3);
                uniqueLevel3Set.add(newLevel3);
            }
        }
        if (article.attributes.for_editors_category) {
            const level2 = article.attributes.for_editors_category.level_2;
            const uniqueLevel3Set = new Set();
            if (!uniqueEditorsCategorySet.has(level2)) {
                editorsCategoryLinks.push({
                    name: level2,
                    url: `/desktop/editors/${level2.toLowerCase().replace(/ /g, "_")}`,
                    level_3: [],
                });
                uniqueEditorsCategorySet.add(level2);
            }
            const targetCategoryForLvl3 = editorsCategoryLinks.find(category => category.name === level2);

            if (targetCategoryForLvl3) {
                const newLevel3 = {
                    name: `${article?.attributes.title}`,
                    url: `${article?.attributes.url}`,
                    videos: article?.attributes.videos?.data.map(video => ({
                        title: video.attributes.title,
                        description: video.attributes.description,
                        url: video.attributes.url,
                    })) || [],
                };

                targetCategoryForLvl3.level_3.push(newLevel3);
                uniqueLevel3Set.add(newLevel3);
            }
        }
        if (article.attributes.for_plugins_category) {
            const level2 = article.attributes.for_plugins_category.level_2;
            const uniqueLevel3Set = new Set();

            if (!uniquePluginsCategorySet.has(level2)) {
                pluginsCategoryLinks.push({
                    name: level2,
                    url: `/desktop/plugins/${level2.toLowerCase().replace(/ /g, "_")}`,
                    level_3: [],
                });
                uniquePluginsCategorySet.add(level2);
            }
            const targetCategoryForLvl3 = pluginsCategoryLinks.find(category => category.name === level2);

            if (targetCategoryForLvl3) {
                const newLevel3 = {
                    name: `${article?.attributes.title}`,
                    url: `${article?.attributes.url}`,
                    videos: article?.attributes.videos?.data.map(video => ({
                        title: video.attributes.title,
                        description: video.attributes.description,
                        url: video.attributes.url,
                    })) || [],
                };

                targetCategoryForLvl3.level_3.push(newLevel3);
                uniqueLevel3Set.add(newLevel3);
            }
        }
    });

    useEffect(() => {
        if (category == "installing") {
            setCardData(installationCategoryLinks);
        }
        else if (category == "developing") {
            setCardData(developingCategoryLinks);
        }
        else if (category == "pdf") {
            setCardData(pdfCategoryLinks);
        }
        else if (category == "editors") {
            setCardData(editorsCategoryLinks);
        }
        else if (category == "plugins") {
            setCardData(pluginsCategoryLinks);
        }
    }, [category]);

    return cardData;
}