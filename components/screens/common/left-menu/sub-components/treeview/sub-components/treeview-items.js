import InternalLink from "@components/common/internal-link";

const TreeViewItems = ({ level1Item, level1Index, slug_id, levelIndex, pathName, toggleLevelAccordion, ...rest }) => {
  return (
    <li {...rest}>
      {[...level1Item.attributes[`level_2_${slug_id}`]?.data ?? [], ...level1Item.attributes[`article_${slug_id}`]?.data ?? []].length > 0 ? (
        <>
          <div className="left-menu-level-item">
            <button
              onClick={() => toggleLevelAccordion(level1Item.attributes.url)}
              className={`left-menu-arrow-btn ${levelIndex[level1Item.attributes.url] ? "active" : ""}`}
            >
            </button>
            <InternalLink className={`left-menu-level-link left-menu-level-1-link ${pathName === level1Item.attributes.url ? "active" : ""}`} href={level1Item.attributes.url} label={level1Item.attributes.name || level1Item.attributes.title} />
          </div>

          {levelIndex[level1Item.attributes.url] && (
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
                        <InternalLink className={`left-menu-level-link ${pathName === level2Item.attributes.url ? "active" : ""}`} href={level2Item.attributes.url} label={level2Item.attributes.name || level2Item.attributes.title} />
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
                                <InternalLink className={`left-menu-level-link ${pathName === level3Item.attributes.url ? "active" : ""}`} href={level3Item.attributes.url} label={level3Item.attributes.name || level3Item.attributes.title} />
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
                                        <InternalLink className={`left-menu-level-link ${pathName === level4Item.attributes.url ? "active" : ""}`} href={level4Item.attributes.url} label={level4Item.attributes.name || level4Item.attributes.title} />
                                      </div>
                                      {levelIndex[level4Item.attributes.url] && (
                                        <ul>
                                          {level4Item.attributes[`article_${slug_id}`]?.data?.sort((a, b) => (a.attributes.position ?? Infinity) - (b.attributes.position ?? Infinity) || (a.attributes.title).localeCompare(b.attributes.title)).map((articleItem, articleIndex) => (
                                            <li key={articleIndex}>
                                              <InternalLink className="left-menu-level-link left-menu-level-4-link" href={articleItem.attributes.url} label={articleItem.attributes.title} />
                                            </li>
                                          ))}
                                        </ul>
                                      )}
                                    </li>
                                  ))}
                                  {level3Item.attributes[`article_${slug_id}`]?.data?.sort((a, b) => (a.attributes.position ?? Infinity) - (b.attributes.position ?? Infinity) || (a.attributes.name || a.attributes.title).localeCompare(b.attributes.name || b.attributes.title)).map((level4Item, level4Index) => (
                                    <InternalLink key={level4Index} className={`left-menu-level-link left-menu-level-4-link ${pathName === level4Item.attributes.url ? "active" : ""}`} href={level4Item.attributes.url} label={level4Item.attributes.name || level4Item.attributes.level_4_title || level4Item.attributes.title} />
                                  ))}
                                </ul>
                              )}
                            </li>
                          ))}
                          {level2Item.attributes[`article_${slug_id}`]?.data?.sort((a, b) => (a.attributes.position ?? Infinity) - (b.attributes.position ?? Infinity) || (a.attributes.name || a.attributes.title).localeCompare(b.attributes.name || b.attributes.title)).map((level3Item, level3Index) => (
                            <InternalLink key={level3Index} className={`left-menu-level-link left-menu-level-3-link ${pathName === level3Item.attributes.url ? "active" : ""}`} href={level3Item.attributes.url} label={level3Item.attributes.name || level3Item.attributes.title} />
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <InternalLink className={`left-menu-level-link left-menu-level-2-link ${pathName === level2Item.attributes.url ? "active" : ""}`} href={level2Item.attributes.url} label={level2Item.attributes.name || level2Item.attributes.title} />
                  )}
                </li>
              ))}
            </ul>
          )}
        </>
      ) : (
        <InternalLink className={`left-menu-level-link left-menu-category-link ${pathName === level1Item.attributes.url ? "active" : ""}`} href={level1Item.attributes.url} label={level1Item.attributes.name} />
      )}
    </li>
  )
};

export default TreeViewItems;
