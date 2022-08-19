import React, { useState } from "react";
import InternalLink from "../../../../../../components/internal-link";
import StyledFloatSubMenu from "./styled-float-submenu";

const FloatSubMenu = ({ t, content, className, ...rest }) => {
  return (
    <StyledFloatSubMenu>
      {content.map((y) => {
        return (
          <li>
            <InternalLink className="float_link" href={"#gcID" + y.toUpperCase()}>
              {y.toUpperCase()}
            </InternalLink>
          </li>
        );
      })}
    </StyledFloatSubMenu>
  );
};
export default FloatSubMenu;
