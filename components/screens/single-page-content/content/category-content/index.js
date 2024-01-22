import Heading from "@components/common/heading";
import Text from "@components/common/text";
import React, { useState } from "react";
import ReactHtmlParser from "react-html-parser";
import StyledContent from "@components/screens/single-page-content/content/styled-content";
import Breadcrumbs from "@components/common/breadcrumbs";
import CategoryItem from "../sub-components/category-item";
import filterDocsAricles from "@utils/helpers/filterForDocsCategory";
import StyledSingleContent from "../../../single-page-content/styled-single-content";
import LeftMenu from "@components/screens/single-page-content/sub-components/left-menu";

// currently unused

const CenterCategoryContent = ({
    t,
    articles,
    categories,
    category,
    children,
    currentLanguage,
    isCategory
}) => {
    const catData = category?.attributes;
    const data = filterDocsAricles(articles, catData.slug_id);
   // console.log(data);

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
    return (
        <StyledSingleContent>
            <LeftMenu {...menuProps} />
            <StyledContent className="wrapper">
                <Breadcrumbs t={t} category={catData} isCategory={true} />
                <Heading level={3}>{catData?.name}</Heading>
                <Text>{ReactHtmlParser(catData?.description)}</Text>
                {data?.map((it, index) => {
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
