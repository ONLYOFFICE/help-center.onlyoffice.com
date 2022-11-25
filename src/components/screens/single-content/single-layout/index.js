import React from "react";
import StyledSingleLayout from "./styled-single-layout";

const SingleLayout = (props) => {
  return (
    <StyledSingleLayout {...props}>
      {props.children}
    </StyledSingleLayout>
  );
};

export default SingleLayout;
