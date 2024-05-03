import styled from "styled-components";

const StyledBreadcrumb = styled.div`
  font-size: 13px;
  padding: 0 0 24px;
  flex-wrap: wrap;

  a.breadcrumb-links {
    align-items: center;
    display: inline-flex;
    position: relative;
    color: #666666;
    text-decoration: none;
    cursor: pointer;
    padding: 0 10px 0 0;
    line-height: 133%;
    gap: 10px;
    margin-bottom: 0 !important;
    :after {
      content: "";
      position: relative;
      right: 0px;
      top: 0px;
      width: 10px;
      height: 10px;
      background-image: url('https://static-helpcenter.onlyoffice.com/images/icons/crumb.react.svg');
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
  .breadcrumb-links.last{
    color: #ff6f3d;
    line-height: 133%;
    display: inline-flex;
    :after {
      display: none;
    }
  }
`;

export default StyledBreadcrumb;