import styled from "styled-components";
import VideoPlay from "../../../static/images/icons/video.png"

const StyledSlide = styled.div`
  .video-image{
    background-image: url(${(props) => props.imgUrlCard});
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: auto 100%;
    box-shadow: inset 0px 0px 138px 50px rgb(0 0 0 / 45%);
    height: 138px;
    width: 246px;
    z-index: 100;
    position: relative;

    &:before{
      content: '';
      background-image: url(${VideoPlay});
      background-position: 0 0;
      background-repeat: no-repeat;
      display: block;
      height: 88px;
      width: 88px;
      margin: 0;
      padding: 0;
      position: absolute;
      left: calc(50% - 44px);
      top: calc(50% - 44px);
      z-index: 50;
    }

  }

  .title-template{
    height: 60px;
    padding: 5px;
    color: #333;
    text-decoration: none;
    text-align: center;
    line-height: 1;
  }
`;

export default StyledSlide;
