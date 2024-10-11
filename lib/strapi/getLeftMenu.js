import CONFIG from "@config/config";

const getLeftMenu = async (locale) => {
  const CMSConfigAPI = CONFIG.api.cms || "http://localhost:1337";

  const params = [
    `filters[slug_id][$eq]=docs&fields=name,url,slug_id,position&populate[category_docs][fields]=name,url,position&populate[category_docs][populate][article_docs][fields]=title,url&populate[category_docs][populate][level_2_docs][fields]=name,url,position&populate[category_docs][populate][level_2_docs][populate][article_docs][fields]=title,url,position&populate[category_docs][populate][level_2_docs][populate][level_3_docs][fields]=name,url,position&populate[category_docs][populate][level_2_docs][populate][level_3_docs][populate][article_docs][fields]=title,url,position,level_4_title&populate[category_docs][populate][level_2_docs][populate][level_3_docs][populate][level_4_docs][fields]=name,url,position&populate[category_docs][populate][level_2_docs][populate][level_3_docs][populate][level_4_docs][populate][article_docs][fields]=title,url,position`,
    `filters[slug_id][$eq]=desktop&fields=name,url,slug_id,position&populate[category_desktops][fields]=name,url,position&populate[category_desktops][populate][article_desktops][fields]=title,url,position&populate[category_desktops][populate][level_2_desktops][fields]=name,url,position&populate[category_desktops][populate][level_2_desktops][populate][article_desktops][fields]=title,url,position`,
    `filters[slug_id][$eq]=docspace&fields=name,url,slug_id,position&populate[category_docspaces][fields]=name,url,position&populate[category_docspaces][populate][article_docspaces][fields]=title,url,position&populate[category_docspaces][populate][level_2_docspaces][fields]=name,url,position&populate[category_docspaces][populate][level_2_docspaces][populate][article_docspaces][fields]=title,url,position&populate[category_docspaces][populate][level_2_docspaces][populate][level_3_docspaces][fields]=name,url,position&populate[category_docspaces][populate][level_2_docspaces][populate][level_3_docspaces][populate][article_docspaces][fields]=title,url,position`,
    `filters[slug_id][$eq]=mobile&fields=name,url,slug_id,position&populate[category_mobiles][fields]=name,url,position&populate[category_mobiles][populate][article_mobiles][fields]=title,url,position&populate[category_mobiles][populate][level_2_mobiles][fields]=name,url,position&populate[category_mobiles][populate][level_2_mobiles][populate][article_mobiles][fields]=title,url,position&populate[category_mobiles][populate][level_2_mobiles][populate][level_3_mobiles][fields]=name,url,position&populate[category_mobiles][populate][level_2_mobiles][populate][level_3_mobiles][populate][article_mobiles][fields]=title,url,position,level_4_title&populate[category_mobiles][populate][level_2_mobiles][populate][level_3_mobiles][populate][level_4_mobiles][fields]=name,url,position&populate[category_mobiles][populate][level_2_mobiles][populate][level_3_mobiles][populate][level_4_mobiles][populate][article_mobiles][fields]=title,url,position`,
    `filters[slug_id][$eq]=workspace&fields=name,url,slug_id,position&populate[category_workspaces][fields]=name,url,position&populate[category_workspaces][populate][article_workspaces][fields]=title,url,position&populate[category_workspaces][populate][level_2_workspaces][fields]=name,url,position&populate[category_workspaces][populate][level_2_workspaces][populate][article_workspaces][fields]=title,url,position&populate[category_workspaces][populate][level_2_workspaces][populate][level_3_workspaces][fields]=name,url,position&populate[category_workspaces][populate][level_2_workspaces][populate][level_3_workspaces][populate][article_workspaces][fields]=title,url,position,level_4_title&populate[category_workspaces][populate][level_2_workspaces][populate][level_3_workspaces][populate][level_4_workspaces][fields]=name,url,position&populate[category_workspaces][populate][level_2_workspaces][populate][level_3_workspaces][populate][level_4_workspaces][populate][article_workspaces][fields]=title,url,position`,
    `filters[slug_id][$eq]=integration&populate[articles][fields]=title,url`
  ];
  const urls = params.map(param => `${CMSConfigAPI}/api/categories/?&locale=${locale}&${param}`);
  const fetchPromises = urls.map(url => fetch(url).then(res => res.json()));
  const results = await Promise.all(fetchPromises);
  const data = results.reduce((acc, result) => {
    if (result.data && Array.isArray(result.data)) {
      return acc.concat(result.data);
    }
    return acc;
  }, []);

  return { data };
};

export default getLeftMenu;
