import styled from "styled-components";
import { device } from "@components/utils/devices";

const StyledSearchResult = styled.div`
  background: #FFFFFF; 
  min-height: calc(100vh - 393px);

  p {
    margin: auto;
    margin-top: 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 50px;
    white-space: nowrap;
  }
    
  .query {
    background: #FFED90;
  }

  .found {
    text-align: center;
    padding: 40px 0 26px;
    color: #808080;
  }

  div {
    max-width: 688px;
    margin: auto;
    padding: 24px;

    h1 {
      text-align: center;
      line-height: 1.3em;
      font-size: 24px;
    }

    a {
      color: #FF6F3D;
    }

    &:last-child {
      padding-bottom: 112px;
    }
  }
`;
export default StyledSearchResult;
