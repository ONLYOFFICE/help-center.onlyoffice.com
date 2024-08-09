import StyledCategoriesLeftMenu from "./styled-categories-left-menu";
import { useState, useEffect } from "react";
import InternalLink from "@components/common/internal-link";
import Scrollbar from "react-scrollbars-custom";

const CategoriesLeftMenu = ({ leftMenuMobile, setLeftMenuMobile, categories }) => {
  const [activeItems, setActiveItems] = useState({});

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (leftMenuMobile) {
        if (!event.target.closest(".left-menu")) {
          setActiveItems(false);
        }
      }
    };

    if (leftMenuMobile) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [leftMenuMobile]);

  const toggleActive = (level, index) => {
    setActiveItems(prevState => ({
      ...prevState,
      [`${level}-${index}`]: !prevState[`${level}-${index}`]
    }));
  };

  const closeLeftMenu = () => {
    setLeftMenuMobile(false);
    setActiveItems({});
  };

  return (
    <StyledCategoriesLeftMenu className={`left-menu ${leftMenuMobile ? "active" : ""}`}>
      <button onClick={closeLeftMenu} className="left-menu-close-btn"></button>
      <Scrollbar>
        <ul className="left-menu-wrapper">
          {categories.data?.sort((a, b) => a.attributes.position - b.attributes.position).map((category, index) => {
            const slug_id = `${category.attributes?.slug_id === "docs" ? "docs" : `${category.attributes?.slug_id}s`}`;

            return (
              <li className="left-menu-item" key={index}>
                <button onClick={() => toggleActive(1, index)} className={`left-menu-btn ${activeItems[`1-${index}`] ? "active" : ""}`}>
                  {category.attributes.name}
                </button>

                {category.attributes[`category_${slug_id}`]?.data.length > 0 && activeItems[`1-${index}`] ? (
                  <ul className="left-menu-level1">
                    {category.attributes[`category_${slug_id}`]?.data.map((level1Item, level1Index) => (
                      <li className="left-menu-level1-item" key={level1Index}>
                        {level1Item.attributes[`level_2_${slug_id}`]?.data.length > 0 ? (
                          <button
                            onClick={() => toggleActive(2, `${index}-${level1Index}`)}
                            className={`left-menu-level1-btn ${level1Item.attributes[`level_2_${slug_id}`]?.data.length > 0 ? "level-1" : ""} ${activeItems[`2-${index}-${level1Index}`] ? "active" : ""}`}
                          >
                            {level1Item.attributes.name}
                          </button>
                        ) : (
                          <InternalLink className="left-menu-level1-link" href={level1Item.attributes.url} label={level1Item.attributes.name} />
                        )}

                        {level1Item.attributes[`level_2_${slug_id}`]?.data.length > 0 && activeItems[`2-${index}-${level1Index}`] &&
                          <ul className="left-menu-level2">
                            {level1Item.attributes[`level_2_${slug_id}`]?.data.map((level2Item, level2Index) => (
                              <li className="left-menu-level2-item" key={level2Index}>
                                <InternalLink className="left-menu-level2-link" href={level2Item.attributes.url} label={level2Item.attributes.name} />
                              </li>
                            ))}
                            {level1Item.attributes[`article_${slug_id}`]?.data.sort((a, b) => a.attributes.title.localeCompare(b.attributes.title)).map((level2Item, level2Index) => (
                              <li className="left-menu-level2-item" key={level2Index}>
                                <InternalLink className="left-menu-level2-link" href={level2Item.attributes.url} label={level2Item.attributes.title} />
                              </li>
                            ))}
                          </ul>
                        }
                      </li>
                    ))}
                  </ul>
                ) : category.attributes.articles?.data.length > 0 && activeItems[`1-${index}`] ? (
                  <ul className="left-menu-level1">
                    {category.attributes.articles?.data.sort((a, b) => a.attributes.title.localeCompare(b.attributes.title)).map((item, index) => (
                      <li className="left-menu-level1-item" key={index}>
                        <InternalLink className="left-menu-level1-link" href={item.attributes.url} label={item.attributes.title} />
                      </li>
                    ))}
                  </ul>
                ) : null
                }
              </li>
            )
          })}
        </ul>
      </Scrollbar>
    </StyledCategoriesLeftMenu>
  )
}

export default CategoriesLeftMenu;
