export default function findCategory (categories, name) {
    const category = categories?.find((it) => it.slug_id === name);
  
    if (category) {
      return category;
    }
  
    for (const level2 of categories.flatMap((it) => it.level_2 || [])) {
      if (level2.slug_id === name) {
        return level2;
      }
  
      for (const level3 of level2.level_3 || []) {
        if (level3.slug_id === name) {
          return level3;
        }
  
        for (const level4 of level3.level_4 || []) {
          if (level4.slug_id === name) {
            return level4;
          }
        }
      }
    }
  
    return null;
  };