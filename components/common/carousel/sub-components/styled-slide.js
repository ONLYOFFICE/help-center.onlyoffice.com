import styled from "styled-components";

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
  }

  .title-template {
    box-sizing: border-box;
    height: 60px;
    padding: 5px;
    color: #333;
    text-decoration: none;
    text-align: center;
    line-height: 1;
  }
`;

export default StyledSlide;
