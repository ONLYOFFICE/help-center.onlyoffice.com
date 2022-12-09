import styled from "styled-components";

const StyledVersionLink = styled.a`
  display: inline-block;
  border: none 0;
  font-size: 12px;
  line-height: 18px;
  margin: 5px 0;

  .product {
    display: inline-block;
    color: #fff;
    background-color: #444;
    padding: 1px 5px 1px 10px;
    line-height: 18px;
    margin: 0;
    text-align: right;
  }

  .version {
    display: inline-block;
    color: #fff;
    line-height: 18px;
    padding: 1px 10px 1px 5px;
    margin: 0;
    text-align: left;
    background-color: #3db80f;

    &.outdated {
      background-color: #ff642e;
    }
  }
`;

export default StyledVersionLink;