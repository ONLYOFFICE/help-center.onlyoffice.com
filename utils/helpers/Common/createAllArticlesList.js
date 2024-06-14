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
                slug_id: item?.attributes.category?.data?.attributes?.slug_id,
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
                slug_id: item?.attributes.category?.data?.attributes?.slug_id,
              }
            }
          },
          category_desktop: item?.attributes.category_desktop,
          for_installation_category: item?.attributes.for_installation_category,
          for_developing_category: item?.attributes.for_developing_category,
        },
      },
      id: item.id,
    };
    articles.push(mergedItem);
  });

  docsArray?.forEach((item) => {
    const docsCategory = item?.attributes.category?.data?.find(category => category?.attributes?.slug_id === 'docs');
    const desktopCategory = item?.attributes.category?.data?.find(category => category?.attributes?.slug_id === 'desktop');
    if (docsCategory) {
      const mergedItem = {
        data: {
          attributes: {
            title: item?.attributes.title,
            url: item?.attributes.url,
            category: {
              data: {
                attributes: {
                  slug_id: docsCategory?.attributes?.slug_id,
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
    }
    if (desktopCategory) {
      const mergedItem = {
        data: {
          attributes: {
            title: item?.attributes.title,
            url: item?.attributes.url.replace('/docs/', '/desktop/'),
            category: {
              data: {
                attributes: {
                  slug_id: desktopCategory?.attributes?.slug_id,
                }
              }
            },
            category_desktop: {
              data: {
                attributes: {
                  url: item?.attributes.category_docs.data.attributes.url.replace('/docs/', '/desktop/'),
                  slug_id: item?.attributes.category_docs.data.attributes.slug_id,
                  locale: item?.attributes.category_docs.data.attributes.locale,
                  name: item?.attributes.category_docs.data.attributes.name,
                }
              }
            },
            for_userguides_category: item?.attributes.for_userguides_category,
          },
        },
        id: item.id,
      };
  
      articles.push(mergedItem);
    }
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
                slug_id: item?.attributes.category?.data?.attributes?.slug_id,
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
                slug_id: item?.attributes.category?.data?.attributes?.slug_id,
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
                slug_id: item?.attributes.category?.data?.attributes?.slug_id,
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