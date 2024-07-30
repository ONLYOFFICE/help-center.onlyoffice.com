import styled from "styled-components";
import StyledText from "@components/common/text/styled-text";
import globalColors from "@components/utils/global-colors";

const StyledDictionary = styled(StyledText)`
  display: block;
  padding: 10px 0;

  > p {
    display: initial;

    > a {
      color: ${globalColors.orangeLetters};
      display: inline;
      font-size: 14px;
      margin: 0;
      text-decoration: underline;
    }

    > strong {
      color: #808080;
      font-weight: 700;
    }
  }

  ol {
    padding: 0 0 0 20px;
  }

  .int_link {
    color: ${globalColors.orangeLetters};
    cursor: pointer;
    text-decoration: none;
  }
`;

export default StyledDictionary;
