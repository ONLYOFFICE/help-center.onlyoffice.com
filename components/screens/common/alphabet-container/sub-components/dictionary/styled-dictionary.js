import styled from "styled-components";
import StyledText from "@components/common/text/styled-text";
import globalColors from "@components/utils/global-colors";

const StyledDictionary = styled(StyledText)`
  display: block;
  padding: 10px 0;

  > p {
    display: initial;

    > a {
      border-bottom: 1px dotted ${globalColors.orangeLetters};
      color: ${globalColors.orangeLetters};
      display: inline;
      font-size: 14px;
      margin: 0;
      padding: 0 2px;
      text-decoration: none;

      &:hover {
        text-decoration: none!important;
      }
    }

    > strong {
      color: #808080;
      font-weight: 700;
    }
  }

  .int_link {
    color: ${globalColors.orangeLetters};
    cursor: pointer;
    text-decoration: none;
  }
`;

export default StyledDictionary;
