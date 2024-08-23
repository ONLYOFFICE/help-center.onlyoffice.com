import CONFIG from "@config/config";

const getSearchResults = async (locale, query, page, pageSize) => {
  const CMSConfigAPI = CONFIG.api.cms || "http://localhost:1337";

  const endpoints = [
    "articles",
    "article-desktops",
    "articles-docs",
    "article-docspaces",
    "article-mobiles",
    "article-workspaces"
  ];

  const urls = endpoints.map(endpoint => `${CMSConfigAPI}/api/${endpoint}/?pagination[pageSize]=${pageSize}&pagination[page]=${page}&locale=${locale}&sort=title:asc&filters[title][$contains]=${query}`);
  const fetchPromises = urls.map(url => fetch(url).then(res => res.json()));
  const results = await Promise.all(fetchPromises);
  const data = results.reduce((acc, result) => {
    if (result.data && Array.isArray(result.data)) {
      return acc.concat(result.data);
    }
    return acc;
  }, []);

  const combinedMeta = results.reduce((acc, item) => {
    acc.page = item.meta.pagination.page;
    acc.pageSize = Math.max(acc.pageSize, item.meta.pagination.pageSize);
    acc.total += item.meta.pagination.total;
    return acc;
  }, { pageSize: 0, total: 0 });

  combinedMeta.pageCount = Math.ceil(combinedMeta.total / combinedMeta.pageSize);
  const startIndex = (page - 1) * pageSize;
  const paginatedData = data.slice(startIndex, startIndex + pageSize);

  const combinedResult = {
    data: paginatedData,
    meta: {
      pagination: {
        page: page,
        pageSize: pageSize,
        total: combinedMeta.total,
        pageCount: combinedMeta.pageCount
      }
    }
  };

  return combinedResult;

};

export default getSearchResults;