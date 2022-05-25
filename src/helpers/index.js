import config from "../../config.json";

export const getLocalizedImagePrefix = (prefixes, language) => {
  if (!Array.isArray(prefixes) || !language) return false;

  let prefix = config.defaultLanguage;

  prefixes.map((el) => {
    if (language.includes(el)) {
      prefix = el;
    }
    return false;
  });

  return prefix;
};
