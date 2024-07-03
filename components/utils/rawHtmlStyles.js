import styled from "styled-components";
import { device } from "@components/utils/devices";

const RawHtmlStyle = styled.div`
padding: 24px 0 0;
  .raw-html-embed {
    z-index: 1;
    position: relative;

    p {
      margin: 0;
      padding: 0;

      &.last_update {
        text-align: end;
      }
    }

    // tables
    table {
      border-spacing: 0;
      margin: 10px 0 20px;
      text-align: center;
      width: 100%;

      &.table_portslist {
        text-align: left;
        td img {
          margin: 0;
        }

        &.common_ports {
          th.table_port, td.table_port {
            text-align: right;
          }
        }
      }

      &.table_parameters {
        text-align: left;
      }
  
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
  
      &.talk_pages {
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
          border-bottom: 1px solid #d7d8dc;
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
          border-bottom: 1px solid #d7d8dc;
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

    ol {
      margin: 0px 0;
      padding: 0;
        > li {
          margin: 0px 0 0px 16px;
        }
        li::marker {
          font-weight: bold;
        }
    }

    ul {
      list-style-type: disc;
      margin: 0;

      li {
        margin: 0 0 0 22px;
        line-height: 1.6em;
      }
            
      &.ul-category {
        list-style-type: none;

        > li {
          list-style-type: none;
          margin: 0;
        }
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
      height: auto;
      margin: 24px 0 0;
      &:last-child {
        border-bottom: 0px;
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
        padding: 0;
    }

    .notehelp {
      border-left: 5px solid #808080;
      color: #666;
      position: relative;
      border-radius: 3px;
      margin: 48px 0px 48px 22px;
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

    .sysreq_title {
      display: inline;
      font-weight: 700;
      padding-right: 4px;
      &:after {
        content: ':';
        display: inline;
      }
    }
    .sysreq_descr {
        display: inline;
    }

    .bringattention {
      background-color: #f1da92;
      padding: 15px 30px;
      margin: 10px 0 20px;
      line-height: 1.3em;
      border-radius: 2px;
      -moz-border-radius: 2px;
      -webkit-border-radius: 2px;
      .close_cross {
          font-size: 26px;
          float: right;
          margin: -5px -5px 0 0;
          padding: 5px;
          cursor: pointer;
      }
      strong {
          font-weight: 400;
          font-size: 18px;
          color: #ff642e;
          display: block;
          margin-bottom: 10px;
      }
      #newstrDate, #moduleTotalCount {
          font-weight: 600;
      }
      .input_never_show {
          display: flex;
          gap: 8px;
          vertical-align: middle;
          padding: 20px 0 10px;
      }

      table.talk_pages.languages_list_table th.header span {
        &::before, &::after {
          display: none;
        }
      }
    }


    // spans
    span.yes {
      background-image: url(/images/icons/faq_check_icons.svg);
      background-repeat: no-repeat;
      background-position: 100% 0;
      content: '';
      display: inline-block;
      height: 24px;
      margin-top: -4px;
      position: relative;
      width: 24px;
      vertical-align: middle;
    }
    span.no {
      background-image: url(/images/icons/faq_check_icons.svg);
      background-repeat: no-repeat;
      background-position: -48px 0;
      content: '';
      display: inline-block;
      height: 24px;
      margin-top: -4px;
      position: relative;
      width: 24px;
      vertical-align: middle;
    }

    span {
      &.new_language:after, &.comsoon:after, &.newarticle:after { 
        display: inline-block;
        padding: 0 4px;
        color: #fff;
        font-size: 10px;
        font-weight: 300;
        vertical-align: middle;
        margin: 0 0 0 6px;
        text-transform: top;
        line-height: 1.5em;
      }
    }

    span.new_language:after {
      content: 'recently added';
      background-color: #3db80f;
    }
    span.comsoon:after {
      margin: 0 0 0 23px;
      line-height: 1.3em;
      font-size: 9px;
      content: 'soon';
      background-color: #999;
    }

    span.iptoggler, span.toggler {
      border-bottom: 1px dotted #333;
      cursor: pointer;
      width: fit-content;
    }

    span.iphidecont {
      display: none;
    }

    div.ipcontents {
      display: none;
    }

    div.inpage-toggler {
      text-align: -webkit-right;
    }

    .block-editor, .block_of_step .inpage-toggler, .MainHelpCenter .inpage-toggler {
      padding: 8px 0 0;
      span.toggler {
        left: 0;
        right: auto;
        top: 10px;
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
      margin: 24px 0;
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

    pre {
      white-space: break-spaces;
    }

    // images 
    img.screen_guides {
      cursor: pointer;
      display: inline-block;
      height: auto;
      margin: 24px 0;
      position: relative;
      width: 352px;
    }

    img {
      vertical-align: middle;
      width: initial;
    }

    img.width-content {
      width: -webkit-fill-available;
    }

    img.bigphoto_screen {
      display: none;
    }


    // inputs 

    input {
        display: none;
    }
    input[type="checkbox"] {
      display: block;
    }

    input[type="radio"] {
        vertical-align: text-bottom;
    }

    input+label {
        background: #eee;
        border: 1px solid #999;
        border-radius: 4px 4px 0 0;
        display: inline-block;
        padding: 4px 12px;
        position: relative;
        top: 1px;
    }

    input:checked+label {
        background: #fff;
        border-bottom: 1px solid transparent;
    }

    input~.tab {
        border-top: 1px solid #999;
        padding: 12px;
    }

    input~.tab {
        display: none;
    }

    #tab1:checked~.tab.content1, #tab2:checked~.tab.content2, #tab3:checked~.tab.content3, #tab4:checked~.tab.content4, #tab5:checked~.tab.content5, #tab6:checked~.tab.content6, #tab7:checked~.tab.content7 {
        display: block;
    }

    // languages
    .locale_lng {
      display: inline-block;
      padding: 0;
      min-height: 12px;

      &:before {
        display: inline-block;
        content: '';
        width: 16px;
        height: 16px;
        background-image: url(/images/flags/flags_all.png);
        background-repeat: no-repeat;
        background-size: 256px 240px;
        vertical-align: middle;
        margin: 0 7px 3px 5px;
      }

      &.language_Lt-az-AZ:before {
        background-position: 0 -16px;
      }

      &.language_en-US:before {
          background-position: -223px -208px;
      }

      &.language_vi-VN:before {
          background-position: -96px -224px;
      }

      &.language_el-GR:before {
          background-position: -64px -80px;
      }

      &.language_es-ES:before, &.language_gl-ES:before, &.language_eu-ES:before {
          background-position: 0 -64px;
      }

      &.language_ca-ES:before {
          background-position: -240px -224px;
      }

      &.language_it-IT:before {
          background-position: -128px -96px;
      }

      &.language_lo-LA:before {
          background-position: -128px -112px;
      }

      &.language_ms-MY:before {
          background-position: -128px -144px;
      }

      &.language_zh-TW:before {
          background-position: -159px -208px;
      }

      &.language_zh-CN:before {
          background-position: -207px -32px;
      }

      &.language_ko-KR:before {
          background-position: -64px -112px;
      }

      &.language_lv-LV:before {
          background-position: -16px -128px;
      }

      &.language_de-DE:before {
          background-position: -80px -48px;
      }

      &.language_pl-PL:before {
          background-position: -207px -160px;
      }

      &.language_pt-BR:before {
          background-position: -223px -16px;
      }

      &.language_pt-PT:before {
          background-position: -16px -176px;
      }

      &.language_ru-RU:before {
          background-position: -112px -176px;
      }

      &.language_ar-SA:before {
          background-position: -143px -176px;
      }

      &.language_tr-TR:before {
          background-position: -112px -208px;
      }

      &.language_uk-UA:before {
          background-position: -191px -208px;
      }

      &.language_fi-FI:before {
          background-position: -48px -64px;
      }

      &.language_fr-FR:before {
          background-position: -128px -64px;
      }

      &.language_cs-CZ:before {
          background-position: -64px -48px;
      }

      &.language_ja-JP:before {
          background-position: -191px -96px;
      }

      &.language_sq-AL:before {
          background-position: -96px 0;
      }

      &.language_ar-TN:before {
          background-position: -80px -208px;
      }

      &.language_ar-AE:before {
          background-position: -32px 0;
      }

      &.language_hy-AM:before {
          background-position: -112px 0;
      }

      &.language_af-ZA:before {
          background-position: -191px -224px;
      }

      &.language_be-BY:before {
          background-position: -32px -32px;
      }

      &.language_bg-BG:before {
          background-position: -96px -16px;
      }

      &.language_bs-BA:before {
          background-position: -16px -16px;
      }

      &.language_hu-HU:before {
          background-position: -223px -80px;
      }

      &.language_ka-GE:before {
          background-position: -191px -64px;
      }

      &.language_da-DK:before {
          background-position: -112px -48px;
      }

      &.language_he-IL:before {
          background-position: -32px -96px;
      }

      &.language_id-ID:before {
          background-position: 0 -96px;
      }

      &.language_is-IS:before {
          background-position: -112px -96px;
      }

      &.language_kk-KZ:before {
          background-position: -112px -112px;
      }

      &.language_lt-LT:before {
          background-position: -240px -112px;
      }

      &.language_mk-MK:before {
          background-position: -160px -128px;
      }

      &.language_mn-MN:before {
          background-position: -207px -128px;
      }

      &.language_nl-NL:before {
          background-position: 0 -160px;
      }

      &.language_nb-NO:before {
          background-position: -16px -160px;
      }

      &.language_ro-RO:before {
          background-position: -80px -176px;
      }

      &.language_Cy-sr-SP:before, &.language_Lt-sr-SP:before {
          background-position: -96px -176px;
      }

      &.language_si-LK:before {
          background-position: -191px -112px;
      }

      &.language_sk-SK:before {
          background-position: -16px -192px;
      }

      &.language_sl-SI:before {
          background-position: 0 -192px;
      }

      &.language_sw-KE:before {
          background-position: -207px -96px;
      }

      &.language_th-TH:before {
          background-position: 0 -208px;
      }

      &.language_Cy-uz-UZ:before {
          background-position: 0 -224px;
      }

      &.language_fa-IR:before {
          background-position: -96px -96px;
      }

      &.language_hi-IN:before {
          background-position: -64px -96px;
      }

      &.language_hr-HR:before {
          background-position: -191px -80px;
      }

      &.language_sv-SE:before {
          background-position: -207px -176px;
      }

      &.language_et-EE:before {
          background-position: -191px -48px;
      }

      &.language_es-AR:before {
          background-position: -160px 0;
      }

      &.language_my-MM:before {
          background-position: -191px -128px;
      }

      &.language_tg-Cyrl-TJ:before {
          background-position: -16px -208px;
      }
    }

    // platforms

    .languages_list_table {
      .windows, .linux, .macos {
      display: inline-block;
      width: 24px;
      height: 24px;
      background-repeat: no-repeat;
      background-size: 24px 24px;
      background-position-y: 50%;
      background-position-x: 50%;

        a {
            display: block;
            width: 100%;
            height: 24px;
        }
      }

      .windows, .linux, .macos {
          background-image: url(/images/icons/16px_windows.react.svg);
      }

      .linux {
          background-image: url(/images/icons/16px_linux.react.svg);
      }

      .macos {
          background-image: url(/images/icons/24px_mac.react.svg);
      }

      .windows.linux, .windows.macos, .linux.macos {
          width: 50px;
          background-position-x: 0%, 100%
      }

      .windows.linux {
          background-image: url(/images/icons/16px_windows.react.svg), url(/images/icons/16px_linux.react.svg);
      }

      .windows.macos {
          background-image: url(/images/icons/16px_windows.react.svg), url(/images/icons/24px_mac.react.svg);
      }

      .linux.macos {
          background-image: url(/images/icons/16px_linux.react.svg), url(/images/icons/24px_mac.react.svg);
      }

      .windows.linux.macos {
          width: 78px;
          background-position-x: 0%, 50%, 100%;
          background-image: url(/images/icons/16px_windows.react.svg), url(/images/icons/16px_linux.react.svg), url(/images/icons/24px_mac.react.svg);
      }
    }

    // styles classes 
    .without_padding {
      padding: 0 !important;
    }
    .without_margin {
      margin: 0 !important;
    }

    .pb16 {
      padding-bottom: 16px;
    }
    .pb8 {
      padding-bottom: 8px;
    }
    .pt16 {
      padding-top: 16px;
    }
    .pt8 {
      padding-top: 8px;
    }
    
    .mb16 {
      margin-bottom: 16px;
    }
    .mb8 {
      margin-bottom: 8px;
    }
    .mt16 {
      margin-top: 16px;
    }
    .mt8 {
      margin-top: 8px;
    }

    @media ${device.tabletL} {
      img {
       // width: 100%;
      }
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

      table {
        display: block;
        overflow-x: scroll;

        img {
          width: auto;
        }
      }
    }
}
`;

export default RawHtmlStyle;