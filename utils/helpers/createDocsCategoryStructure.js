export default function createDocsCategoryStructure(categories, subcategories) {
    const allDocsCategories = categories?.map((item) => {
      const matchedItems = subcategories?.filter((it) =>
        it.url.startsWith(item.attributes.url)
      );
  
      return {
        ...item.attributes,
        level_2: matchedItems,
      };
    });
  
    return allDocsCategories;
  }