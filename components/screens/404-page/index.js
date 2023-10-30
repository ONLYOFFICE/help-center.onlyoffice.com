import React from "react";

import Styled404 from "./styled";

import Text from "@components/common/text";
import Button from "@components/common/button";
import InternalLink from "@components/common/internal-link";

const Error404 = ({ t, ...rest }) => {
  return (
    <Styled404 {...rest}>
      <img
        src="/images/icons/bg-errors.react.svg"
        className="page-error-404-image"
        alt="page-error-404"
      />
      <div className="page-error-404-container">
        <Text className="page-error-404-heading" label={t("404Error")} />
        <Text
          className="page-error-404-description"
          label={t("404Description")}
        />
        <InternalLink className="page-error-404-btn" href="/">
          <Button label={t("GoToHomePage")} />
        </InternalLink>
      </div>
    </Styled404>
  );
};

export default Error404;
