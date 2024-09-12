import styled from "styled-components";
import Section from "@components/common/section";
import globalColors from "@components/utils/global-colors";

const StyledFaqContent = styled(Section)`
  .switcher {
    color: ${globalColors.orangeMain};
    cursor: pointer;
    padding: 24px 0;
    text-decoration: underline;
  }
`;

export default StyledFaqContent;
