import Heading from "@components/common/heading";
import Text from "@components/common/text";
import React, { useState } from "react";
import ReactHtmlParser from "react-html-parser";
import StyledContent from "@components/screens/single-page-content/content/styled-content";
import Breadcrumbs from "@components/common/breadcrumbs";
import CategoryItem from "../sub-components/category-item";
import StyledSingleContent from "../../styled-single-content";
import LeftMenu from "@components/screens/single-page-content/sub-components/left-menu";
import checkCategoryMatch from "@utils/helpers/Common/checkCategory";
import Link from "next/link";

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

    const overviewItem = articles?.find(item => item.name.includes(t('Overview')));
    const items = [];

    if (overviewItem && !overviewItem.level_5) {
        items.push(overviewItem);
    }

    const filteredArray = items ? articles?.filter(item => !items?.includes(item)) : articles;

    return (
        <StyledSingleContent>
            <LeftMenu {...menuProps} />
            <StyledContent className="wrapper">
                <Breadcrumbs t={t} category={category} categories={categories} mainCategory={mainCategory} />
                <Heading level={3}>{category?.name}</Heading>
                {(overviewItem && !overviewItem.level_5) &&
                    (<div className="top-links">
                        {overviewItem && <Link id={overviewItem.name.toLowerCase().replace(/ /g, "_")} className="reqs" href={overviewItem?.url}><img src={`https://static-helpcenter.onlyoffice.com/images/icons/16px_overview.react.svg`} alt={"Overview"} />{overviewItem.name}</Link>}
                    </div>)}
                {category?.description && <Text onClick={handleClick} style={{ display: `${checkCategoryMatch(category?.slug_id) ? `block` : "inline-block"}` }}>{ReactHtmlParser(category?.description)}</Text>}
                {filteredArray?.map((it, index) => {
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