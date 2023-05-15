import styled from "styled-components";

const StyledHeadingContent = styled.div`
  background: ${(props) => (props.template ? `#333` : `#f5f5f5`)};
`;

export default StyledHeadingContent;
