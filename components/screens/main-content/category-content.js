import StyledMainContent from "./styled-main-content";
import topSlugIdData from "./data/top-slugid.json";
import CategoriesLeftMenu from "@components/screens/common/categories-left-menu";
import SearchArea from "@components/screens/common/search-area";
import InternalLink from "@components/common/internal-link";
import Heading from "@components/common/heading";
import Masonry from "react-masonry-css";
import CategoryGuidesCell from "./sub-components/guides-cell/category-guides-cell";

const Level1CategoryContent = ({ t, categoryName, categoryImg, categories, categorySlug, leftMenuMobile, setLeftMenuMobile, leftMenuCategories }) => {
  const topData = categories.data.filter(item => topSlugIdData.includes(item.attributes.slug_id));

  return (
    <>
      <CategoriesLeftMenu
        leftMenuMobile={leftMenuMobile}
        categories={leftMenuCategories}
        setLeftMenuMobile={setLeftMenuMobile}
      />
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
              {topData?.map((item, index) => (
                <InternalLink className="guides-cards-top-link" href={item.attributes.url} key={index}>
                  <img src={item.attributes.card_field_img?.data.url} alt={item.attributes.name} />
                  <div>{item.attributes.name}</div>
                </InternalLink>
              ))}
            </div>
          }
          <Masonry
            breakpointCols={{ default: 2, 592: 1 }}
            className="guides-cards-items"
            columnClassName="guides-cards-items-column">
            {categories.data.filter(item => !topSlugIdData.includes(item.attributes.slug_id))?.sort((a, b) => a.attributes.position - b.attributes.position).map((item, index) => (
              <CategoryGuidesCell
                data={item}
                categorySlug={categorySlug}
                key={index}
              />
            ))}
          </Masonry>
        </div>
      </StyledMainContent>
    </>
  );
};

export default Level1CategoryContent;