 import CONFIG from "@config/config";
 import { filterSearchDuplicates } from "@utils/helpers/System/filterSearchDuplicate";

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

  const urls = endpoints.map(endpoint => `${CMSConfigAPI}/api/${endpoint}/?pagination[pageSize]=1000&pagination[page]=1&locale=${locale}&sort=title:asc&filters[title][$contains]=${query}`);
  const fetchPromises = urls.map(url => fetch(url).then(res => res.json()));
  const results = await Promise.all(fetchPromises);
  const data = results.reduce((acc, result) => {
    if (result.data && Array.isArray(result.data)) {
      return acc.concat(result.data);
    }
    return acc;
  }, []);

  const uniqueData = filterSearchDuplicates(data);
  const totalResults = uniqueData.length;
  const pageCount = Math.ceil(totalResults / pageSize);
  
  const startIndex = (page - 1) * pageSize;
  const paginatedData = uniqueData.slice(startIndex, startIndex + pageSize);

  const combinedResult = {
    data: paginatedData,
    meta: {
      pagination: {
        page: page,
        pageSize: pageSize,
        total: totalResults,
        pageCount: pageCount
      }
    }
  };

  return combinedResult;
};
export default getSearchResults;