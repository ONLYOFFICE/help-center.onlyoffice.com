export const isExternalLink = (url) => {
    if (typeof window === 'undefined') {
        return false;
    }
    if (!url) {
        return false;
    }
    try {
        const link = new URL(url);
        return link.host !== window.location.host;
    } catch (e) {
        return false;
    }
};