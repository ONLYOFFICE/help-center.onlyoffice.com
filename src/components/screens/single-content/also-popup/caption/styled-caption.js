import styled from "styled-components";
import video_icn from "@static/images/icons/video-guides.png";
import start_icn from "@static/images/icons/start.png";
import idea_icn from "@static/images/icons/idea.png";
import docs_icn from "@static/images/icons/doc.png";
import guides_icn from "@static/images/icons/guides.png";
import editors_icn from "@static/images/icons/editors.png";
import faq_icn from "@static/images/icons/faq.png";

const StyledCaption = styled.div`
  background-repeat: no-repeat;
  background-position: 2px 7px;
  margin-bottom: 10px;
  min-height: 32px;
  padding: 0 0 0 45px;
  background-image: url(${(props) =>
    props.type === "video"
      ? video_icn
      : props.type === "tips"
      ? idea_icn
      : props.type === "pdf"
      ? docs_icn
      : props.type === "gs"
      ? start_icn
      : props.type === "guides"
      ? guides_icn
      : props.type === "editors"
      ? editors_icn
      : props.type === "faq"
      ? faq_icn
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
