import StyledMainContent from "./styled-main-content";
import CategoriesLeftMenu from "@components/screens/common/categories-left-menu";
import SearchContent from "./sub-components/search";
import Category from "./sub-components/category";
import GuidesCell from "./sub-components/guides-cell";
import Masonry from "react-masonry-css";

const MainContent = ({ t, categories, leftMenuMobile, setLeftMenuMobile, leftMenuCategories, isIntegrationCategory }) => {
  return (
    <>
      <CategoriesLeftMenu
        leftMenuMobile={leftMenuMobile}
        categories={leftMenuCategories}
        setLeftMenuMobile={setLeftMenuMobile}
      />
      <StyledMainContent>
        <div className="info-content">
          <SearchContent t={t} />
          <Category t={t} categories={categories} />
        </div>

        <div className="guides-cards">
          <div className="guides-cards-items">
            <Masonry
              breakpointCols={{ default: 2, 592: 1 }}
              className="guides-cards-items"
              columnClassName="guides-cards-items-column">
              {categories.data?.sort((a, b) => a.attributes.position - b.attributes.position).map((item, index) => (
                <GuidesCell
                  data={item}
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