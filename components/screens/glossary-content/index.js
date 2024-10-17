import StyledGlossaryContent from "./styled-glossary-content";
import LeftMenu from "@components/screens/common/left-menu";
import StyledWrapperContent from "@components/screens/common/wrapper-content/styled-wrapper-content";
import AlphabetContainer from "@components/screens/common/alphabet-container";
import Text from "@components/common/text";
import Breadcrumbs from "@components/screens/common/breadcrumbs";
import Heading from "@components/common/heading";

const GlossaryContent = ({ t, glossaryData, leftMenuData, leftMenuIsOpen }) => {
  return (
    <StyledGlossaryContent>
      <StyledWrapperContent>
        <LeftMenu
          t={t}
          pageName={t("Glossary")}
          leftMenuData={leftMenuData}
          leftMenuIsOpen={leftMenuIsOpen}
        />
        <div className="wrapper">
          <Breadcrumbs t={t} pageName={t("Glossary")} />
          <Heading className="wrapper-title" level={1}>{t("Glossary")}</Heading>
          <Text label={t("HereAreTheBaseTerms")} />
          <AlphabetContainer t={t} data={glossaryData} />
        </div>
      </StyledWrapperContent>
    </StyledGlossaryContent>
  );
};


export default GlossaryContent;
