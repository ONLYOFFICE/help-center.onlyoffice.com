export default function createAllArticlesList(integrationsArray, docsArray) {
    const articles = [];
  
    integrationsArray?.forEach((item) => {
        const mergedItem = {
          attributes: {
            title: item?.attributes.title,
            url: item?.attributes.url,
            category : {
                data: {
                    attributes: {
                        slug_id: item?.attributes.category?.data.attributes.slug_id,
                    }
                }
            },
          },
        };
        articles.push(mergedItem);
      });
    
      docsArray?.forEach((item) => {
        const mergedItem = {
          attributes: {
            title: item?.attributes.title,
            url: item?.attributes.url,
            category : {
                data: {
                    attributes: {
                        slug_id: item?.attributes.category?.data.attributes.slug_id,
                    }
                }
            },
            category_doc: item?.attributes.category_doc,
            for_installation_category: item?.attributes.for_installation_category,
            for_userguides_category: item?.attributes.for_userguides_category,
          },
        };
    
        articles.push(mergedItem);
      });
  
    return articles;
  }