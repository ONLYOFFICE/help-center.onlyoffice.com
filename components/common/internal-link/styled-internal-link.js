import styled from "styled-components";
import Link from "next/link";

const StyledInternalLink = styled(Link)`
  color: inherit;
  text-decoration: none;

  &:visited, 
  &:-webkit-any-link {
    color: inherit;
  }
`;

export default StyledInternalLink;
