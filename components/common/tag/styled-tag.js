import styled from "styled-components";
import globalColors from "@components/utils/global-colors";

const StyledTag = styled.button`
  border: none;
  border-radius: 2px;
  padding: 4px 8px;
  font-size: 12px;
  line-height: 19px;
  color: ${globalColors.gray};
  background-color: ${globalColors.tagColor};
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${globalColors.tagHover};
    text-decoration: none;
  }
`;

export default StyledTag;
