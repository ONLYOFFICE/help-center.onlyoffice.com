import styled, { css } from "styled-components";
import video_icn from "../../../../../static/images/icons/video-guides.png";
import start_icn from "../../../../../static/images/icons/start.png";
import idea_icn from "../../../../../static/images/icons/idea.png";
import docs_icn from "../../../../../static/images/icons/doc.png";

const StyledCaption = styled.div`
background-repeat: no-repeat;
background-position: 2px 7px;
margin-bottom: 10px;
min-height: 32px;
padding: 0 0 0 45px;
background-image: url(${(props) => props.type === "video"
        ? video_icn
        : props.type === "tips"
            ? idea_icn
            : props.type === "pdf"
                ? docs_icn
                : props.type === "hz"
                    ? start_icn
                    : "unset"});

    .see_also_link {
        clear: left;
        cursor: pointer;
        display: block;
        font-size: 13px;
        line-height: 1.3em;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }

    &.one {
        margin: 0;
        min-height: 30px;
        padding: 10px 0 0 45px;
    }
`;

export { StyledCaption };
