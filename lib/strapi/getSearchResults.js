import CONFIG from "@config/config";

const getSearchResults = async (locale, query) => {
  const CMSConfigAPI = CONFIG.api.cms || "http://localhost:1337";

  const endpoints = [
    "articles",
    "article-desktops",
    "articles-docs",
    "article-docspaces",
    "article-mobiles",
    "article-workspaces"
  ];

  const urls = endpoints.map(endpoint => `${CMSConfigAPI}/api/${endpoint}/?&locale=${locale}&sort=title:asc&filters[title][$contains]=${query}`);
  const fetchPromises = urls.map(url => fetch(url).then(res => res.json()));
  const results = await Promise.all(fetchPromises);
  const data = results.reduce((acc, result) => {
    if (result.data && Array.isArray(result.data)) {
      return acc.concat(result.data);
    }
    return acc;
  }, []);

  return data;
};

export default getSearchResults;