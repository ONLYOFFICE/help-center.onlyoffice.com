export const isExternalLink = (url) => {
  try {
    const link = new URL(url);
    return link.host !== window.location.host;
  } catch (e) {
    return false;
  }
};