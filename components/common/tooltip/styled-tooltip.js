import styled, { css } from "styled-components";
import globalColors from "@components/utils/global-colors";

const StyledTooltip = styled.div`
.tooltip {
    background-color: ${globalColors.white};
    box-shadow: 0 7px 25px rgba(85, 85, 85, 0.15);
    line-height: 1.3em;
    opacity: 1;
    padding: 15px;
    width: max-content;
    z-index: 999; 
    > span {
        color: ${globalColors.gray};
        > b, > span {
            &.ttp_norm {
            color: ${globalColors.grayMain};
            }
            &.ttp_great {
                color: ${globalColors.green};
            }
            &.ttp_bad {
                color: ${globalColors.orangeLetters};
            }
        }
    }
}
`

export default StyledTooltip;