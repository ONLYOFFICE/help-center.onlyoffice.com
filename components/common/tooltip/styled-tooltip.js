import styled, { css } from "styled-components";

const StyledTooltip = styled.div`
.tooltip {
    background-color: #ffffff;
    box-shadow: 0 7px 25px rgba(85, 85, 85, 0.15);
    line-height: 1.3em;
    opacity: 1;
    padding: 15px;
    width: max-content;
    z-index: 999; 
    > span {
        color: #333333;
        > b, > span {
            &.ttp_norm {
            color: #444;
            }
            &.ttp_great {
                color: #3db80f;
            }
            &.ttp_bad {
                color: #ff642e;
            }
        }
    }
}
`

export default StyledTooltip;