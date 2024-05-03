export default function createCategoryStructure(category, sortedArticles) {
  if (!category || !category.data || !category.data[0] || !sortedArticles) {
    return;
  }

  category.data[0].attributes.level_2 = sortedArticles;

  return category;
}