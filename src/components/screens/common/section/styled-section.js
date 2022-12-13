import styled from "styled-components";

const StyledSection = styled.section`
  height: 100%;
  display: ${(props) => props.display || "block"};
  position: ${(props) => props.position || "relative"};
  width: ${(props) => props.width || "100%"};
  margin: ${(props) => props.margin || "0px"};
  padding: ${(props) => props.padding || "10px 0"};
  background: ${(props) => props.background || "transparent"};

  .section-page {
    max-width: 1120px;
    margin: 0px auto;
  }

  @media (max-width: 1200px) {
    margin: ${(props) => props.margin || "0px"};
    padding: ${(props) => props.padding || "0px"};

    .section-page {
      max-width: ${(props) => props.maxWidth || "928px"};
    }
  }

  @media (max-width: 1024px) {
    margin: ${(props) => props.tabletMargin || "0px"};
    padding: ${(props) => props.tabletPadding || "25px 0px"};

    .section-page {
      max-width: none;
      width: ${(props) => props.maxWidthLaptop || "90vw"};
    }
  }

  @media (max-width: 576px) {
    margin: ${(props) => props.mobileLMargin || "0px"};
    padding: ${(props) => props.mobileLPadding || "50px 0px"};

    .section-page {
      max-width: none;
      width: ${(props) => props.maxWidthMobile || "90vw"};
    }
  }
`;

export default StyledSection;
