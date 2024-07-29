import StyledFaqContent from "./styled-faq-content";
import StyledWrapperContent from "@components/screens/common/wrapper-content/styled-wrapper-content";
import LeftMenu from "@components/screens/common/left-menu";
import Heading from "@components/common/heading";
import { AccordionItem } from "@components/common/accordion";
import ReactHtmlParser from "react-html-parser";

const FaqContent = ({ t, faqData, leftMenuMobile }) => {
  const { name, faq_block } = faqData.data[0].attributes;

  return (
    <StyledFaqContent>
      <StyledWrapperContent>
        <LeftMenu
          t={t}
          backBtnName={t("Home")}
          backBtnUrl="/"
          leftMenuMobile={leftMenuMobile}
        />

        <div className="wrapper">
          <Heading level={3} label={name} />

          {faq_block.map((item, index) => (
            <div className="faq-block" key={index}>
              {faq_block.name &&
                <Heading className="faq-title" level={4} label={faq_block.name} />
              }

              <div className="faq-items">
                {item.faq_item.map((item, index) => (
                  <AccordionItem heading={item.question} key={index}>
                    {ReactHtmlParser(item.answer)}
                  </AccordionItem>
                ))}
              </div>
            </div>
          ))}
        </div>
      </StyledWrapperContent>
    </StyledFaqContent>
  );
};

export default FaqContent;
