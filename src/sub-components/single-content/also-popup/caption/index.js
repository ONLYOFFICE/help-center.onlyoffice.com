import React, { useState } from "react";
import PropTypes from "prop-types";
import { StyledCaption } from "./styled-caption";
import InternalLink from "../../../../../components/internal-link";
import ExternalLink from "../../../../../components/link";

const Caption = ({ t, language, id, content, type, ...rest }) => {
  return (
    <StyledCaption id={id} type={type} className={content.length === 1 && "one"} {...rest}>
        {content.map((it, index) => {
          if (it.isExternal) {
            return (
              <ExternalLink className="see_also_link" key={index} label={t(it.title)} href={it.href} />
            )
          } else {
            return (
              <InternalLink className="see_also_link" key={index} label={t(it.title)} href={it.href} />
            )
          }
          })}
    </StyledCaption>
  );
};

export default Caption;