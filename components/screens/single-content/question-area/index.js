import React from "react";
import Heading from "@components/common/heading";
import Text from "@components/common/text";
import ExternalLink from "@components/common/link";
import StyledQuestionArea from "./styled-question-area";

const QuestionArea = ({ t, ...rest }) => {
  return (
    <StyledQuestionArea  {...rest}>
      <div className="question-wrapper">
        <Heading level={3} className="question-title" label={t("Still have questions?")} />
        <Text className="question-text" label={t("You can ask us on our forum")} />
        <ExternalLink className="question-link" label={t("forum.onlyoffice.com")} />
      </div>
      <div className="question-img"></div>
    </StyledQuestionArea>
  );
};

export default QuestionArea;
