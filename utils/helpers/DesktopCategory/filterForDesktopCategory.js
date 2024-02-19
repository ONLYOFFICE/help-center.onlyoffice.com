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

            if (!uniqueInstallationCategorySet.has(level2)) {
                installationCategoryLinks.push({
                    name: `Docs ${level2}`,
                    slug_id: level2?.toLowerCase(),
                    url: `/desktop/installation/${level2.toLowerCase()}`,
                    level_3: [],
                });
                uniqueInstallationCategorySet.add(level2);
            }
        }

        if (article.attributes.for_developing_category) {
            const level2 = article.attributes.for_developing_category.level_2;
            if (!uniqueDevelopingCategorySet.has(level2)) {
                developingCategoryLinks.push({
                    name: level2,
                    url: `/desktop/developing/${level2.toLowerCase().replace(/ /g, "_")}`,
                });
                uniqueDevelopingCategorySet.add(level2);
            }
        }

        if (article.attributes.for_pdf_category) {
            const level2 = article.attributes.for_pdf_category.level_2;
            if (!uniquePDFCategorySet.has(level2)) {
                pdfCategoryLinks.push({
                    name: level2,
                    url: `/desktop/pdf/${level2.toLowerCase().replace(/ /g, "_")}`,
                });
                uniquePDFCategorySet.add(level2);
            }
        }
        if (article.attributes.for_editors_category) {
            const level2 = article.attributes.for_editors_category.level_2;
            if (!uniqueEditorsCategorySet.has(level2)) {
                editorsCategoryLinks.push({
                    name: level2,
                    url: `/desktop/editors/${level2.toLowerCase().replace(/ /g, "_")}`,
                });
                uniqueEditorsCategorySet.add(level2);
            }
        }
        if (article.attributes.for_plugins_category) {
            const level2 = article.attributes.for_plugins_category.level_2;
            if (!uniquePluginsCategorySet.has(level2)) {
                pluginsCategoryLinks.push({
                    name: level2,
                    url: `/desktop/plugins/${level2.toLowerCase().replace(/ /g, "_")}`,
                });
                uniquePluginsCategorySet.add(level2);
            }
        }
    });

    useEffect(() => {
        if (category == "installation") {
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