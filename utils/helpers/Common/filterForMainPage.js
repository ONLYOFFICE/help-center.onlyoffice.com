export default function filterArticles(articles, category) {
    const uniqueValuesMap = {};

    articles.forEach(element => {
         const categoryData = category !== "connectors" ? element?.data.attributes[`category_${category}`] : element.data;
         const slugId = category !== "connectors" ? categoryData.data.attributes.slug_id : element.id;
         const categoryNameAttr = category !== "connectors" ? categoryData.data.attributes.name : categoryData.attributes.title;
         const categoryUrlAttr = category !== "connectors" ? categoryData.data.attributes.url : categoryData.attributes.url;

        if (!uniqueValuesMap[slugId]) {
            if (category === "connectors") {
                uniqueValuesMap[slugId] = {
                    name: categoryNameAttr,
                    url: categoryUrlAttr,
                };
            } else {
                uniqueValuesMap[slugId] = {
                    slug_id: slugId,
                    name: categoryNameAttr,
                    url: categoryUrlAttr,
                    level_2_values: [],
                };
            }
        }

        if (category !== "connectors") {
            const forCategory = element.data.attributes[`for_${slugId}_category`];
            if (forCategory && forCategory.level_2) {
                const level2Name = category === "docs" && slugId === "installation" ? `Docs ${forCategory.level_2}` : forCategory.level_2;
                const level2SlugId = forCategory.level_2.toLowerCase();
                const level2Url = `${categoryUrlAttr}/${level2SlugId}`;
                
                if (!uniqueValuesMap[slugId].level_2_values.some(obj => obj.slug_id === level2SlugId)) {
                    uniqueValuesMap[slugId].level_2_values.push({
                        slug_id: level2SlugId,
                        name: level2Name,
                        url: level2Url
                    });
                }
            }
        }
    });

    const uniqueValuesArray = Object.values(uniqueValuesMap);

    return uniqueValuesArray;
}
