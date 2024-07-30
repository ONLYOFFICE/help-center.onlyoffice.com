import StyledGlossaryContent from "./styled-glossary-content";
import LeftMenu from "@components/screens/common/left-menu";
import StyledWrapperContent from "@components/screens/common/wrapper-content/styled-wrapper-content";
import AlphabetContainer from "../common/alphabet-container";
import Text from "@components/common/text";
import Breadcrumbs from "../common/breadcrumbs";
import Heading from "@components/common/heading";

const GlossaryContent = ({ t, glossaryData }) => {
  return (
    <StyledGlossaryContent>
      <StyledWrapperContent>
        <LeftMenu
          t={t}
          pageName={t("Glossary")}
        />
        <div className="wrapper">
          <Breadcrumbs
            t={t}
            pageName={t("Glossary")}
          />
          <Heading level={3}>{t("Glossary")}</Heading>
          <Text label={t("Here are the base terms which are used in the online office interface and documentation.")} />
          <AlphabetContainer t={t} data={glossaryData} />
        </div>
      </StyledWrapperContent>
    </StyledGlossaryContent>
  );
};


export default GlossaryContent;
