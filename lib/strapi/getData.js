import CONFIG from "../../config";

const getAllData = async () => {
  //const CMSConfigAPI = CONFIG.api.cms || "http://localhost:1337";
  const CMSConfigAPI = "http://localhost:1337";
  const res = await fetch(
    `${CMSConfigAPI}/api/articles`
  );
  const data = await res.json();
  console.log(data);
  return data;
};

export default getAllData;
