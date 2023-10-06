import styled from "styled-components";
import { device } from "@components/utils/devices";

const RawHtmlStyle = styled.div`
  .raw-html-embed {
    p {
      margin: 0;

      &:not(:last-child) {
        margin: 0 0 8px;
      }
    }
    // tables
    table.table_versionlist {
      margin: 10px 0 20px;
      text-align: center;
      width: 100%;
  
      &.sticky_table {
          th {
            position: -webkit-sticky;
            position: sticky;
            top: 73px;
            border-bottom: 1px solid #d7d8dc;
            background: white;
            z-index: 100;          
          }
          td {            
              color: #333;
              font-size: 16px;
              font-weight: 600;
              padding: 8px;
              vertical-align: middle;
          }
          span {
              font-size: 16px;
              font-weight: 600;
          }
      }
  
      &.outdated_versions, &.new_versions, &.talk_pages {
          td {
              width: auto;
          }
      }
  
      &.talk_pages {
          &.languages_list_table {
              width: 100%;
  
              &.translators_list_table {
                  width: auto;
                  min-width: 55%;
  
                  th, td {
                      text-align: left;
                      width: auto;
                      padding-right: 40px;
                      padding-left: 20px;
                      white-space: pre-line;
  
                      .locale_lng {
                          display: block;
                          margin-top: 5px;
  
                          &:first-child {
                              margin-top: 0;
                          }
                      }
  
                      &:first-child {
                          width: auto;
                          vertical-align: top;
                      }
  
                      &:nth-child(2) {
                          width: auto;
                      }
                  }
              }
  
              &.newstr_list_table {
                  width: auto;
                  min-width: 55%;
  
                  th, td {
                      text-align: left;
                      width: auto;
                      padding-right: 40px;
                      padding-left: 20px;
  
                      &:first-child {
                          width: auto;
                      }
  
                      &:nth-child(2), &:nth-child(3) {
                          width: auto;
                      }
                  }
  
                  td {
                      white-space: pre-line;
                  }
              }
  
              th {
                  vertical-align: bottom;
  
                  &.header {
                      cursor: pointer;
                  }
  
                  span {
                      position: relative;
                  }
  
                  &.header span:after {
                      content: '';
                      position: absolute;
                      right: -17px;
                      top: 13px;
                      display: block;
                      height: 0;
                      width: 0;
                      border-style: solid;
                      border-width: 4px 4px 0 4px;
                      border-color: #666 transparent transparent transparent;
                  }
  
                  &.header span:before {
                      content: '';
                      position: absolute;
                      right: -17px;
                      top: 7px;
                      display: block;
                      width: 0;
                      height: 0;
                      border-style: solid;
                      border-width: 0 4px 4px 4px;
                      border-color: transparent transparent #666 transparent;
                  }
  
                  &.header.headerSortDown span:before {
                      display: none;
                  }
  
                  &.header.headerSortDown span:after {
                      top: 11px;
                  }
  
                  &.header.headerSortUp span:before {
                      top: 10px;
                  }
  
                  &.header.headerSortUp span:after {
                      display: none;
                  }
              }
  
              td:first-child, th:first-child {
                  text-align: left;
              }
  
              td:first-child {
                  width: 40%;
              }
  
              td:nth-child(2), td:nth-child(3), td:nth-child(4), td:nth-child(5), td:nth-child(6) {
                  width: 13%;
              }
  
              tr {
                  &:nth-child(even) {
                      background-color: #f5f5f5;
                  }
  
                  &:nth-child(odd) {
                      background-color: #fff;
                  }
  
                  &.first-row-2nd-part {
                      //border-top: 3px solid @helpTableBorderColor;
                  }
              }
          }
      }
  
      td {
          //border-bottom: 1px solid @helpTableBorderColor;
          font-weight: 400;
          padding: 8px;
          vertical-align: middle;
          width: 12%;
  
          img {
              vertical-align: middle;
              margin: 0 10px 0 0;
          }
      }
  
      th {
          //border-bottom: 1px solid @helpTableBorderColor;
          color: #333;
          font-size: 16px;
          font-weight: 600;
          padding: 8px;
          vertical-align: middle;
      }
  
      th.table_empty_cell {
          border-bottom: 0 none;
      }
   }

   // lists
    ul,
    li,
    ol {
      padding: 0;
      margin: 0;
    }

    ul {
      list-style-type: disc;
      margin: 0 0 24px;

      li {
        margin: 0 0 0 22px;
        line-height: 22px;
      }

      &.ul-category {
        list-style-type: none;

        > li {
          list-style-type: none;
          margin: 0;

          &:not(:last-child) {
            margin-bottom: 32px;
          }

          > ul {
            > li {
              &:not(:last-child) {
                margin-bottom: 10px;
              }
            }
          }
        }
      }
    }

    ol {
        line-height: 1.5em;
        margin: 10px 0;
        padding: 0;

        > li {
            margin: 8px 0 8px 16px;
        }
    }

    hr {
        margin: 32px 0;
    }

    // divs
    .border-content {
      margin-bottom: 24px;
      padding-bottom: 23px;
      border-bottom: 1px solid #cccccc;
    }

    .gs_content {
      border-bottom: 1px solid #d1dce2;
      height: auto;
      margin: 24px 0 0;
      padding-bottom: 30px;
      &:last-child {
        border-bottom: 0px;
        padding-bottom: 0px;
      }
    }

    .gs_submenu {
      border-bottom: 0px;
      padding: 8px 0 0;

      &.gs_content {
        margin: 0;
      }
    }

    .PortalHelp {
        padding: 8px 0 0;
    }

    .notehelp {
      border-left: 5px solid #808080;
      color: #666;
      position: relative;
      border-radius: 3px;
      margin: 16px 16px 16px 22px;
      padding: 16px;
      font-size: 14px;
      line-height: 22px;
      background-color: #f5f5f5;

      &.nh_important {
        border-color: #f5f5f5;
        border-left: 5px solid #ff642e;
      }

      > .important_notice_label {
        color: #FF6F3D;
        font-weight: 700;
        display: block;
        padding: 0 0 8px;
      }
    }

    // links 
    a {
      display: inline-flex;
      align-items: center;
      color: #ff6f3d;
      text-decoration: none;
      font-weight: 400;

      span {
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
        h1, h2, h3, h4, h5 {
          color: #ff6f3d;
          &:hover {
            cursor: pointer;
          }
        }
      }

      > b {
        font-weight: 400;
      }
      
      img {
        margin-right: 8px;
      }

      &.bold {
        font-weight: 700;
      }

      &:hover {
        text-decoration: underline;
      }
    }

    //headings 
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 0;
      letter-spacing: -0.02em;
      line-height: 1.33em;
      padding: 0 0 16px;
    }

    h3 {
      font-size: 24px;
    }

    h4 {
      font-size: 18px;
    }

    h5 {
      font-size: 14px;
    }

    h6 {
      font-size: 14px;
    }

    // code
    .prettyprint {
      padding: 2px;
      background: #f4f4f4;
      font-family: "Roboto Mono", Menlo, "Bitstream Vera Sans Mono",
        "DejaVu Sans Mono", Monaco, Consolas, monospace;
      border: 0;
      font-size: 14px;
      margin: 10px 0;
      line-height: 18px;
      white-space: pre-wrap;
      word-wrap: break-word;
      overflow: auto;

      > code {
        white-space: pre-wrap;
        display: block;
        line-height: 18px;
        padding: 15px;
        text-align: left;
        font-size: 13px;
        font-weight: 400;
        background: #f4f4f4;

        span {
          margin: 0;
          padding: 0;
        }

        > .pln {
          color: #666;
        }

        > .pun {
          color: #660;
        }

        > .lit {
            color: #066;
        }

        > .str {
            color: #080;
        }

        > .kwd {
            color: #008;
        }
      }
    }

    code {
      background: #f4f4f4;
      font-family: "Roboto Mono", Consolas, Monaco, "Andale Mono", monospace;
      padding: 1px 5px;
      word-break: break-all;
    }

    // images 
    img.screen_guides {
      cursor: pointer;
      display: inline-block;
      height: auto;
      margin: 16px 0;
      position: relative;
      width: 350px;
    }

    img {
      vertical-align: middle;
    }

    img.bigphoto_screen {
      display: none;
    }
    @media ${device.tabletL} {
      img.bigphoto_screen {
        display: block;
        margin: 16px 0;
        width: 100%;
      }
      img.screen_guides {
        display: none;
      }
    }

    @media ${device.tabletS} {
      img[target] {
        width: 100%;
      }
    }
}
`;

export default RawHtmlStyle;