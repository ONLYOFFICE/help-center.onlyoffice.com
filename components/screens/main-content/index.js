import StyledMainContent from "./styled-main-content";
import CategoriesLeftMenu from "@components/screens/common/categories-left-menu";
import SearchContent from "./sub-components/search";
import Category from "./sub-components/category";
import GuidesCell from "./sub-components/guides-cell";
import InternalLink from "@components/common/internal-link";
import Masonry from "react-masonry-css";

const MainContent = ({ t, categories, category, categorySlug, isCategoryPage, isIntegrationCategory, leftMenuMobile, setLeftMenuMobile, leftMenuCategories }) => {
  const categorySlugs = ["changelog", "roadmap", "troubleshooting"];
  const topData = categories.data?.filter(item => categorySlugs.includes(item.attributes.slug_id)) || [];
  const mappedCategories = categories.data?.filter(item => !categorySlugs.includes(item.attributes.slug_id)) || [];
  const breakpointColumnsObj = {
    default: 2,
    592: 1
  };

  return (
    <>
      <CategoriesLeftMenu
        leftMenuMobile={leftMenuMobile}
        categories={leftMenuCategories}
        setLeftMenuMobile={setLeftMenuMobile}
      />
      <StyledMainContent>
        <div className="info-content">
          <SearchContent t={t} isCategoryPage={isCategoryPage} category={category} />
          {!isCategoryPage &&
            <Category t={t} categories={categories} />
          }
        </div>

        <div className={`guides-cards ${isCategoryPage ? "bg-gray" : ""}`}>
          {topData.length != 0 &&
            <div className="guides-cards-top">
              {topData?.map((item, index) => (
                <div className="guides-cards-top-link" key={index}>
                  <img src={item.attributes.card_field_img?.data.url} alt={item.attributes.name} />
                  <InternalLink href={item.attributes.url} label={item.attributes.name} />
                </div>
              ))}
            </div>
          }
          <div className="guides-cards-items">
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="guides-cards-items"
              columnClassName="guides-cards-items-column">
              {mappedCategories?.sort((a, b) => a.attributes.position - b.attributes.position).map((item, index) => (
                <GuidesCell
                  data={item}
                  isCategoryPage={isCategoryPage}
                  categorySlug={categorySlug}
                  isIntegrationCategory={isIntegrationCategory}
                  key={index}
                />
              ))}
            </Masonry>
          </div>
        </div>
      </StyledMainContent>
    </>
  );
};

export default MainContent;