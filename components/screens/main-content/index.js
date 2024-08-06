import StyledMainContent from "./styled-main-content";
import CategoriesLeftMenu from "@components/screens/common/categories-left-menu";
import SearchArea from "@components/screens/common/search-area";
import Category from "./sub-components/category";
import GuidesCell from "./sub-components/guides-cell";
import Masonry from "react-masonry-css";
import Heading from "@components/common/heading";

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
          <div className="info-content-header">
            <Heading className="info-content-title" level={1} label={t("WelcomeToHelpCenter")} />
          </div>
          <SearchArea className="info-content-search" placeholder={t("HowCanWeHelp?")} />
          <Category t={t} categories={categories} />
        </div>

        <div className="guides-cards">
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
      </StyledMainContent>
    </>
  );
};

export default MainContent;