import Heading from "@components/common/heading";
import Text from "@components/common/text";
import React, { useState } from "react";
import ReactHtmlParser from "react-html-parser";
import StyledContent from "@components/screens/single-page-content/content/styled-content";
import Breadcrumbs from "@components/common/breadcrumbs";
import CategoryItem from "../sub-components/category-docs-item";
import StyledSingleContent from "../../styled-single-content";
import LeftMenu from "@components/screens/single-page-content/sub-components/left-menu";
import checkCategoryMatch from "@utils/helpers/Common/checkCategory";

const CenterCategoryContent = ({
    t,
    articles,
    categories,
    category,
    children,
    currentLanguage,
    isCategory,
    mainCategory
}) => {
    const article = null;

    // left menu highlight
    const [activeItem, setActiveItem] = useState(null);
    const handleActiveItemChange = (item) => {
        setActiveItem(item);
    };
    const menuProps = {
        article,
        articles,
        categories,
        isCategory,
        category,
        handleActiveItemChange,
        currentLanguage,
        children,
        t,
        activeItem,
    };

    const handleClick = (event) => {
        const clickedTarget = event.target;
        if (clickedTarget.tagName === 'P' && clickedTarget.classList.contains('changelog-main-header')) {
            const switcher = clickedTarget.parentElement.querySelector('.changelog-switcher');
            const switcherDisplay = getComputedStyle(switcher).getPropertyValue('display');
            const pseudoElement = clickedTarget.querySelector('::before');    
            
            if (switcherDisplay === 'none') {
                switcher.style.display = 'block'; 
                pseudoElement?.setAttribute('content', '-'); 
            } else {
                switcher.style.display = 'none';
                pseudoElement?.setAttribute('content', '+'); 
            }
        }
    };

    return (
        <StyledSingleContent>
            <LeftMenu {...menuProps} />
            <StyledContent className="wrapper">
                <Breadcrumbs t={t} category={category} categories={categories} mainCategory={mainCategory} />
                <Heading level={3}>{category?.name}</Heading>
                {category?.description && <Text onClick={handleClick} style={{display: `${checkCategoryMatch(category?.slug_id) ? `block` : "inline-block"}`}}>{ReactHtmlParser(category?.description)}</Text>}
                {articles?.map((it, index) => {
                    return (
                        <React.Fragment key={index}>
                            <CategoryItem data={it} t={t} currentLanguage={currentLanguage} />
                        </React.Fragment>
                    );
                })}
                {children}
            </StyledContent>
        </StyledSingleContent>

    );
};

export default CenterCategoryContent;
