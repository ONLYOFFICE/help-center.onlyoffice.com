import CONFIG from "@config/config";

const getJsons = async () => {
  const CMSConfigAPI = CONFIG.api.cms || "http://localhost:1337";

  const res = await fetch(`${CMSConfigAPI}/api/system-jsons/`);
  const data = await res.json();
  return data;
};

export default getJsons;