import CONFIG from "@config/config";

export const getMobileArticles = async (searchValue) => {
  const CMSConfigAPI = "https://cmshelpcenter.teamlab.info" || "http://localhost:1337";;
  let url = `${CMSConfigAPI}/api/article-mobiles/?&sort=title:asc`;

  if (searchValue) {
    url += `&filters[title][$contains]=${searchValue}`;
  }

  const res = await fetch(url);
  const data = await res.json();
  return data;
};