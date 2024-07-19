import CONFIG from "@config/config";

const getFaq = async (locale, url) => {
  const CMSConfigAPI = CONFIG.api.cms || "http://localhost:1337";

  const res = await fetch(`${CMSConfigAPI}/api/faqs/?locale=${locale}&filters[url][$eq]=${url}&populate=faq_block.faq_item&populate=tags`);
  const data = await res.json();
  return data;
};

export default getFaq;