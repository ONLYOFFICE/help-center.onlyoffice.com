import { useRouter } from 'next/router';

export default function checkPrevPage(categories, isArticle) {
    const router = useRouter();
    const currentUrl = router.asPath;

    const pathParts = currentUrl.split('/');

    if (pathParts.length > 2) {
        pathParts.pop();
    }
    const previousPageUrl = pathParts.join('/');

    function findCategoryByUrl(categories, url, isArticle) {
        for (const category of categories) {
        if (isArticle && category.level_5) {
            const foundLevel5 = category.level_5.find(level5Category => level5Category.url === url);
            if (foundLevel5) {
                return category;
            }
        }
            if (category.url === url || category.attributes?.url === url) {
                return category;
            }

            if (category.level_2) {
                const foundLevel2 = findCategoryByUrl(category.level_2, url, isArticle);
                if (foundLevel2) {
                    return foundLevel2;
                }
            }

            if (category.level_3) {
                const foundLevel3 = findCategoryByUrl(category.level_3, url, isArticle);
                if (foundLevel3) {
                    return foundLevel3;
                }
            }

            if (category.level_4) {
                const foundLevel4 = findCategoryByUrl(category.level_4, url, isArticle);
                if (foundLevel4) {
                    return foundLevel4;
                }
            }
        }
        return null;
    }
    const foundCategory = findCategoryByUrl(categories, isArticle ? currentUrl : previousPageUrl, isArticle);

    if (foundCategory) {
        return {
            url: foundCategory.attributes?.url || foundCategory.url,
            name: foundCategory.attributes?.name || foundCategory.name,
        };
    }

    return null;
}