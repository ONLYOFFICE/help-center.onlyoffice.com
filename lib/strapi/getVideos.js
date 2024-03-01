import CONFIG from "@config/config";

const getVideos = async (locale) => {
  const CMSConfigAPI = "https://cmshelpcenter.teamlab.info" || "http://localhost:1337";
    const res = await fetch(
    `${CMSConfigAPI}/api/videos/?locale=${locale}&sort=name:asc&populate=*`
  );
  const data = await res.json();
  return data;
};

export default getVideos;