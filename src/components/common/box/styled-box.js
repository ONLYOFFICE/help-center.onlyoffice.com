import styled from "styled-components";
import { Base } from "@components/themes";

const StyledBox = styled.div`
  display: flex;
  background: ${(props) => props.background || props.theme.box.background};
  border: ${(props) => props.border || props.theme.box.border};
  justify-content: ${(props) =>
    props.justifyContent || props.theme.box.justifyContent};
  align-items: ${(props) => props.alignItems || props.theme.box.alignItems};
  flex-wrap: ${(props) => props.flexWrap || props.theme.box.flexWrap};
  flex-direction: ${(props) =>
    props.flexDirection || props.theme.box.flexDirection};
  align-content: ${(props) =>
    props.alignContent || props.theme.box.alignContent};
`;

StyledBox.defaultProps = { theme: Base };

export default StyledBox;