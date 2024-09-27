import styled from "styled-components";
import Section from "@components/common/section";
import globalColors from "@components/utils/global-colors";

const StyledCategoryContent = styled(Section)`
  .section-page {
    display: flex;
  }

  .wrapper-description {
    a {
      color: ${globalColors.orangeMain};

      &:hover {
        text-decoration: none;
      }
    }
  }

  .category-items {
    margin: 24px 0 0 0;

    .category-item {
      &:not(:last-child) {
        margin-bottom: 24px;
      }
    }
  }
`;

export default StyledCategoryContent;
