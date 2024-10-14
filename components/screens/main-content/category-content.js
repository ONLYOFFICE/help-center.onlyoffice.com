import StyledMainContent from "./styled-main-content";
import { useState, useEffect } from "react";
import getLeftMenu from "@lib/strapi/getLeftMenu";
import topSlugIdData from "./data/top-slugid.json";
import LeftMenu from "@components/screens/common/left-menu";
import SearchArea from "@components/screens/common/search-area";
import InternalLink from "@components/common/internal-link";
import Heading from "@components/common/heading";
import Masonry from "react-masonry-css";
import CategoryGuidesCell from "./sub-components/guides-cell/category-guides-cell";

const Level1CategoryContent = ({ t, locale, categoriesMenuData, categoryName, categoryImg, data, categorySlug, leftMenuIsOpen, setLeftMenuIsOpen }) => {
  const [leftMenuData, setLeftMenuData] = useState(categoriesMenuData);
  const [showLeftMenu, setShowLeftMenu] = useState(false);
  const topData = data.data.filter(item => topSlugIdData.includes(item.attributes.slug_id));

  useEffect(() => {
    const loadData = async () => {
      const data = await getLeftMenu(locale);
      setLeftMenuData(data);
    };

    loadData();

    const handleResize = () => {
      setShowLeftMenu(window.innerWidth <= 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [locale]);

  return (
    <>
      {showLeftMenu && (
        <LeftMenu
          t={t}
          leftMenuData={leftMenuData}
          leftMenuIsOpen={leftMenuIsOpen}
          setLeftMenuIsOpen={setLeftMenuIsOpen}
        />
      )}
      <StyledMainContent>
        <div className="info-content category-content">
          <div className="info-content-header">
            <img className="info-content-icon" src={categoryImg} alt={categoryName} />
            <Heading className="info-content-title" level={1} label={categoryName} />
          </div>
          <SearchArea placeholder={t("HowCanWeHelp?")} />
        </div>

        <div className="guides-cards bg-gray">
          {topData.length > 0 &&
            <div className="guides-cards-top">
              {topData
              ?.sort((a, b) => (a.attributes.position ?? Infinity) - (b.attributes.position ?? Infinity) || (a.attributes.name || a.attributes.title).localeCompare(b.attributes.name || b.attributes.title))
              ?.map((item, index) => (
                <InternalLink className="guides-cards-top-link" href={item.attributes.url} key={index}>
                  <img src={item.attributes.card_field_img?.data?.attributes.url} alt={item.attributes.name} />
                  <div>{item.attributes.name}</div>
                </InternalLink>
              ))}
            </div>
          }
          <Masonry
            breakpointCols={{ default: 2, 592: 1 }}
            className="guides-cards-items"
            columnClassName="guides-cards-items-column">
            {data.data
              .filter(item => !topSlugIdData.includes(item.attributes.slug_id))
              .sort((a, b) => (a.attributes.position ?? Infinity) - (b.attributes.position ?? Infinity) || (a.attributes.name || a.attributes.title).localeCompare(b.attributes.name || b.attributes.title))
              .map((item, index) => (
                <CategoryGuidesCell
                  data={item}
                  categorySlug={categorySlug}
                  key={index}
                  t={t}
                />
              ))
            }
          </Masonry>
        </div>
      </StyledMainContent>
    </>
  );
};

export default Level1CategoryContent;