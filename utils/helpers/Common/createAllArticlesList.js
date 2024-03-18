export default function createAllArticlesList(integrationsArray, desktopArray, docsArray, docspaceArray, mobilesArray, workspaceArray) {
  const articles = [];

  integrationsArray?.forEach((item) => {
    const mergedItem = {
      data: {
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
      },
      id: item.id,
    };
    articles.push(mergedItem);
  });

  desktopArray?.forEach((item) => {
    const mergedItem = {
      data: {
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
      },
      id: item.id,
    };
    articles.push(mergedItem);
  });

  docsArray?.forEach((item) => {
    const mergedItem = {
      data: {
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
          category_docs: item?.attributes.category_docs,
          for_installation_category: item?.attributes.for_installation_category,
          for_userguides_category: item?.attributes.for_userguides_category,
        },
      },
      id: item.id,
    };

    articles.push(mergedItem);
  });

  docspaceArray?.forEach((item) => {
    const mergedItem = {
      data: {
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
      },
      id: item.id,
    };
    articles.push(mergedItem);
  });

  mobilesArray?.forEach((item) => {
    const mergedItem = {
      data: {
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
      },
      id: item.id,
    };
    articles.push(mergedItem);
  });

  workspaceArray?.forEach((item) => {
    const mergedItem = {
      data: {
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
          category_workspace: item?.attributes.category_workspace,
          for_installation_category: item?.attributes.for_installation_category,
          for_administration_category: item?.attributes.for_administration_category,
          for_userguides_category: item?.attributes.for_userguides_category,
        },
      },
      id: item.id,
    };
    articles.push(mergedItem);
  });

  return articles;
}