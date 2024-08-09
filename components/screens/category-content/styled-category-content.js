import styled from "styled-components";
import Section from "@components/common/section";

const StyledCategoryContent = styled(Section)`
  .section-page {
    display: flex;
  }

  .wrapper-description {
    a {
      color: #ff6f3d;

      &:hover {
        text-decoration: none;
      }
    }
  }
`;

export default StyledCategoryContent;
