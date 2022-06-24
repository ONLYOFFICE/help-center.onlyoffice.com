import styled from "styled-components";

const StyledHeadingContent = styled.div`
  background: ${(props) => (props.template ? `#f5f5f5` : `#333`)};
`;

export default StyledHeadingContent;
