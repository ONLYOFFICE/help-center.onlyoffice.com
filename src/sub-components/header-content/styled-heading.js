import styled from "styled-components";

const StyledHeadingContent = styled.div`
  background: ${(props) => (props.template ? `transparent` : `#333`)};
`;

export default StyledHeadingContent;
