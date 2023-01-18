import styled from "styled-components";

const StyledVideoItem = styled.div`
  background: #ffffff;
  box-shadow: 0px 7px 25px rgba(85, 85, 85, 0.15);
  border-radius: 2px;
  cursor: pointer;
  padding: 32px;
  height: 353px;
  width: 344px;

  .external-link {
    color: #333333;
    text-decoration: none;
  }

  h5 {
    cursor: unset;
    padding: 16px 0;
  }

  .video-cover {
    height: 192px;
    width: 344px;
  }

   span {
    cursor: unset;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
`;

export default StyledVideoItem;
