export default function filterArticles(articles, category) {
    const uniqueValuesMap = {};

    articles.forEach(element => {
         const categoryData = category !== "integration" ? element?.data.attributes[`category_${category}`] : element.data;
         const slugId = category !== "integration" ? categoryData.data.attributes.slug_id : element.id;
         const categoryNameAttr = category !== "integration" ? categoryData.data.attributes.name : categoryData.attributes.title;
         const categoryUrlAttr = category !== "integration" ? categoryData.data.attributes.url : categoryData.attributes.url;

        if (!uniqueValuesMap[slugId]) {
            if (category === "integration") {
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

        if (category !== "integration") {
            const forCategory = element.data.attributes[`for_${slugId}_category`];
            if (forCategory && forCategory.level_2) {
                const level2Name = category === "docs" && slugId === "installation" ? `Docs ${forCategory.level_2}` : forCategory.level_2;
                const level2SlugId = forCategory.level_2.toLowerCase();
                const level2Url = `${categoryUrlAttr}/${level2SlugId.replace(/ /g, "_")}`;
                
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
