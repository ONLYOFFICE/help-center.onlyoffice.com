import styled from "styled-components";
import globalColors from "@components/utils/global-colors";

const StyledFloatSubMenu = styled.ul`
    list-style-type: none;
    margin: 0;
    left: 10px;
    padding: 0;
    position: fixed;
    top: 143px;
    width: 264px;
    li {
        padding: 0;
        margin-left: 10px;

        .float_link {
            color: ${globalColors.grayTextInput};
            cursor: pointer;
            display: block;
            font-size: 13px;
            line-height: unset;
            margin: 2px 0;
            padding: 6px 0;
            position: relative;
            text-decoration: none;

            &:hover {
                color: ${globalColors.orangeMain};
            }
        }
    }
`;


export default StyledFloatSubMenu;