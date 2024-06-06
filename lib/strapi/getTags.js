import CONFIG from "@config/config";

const getTags = async (locale, title, populate) => {
  const CMSConfigAPI = CONFIG.api.cms || "http://localhost:1337";
  let url = `${CMSConfigAPI}/api/tags/?locale=${locale}&sort=title:asc&pagination[pageSize]=200`;

  if (title) {
    url += `&filters[title][$eq]=${title}`;
  }

  if (populate) {
    url += `&populate[articles][fields][0]=url&populate[articles][fields][1]=title&populate[articles][fields][2]=subtitle&populate[articles][populate][3]=mark&populate[article_docs][fields][4]=url&populate[article_docs][fields][5]=title&populate[article_docs][fields][6]=subtitle&populate[article_docs][populate][7]=mark&populate[article_desktops][fields][8]=url&populate[article_desktops][fields][9]=title&populate[article_desktops][fields][10]=subtitle&populate[article_desktops][populate][11]=mark&populate[article_mobiles][fields][12]=url&populate[article_mobiles][fields][13]=title&populate[article_mobiles][fields][14]=subtitle&populate[article_mobiles][populate][15]=mark&populate[article_docspaces][fields][16]=url&populate[article_docspaces][fields][17]=title&populate[article_docspaces][fields][18]=subtitle&populate[article_docspaces][populate][19]=mark&populate[article_workspaces][fields][20]=url&populate[article_workspaces][fields][21]=title&populate[article_workspaces][fields][22]=subtitle&populate[article_workspaces][populate][23]=mark
    `;
  }

  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export default getTags;