import { useState } from "react";
import StyledCategoryContent from "./styled-category-content";
import LeftMenu from "@components/screens/common/left-menu";
import StyledWrapperContent from "@components/screens/common/wrapper-content/styled-wrapper-content";
import Breadcrumbs from "@components/screens/common/breadcrumbs";
import Heading from "@components/common/heading";
import Text from "@components/common/text";
import ReactHtmlParser from "react-html-parser";
import CategoryItem from "./sub-components/category-item";
import UpArrow from "@components/common/up-arrow";

const CategoryContent = ({
  t,
  categoryName,
  categoryUrl,
  level2CategoryName,
  level2CategoryUrl,
  pageName,
  pageDescription,
  pageItems,
  pageItemsLevel,
  categorySlug,
  leftMenuMobile,
  backBtnName,
  backBtnUrl
}) => {
  const [showButton, setShowButton] = useState(false);
  const refContentWrapper = useRef();
  
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrolledHeight = window.scrollY - containerRef.current.offsetTop;
        const scrolledPercentage = (scrolledHeight / containerRef.current.offsetHeight) * 100;
        setShowButton(scrolledPercentage > 70);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <StyledCategoryContent>
      <StyledWrapperContent>
        <LeftMenu
          t={t}
          pageName={pageName}
          pageItems={pageItems}
          pageItemsLevel={pageItemsLevel}
          categorySlug={categorySlug}
          leftMenuMobile={leftMenuMobile}
          backBtnName={backBtnName}
          backBtnUrl={backBtnUrl}
        />
        <div ref={refContentWrapper} className="wrapper">
          <Breadcrumbs
            t={t}
            categoryName={categoryName}
            categoryUrl={categoryUrl}
            level2CategoryName={level2CategoryName}
            level2CategoryUrl={level2CategoryUrl}
            pageName={pageName}
          />
          <Heading className="wrapper-title" level={3} label={pageName} />
          {pageDescription &&
            <Text>{ReactHtmlParser(pageDescription)}</Text>
          }
          {pageItems?.map((item, index) => (
            <CategoryItem
              data={item}
              pageItemsLevel={pageItemsLevel}
              categorySlug={categorySlug}
              key={index}
            />
          ))}
        </div>
        <UpArrow showButton={showButton} />
      </StyledWrapperContent>
    </StyledCategoryContent>
  );
};

export default CategoryContent;