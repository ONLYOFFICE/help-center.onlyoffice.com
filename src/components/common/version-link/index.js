import React from "react";
import StyledVersionLink from "./styled-version-link";

const VersionLink = ({ as, href, product, version, outdated }) => {
  return (
    <StyledVersionLink as={as} href={href}>
      <span className="product">{product}</span>
      <span className={`version ${outdated ? "outdated" : ""}`}>{`v${version}`}</span>
    </StyledVersionLink>
  );
};

export default VersionLink;
