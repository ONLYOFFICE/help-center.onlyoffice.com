import StyledTreeView from "./styled-treeview";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import InternalLink from "@components/common/internal-link";

const TreeView = ({ data }) => {
  const router = useRouter();
  const { page, level2, level3, level4 } = router.query;
  const routerPath = router.asPath.split("?")[0].split("#")[0];
  const routerPathHash = router.asPath.split("#")[1];
  const routerPathWithoutQuery = router.asPath.split("?")[0];
  const levelObjectData = Object.assign({},
    !level3?.includes(".aspx") && level2 && { [`/${page}/${level2}`]: true },
    !level3?.includes(".aspx") && !level3 && !level4 && router.asPath.includes(routerPathHash) && { [`/${page}/${level2}#${routerPathHash}`]: true },
    level3 && { [`/${page}/${level2}/${level3}`]: true },
    level3 && !level4 && router.asPath.includes(routerPathHash) && { [`/${page}/${level2}/${level3}#${routerPathHash}`]: true },
    level4 && { [`/${page}/${level2}/${level3}/${level4}`]: true },
    level4 && router.asPath.includes(routerPathHash) && { [`/${page}/${level2}/${level3}/${level4}#${routerPathHash}`]: true }
  );

  const [categoryIndex, setCategoryIndex] = useState(page);
  const [levelIndex, setLevelIndex] = useState(levelObjectData);

  useEffect(() => {
    setLevelIndex(levelObjectData);
  }, [router]);

  const toggleCategoryAccordion = (slug) => {
    setCategoryIndex((prev) => (prev === slug ? null : slug));
  };

  const toggleLevelAccordion = (slug_id) => {
    setLevelIndex((prev) => ({
      ...prev,
      [slug_id]: !prev[slug_id],
    }));
  };

  return (
    <StyledTreeView className="left-menu-treeview">
      <ul className="left-menu-wrapper">
        {data?.data?.sort((a, b) => (a.attributes.position ?? Infinity) - (b.attributes.position ?? Infinity) || (a.attributes.name || a.attributes.title).localeCompare(b.attributes.name || b.attributes.title)).map((item, index) => {
          const slug_id = `${item.attributes?.slug_id === "docs" ? "docs" : `${item.attributes?.slug_id}s`}`;

          return (
            <li className="left-menu-category-item" key={index}>
              <button
                onClick={() => toggleCategoryAccordion(item.attributes.slug_id)}
                className={`left-menu-category-btn ${`/${page}` === item.attributes.url ? "active" : ""}`}
              >
                {item.attributes.name}
              </button>

              {categoryIndex === item.attributes.slug_id && (
                <ul>
                  {item.attributes[`category_${slug_id}`]?.data.length > 0 ? (
                    item.attributes[`category_${slug_id}`].data?.sort((a, b) => (a.attributes.position ?? Infinity) - (b.attributes.position ?? Infinity) || (a.attributes.name || a.attributes.title).localeCompare(b.attributes.name || b.attributes.title)).map((level1Item, level1Index) => (
                      <li key={level1Index}>
                        {[...level1Item.attributes[`level_2_${slug_id}`]?.data ?? [], ...level1Item.attributes[`article_${slug_id}`]?.data ?? []].length > 0 ? (
                          <>
                            <div className="left-menu-level-item">
                              {level1Item.attributes.url ? (
                                <>
                                  <button
                                    onClick={() => toggleLevelAccordion(level1Item.attributes.url)}
                                    className={`left-menu-arrow-btn ${levelIndex[level1Item.attributes.url] ? "active" : ""}`}
                                  >
                                  </button>
                                  <InternalLink
                                    className={`left-menu-level-link left-menu-level-1-link ${routerPathWithoutQuery === level1Item.attributes.url ? "active" : ""}`}
                                    href={level1Item.attributes.url}
                                    label={level1Item.attributes.name || level1Item.attributes.title}
                                  />
                                </>
                              ) : (
                                <button
                                  onClick={() => toggleLevelAccordion(level1Item.attributes.name)}
                                  className={`left-menu-level-btn ${levelIndex[level1Item.attributes.name] ? "active" : ""}`}
                                >
                                  {level1Item.attributes.name || level1Item.attributes.title}
                                </button>
                              )}
                            </div>

                            {levelIndex[level1Item.attributes.url ? level1Item.attributes.url : level1Item.attributes.name] && (
                              <ul>
                                {[...level1Item.attributes[`level_2_${slug_id}`]?.data ?? [], ...level1Item.attributes[`article_${slug_id}`]?.data ?? []]?.sort((a, b) => (a.attributes.position ?? Infinity) - (b.attributes.position ?? Infinity) || (a.attributes.name || a.attributes.title).localeCompare(b.attributes.name || b.attributes.title)).map((level2Item, level2Index) => (
                                  <li key={level2Index}>
                                    {[...level2Item.attributes[`level_3_${slug_id}`]?.data ?? [], ...level2Item.attributes[`article_${slug_id}`]?.data ?? []].length > 0 ? (
                                      <>
                                        <div className="left-menu-level-item left-menu-level-2-item">
                                          <button
                                            onClick={() => toggleLevelAccordion(level2Item.attributes.url)}
                                            className={`left-menu-arrow-btn ${levelIndex[level2Item.attributes.url] ? "active" : ""}`}
                                          >
                                          </button>
                                          <InternalLink className={`left-menu-level-link ${routerPathWithoutQuery === level2Item.attributes.url ? "active" : ""}`} href={level2Item.attributes.url} label={level2Item.attributes.name || level2Item.attributes.title} />
                                        </div>
                                        {levelIndex[level2Item.attributes.url] && (
                                          <ul>
                                            {level2Item.attributes[`level_3_${slug_id}`]?.data?.sort((a, b) => (a.attributes.position ?? Infinity) - (b.attributes.position ?? Infinity) || (a.attributes.name || a.attributes.title).localeCompare(b.attributes.name || b.attributes.title)).map((level3Item, level3Index) => (
                                              <li key={level3Index}>
                                                <div className="left-menu-level-item left-menu-level-3-item">
                                                  <button
                                                    onClick={() => toggleLevelAccordion(level3Item.attributes.url)}
                                                    className={`left-menu-arrow-btn ${levelIndex[level3Item.attributes.url] ? "active" : ""}`}
                                                  >
                                                  </button>
                                                  <InternalLink className={`left-menu-level-link ${routerPathWithoutQuery === level3Item.attributes.url ? "active" : ""}`} href={level3Item.attributes.url} label={level3Item.attributes.name || level3Item.attributes.title} />
                                                </div>
                                                {levelIndex[level3Item.attributes.url] && (
                                                  <ul>
                                                    {level3Item.attributes[`level_4_${slug_id}`]?.data?.sort((a, b) => (a.attributes.position ?? Infinity) - (b.attributes.position ?? Infinity) || (a.attributes.name || a.attributes.title).localeCompare(b.attributes.name || b.attributes.title)).map((level4Item, level4Index) => (
                                                      <li key={level4Index}>
                                                        <div className="left-menu-level-item left-menu-level-4-item">
                                                          <button
                                                            onClick={() => toggleLevelAccordion(level4Item.attributes.url)}
                                                            className={`left-menu-arrow-btn ${levelIndex[level4Item.attributes.url] ? "active" : ""}`}
                                                          >
                                                          </button>
                                                          <InternalLink className={`left-menu-level-link ${routerPathWithoutQuery === level4Item.attributes.url ? "active" : ""}`} href={level4Item.attributes.url} label={level4Item.attributes.name || level4Item.attributes.title} />
                                                        </div>
                                                        {levelIndex[level4Item.attributes.url] && (
                                                          <ul>
                                                            {level4Item.attributes[`article_${slug_id}`]?.data?.sort((a, b) => (a.attributes.position ?? Infinity) - (b.attributes.position ?? Infinity) || (a.attributes.title).localeCompare(b.attributes.title)).map((articleItem, articleIndex) => (
                                                              <li key={articleIndex}>
                                                                <InternalLink className="left-menu-level-link left-menu-level-4-article-link" href={articleItem.attributes.url} label={articleItem.attributes.title} />
                                                              </li>
                                                            ))}
                                                          </ul>
                                                        )}
                                                      </li>
                                                    ))}
                                                    {level3Item.attributes[`article_${slug_id}`]?.data?.sort((a, b) => (a.attributes.position ?? Infinity) - (b.attributes.position ?? Infinity) || (a.attributes.name || a.attributes.title).localeCompare(b.attributes.name || b.attributes.title)).map((level4Item, level4Index) => (
                                                      <InternalLink key={level4Index} className={`left-menu-level-link left-menu-level-4-link ${routerPath === level4Item.attributes.url ? "active" : ""}`} href={level4Item.attributes.url} label={level4Item.attributes.name || level4Item.attributes.level_4_title || level4Item.attributes.title} />
                                                    ))}
                                                  </ul>
                                                )}
                                              </li>
                                            ))}
                                            {level2Item.attributes[`article_${slug_id}`]?.data?.sort((a, b) => (a.attributes.position ?? Infinity) - (b.attributes.position ?? Infinity) || (a.attributes.name || a.attributes.title).localeCompare(b.attributes.name || b.attributes.title)).map((level3Item, level3Index) => (
                                              <InternalLink key={level3Index} className={`left-menu-level-link left-menu-level-3-link ${routerPath === level3Item.attributes.url ? "active" : ""}`} href={level3Item.attributes.url} label={level3Item.attributes.name || level3Item.attributes.level_4_title || level3Item.attributes.title} />
                                            ))}
                                          </ul>
                                        )}
                                      </>
                                    ) : (
                                      <InternalLink className={`left-menu-level-link left-menu-level-2-link ${routerPath === level2Item.attributes.url ? "active" : ""}`} href={level2Item.attributes.url} label={level2Item.attributes.name || level2Item.attributes.title} />
                                    )}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </>
                        ) : (
                          <InternalLink className={`left-menu-level-link left-menu-category-link ${routerPath === level1Item.attributes.url ? "active" : ""}`} href={level1Item.attributes.url} label={level1Item.attributes.name} />
                        )}
                      </li>
                    ))
                  ) : (
                    item.attributes.articles?.data
                      .sort((a, b) => a.attributes.title.localeCompare(b.attributes.title))
                      .map((article, articleIndex) => (
                        <li key={articleIndex}>
                          <InternalLink
                            className="left-menu-level-link"
                            href={article.attributes.url}
                            label={article.attributes.title}
                          />
                        </li>
                      ))
                  )}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </StyledTreeView>
  );
};

export default TreeView;
