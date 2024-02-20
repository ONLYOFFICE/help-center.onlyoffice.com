export default function createAllArticlesList(integrationsArray, desktopArray, docsArray, docspaceArray, mobilesArray) {
  const articles = [];

  integrationsArray?.forEach((item) => {
    const mergedItem = {
      attributes: {
        title: item?.attributes.title,
        url: item?.attributes.url,
        category: {
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

  desktopArray?.forEach((item) => {
    const mergedItem = {
      attributes: {
        title: item?.attributes.title,
        url: item?.attributes.url,
        category: {
          data: {
            attributes: {
              slug_id: item?.attributes.category?.data.attributes.slug_id,
            }
          }
        },
        category_desktop: item?.attributes.category_desktop,
        for_installation_category: item?.attributes.for_installation_category,
        for_developing_category: item?.attributes.for_developing_category,
        for_pdf_category: item?.attributes.for_pdf_category,
        for_editors_category: item?.attributes.for_editors_category,
        for_plugins_category: item?.attributes.for_plugins_category,
      },
    };
    articles.push(mergedItem);
  });

  docsArray?.forEach((item) => {
    const mergedItem = {
      attributes: {
        title: item?.attributes.title,
        url: item?.attributes.url,
        category: {
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

  docspaceArray?.forEach((item) => {
    const mergedItem = {
      attributes: {
        title: item?.attributes.title,
        url: item?.attributes.url,
        category: {
          data: {
            attributes: {
              slug_id: item?.attributes.category?.data.attributes.slug_id,
            }
          }
        },
        category_docspace: item?.attributes.category_docspace,
        for_installation_category: item?.attributes.for_installation_category,
        for_administration_category: item?.attributes.for_administration_category,
        for_userguides_category: item?.attributes.for_userguides_category,
        for_configuration_category: item?.attributes.for_configuration_category,
      },
    };
    articles.push(mergedItem);
  });

  mobilesArray?.forEach((item) => {
    const mergedItem = {
      attributes: {
        title: item?.attributes.title,
        url: item?.attributes.url,
        category: {
          data: {
            attributes: {
              slug_id: item?.attributes.category?.data.attributes.slug_id,
            }
          }
        },
        category_mobile: item?.attributes.category_mobile,
        for_all_mobiles_category: item?.attributes.for_all_mobiles_category,
      },
    };
    articles.push(mergedItem);
  });

  return articles;
}