const GenerateTreeData = (data) => {
  const sortByPositionOrNameTitle = (a, b) => (a.attributes.position ?? Infinity) - (b.attributes.position ?? Infinity) || (a.attributes.name || a.attributes.title).localeCompare(b.attributes.name || b.attributes.title);
  const sortByPositionOrTitle = (a, b) => (a.attributes.position ?? Infinity) - (b.attributes.position ?? Infinity) || (a.attributes.title).localeCompare(b.attributes.title);

  return {
    children: data?.data?.sort(sortByPositionOrNameTitle).map((item) => {
      const slug_id = `${item.attributes?.slug_id === "docs" ? "docs" : `${item.attributes?.slug_id}s`}`;

      return {
        name: item.attributes.name,
        slug_id: item.attributes.slug_id,
        children: [...(item.attributes[`category_${slug_id}`]?.data ?? []), ...(item.attributes.articles?.data ?? [])]?.sort(sortByPositionOrNameTitle).map((item2) => ({
          name: item2.attributes.name || item2.attributes.title,
          url: item2.attributes.url,
          children: [...(item2.attributes[`level_2_${slug_id}`]?.data ?? []), ...(item2.attributes[`article_${slug_id}`]?.data ?? [])].sort(sortByPositionOrNameTitle).map((item3) => ({
            name: item3.attributes.name || item3.attributes.title,
            url: item3.attributes.url,
            children: [
              ...(item3.attributes[`level_3_${slug_id}`]?.data ?? [])?.sort(sortByPositionOrNameTitle).map((item4) => ({
                name: item4.attributes.name || item4.attributes.title,
                url: item4.attributes.url,
                children: [
                  ...(item4.attributes[`level_4_${slug_id}`]?.data ?? []).sort(sortByPositionOrNameTitle).map((item5) => ({
                    name: item5.attributes.name || item5.attributes.title,
                    url: item5.attributes.url,
                    children: item5.attributes[`article_${slug_id}`]?.data?.sort(sortByPositionOrTitle).map((item6) => ({
                      name: item6.attributes.name || item6.attributes.title,
                      url: item6.attributes.url,
                    }))
                  })),
                  ...(item4.attributes[`article_${slug_id}`]?.data ?? [])?.sort(sortByPositionOrTitle).map((item5) => ({
                    name: item5.attributes.name || item5.attributes.level_4_title || item5.attributes.title,
                    url: item5.attributes.url,
                  })),
                ]
              })),
              ...(item3.attributes[`article_${slug_id}`]?.data ?? [])?.sort(sortByPositionOrTitle).map((item4) => ({
                name: item4.attributes.name || item4.attributes.level_4_title || item4.attributes.title,
                url: item4.attributes.url,
              })),
            ],
          })),
        })),
      };
    }),
  };
};

export default GenerateTreeData;