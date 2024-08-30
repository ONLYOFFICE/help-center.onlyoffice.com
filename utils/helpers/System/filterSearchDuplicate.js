export const filterSearchDuplicates = (articles) => {
    const urlSet = new Set();
    articles.forEach(item => {
        const url = item.attributes.url.split('#')[0];
        urlSet.add(url);
    });
    articles = articles.filter(item => {
        const url = item.attributes.url;
        const baseUrl = url.split('#')[0];
        return urlSet.has(baseUrl) && url === baseUrl;
    });
    return articles;
};
