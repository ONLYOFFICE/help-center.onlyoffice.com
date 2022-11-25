import styled, { css } from "styled-components";
import { Base } from "@components/themes";
import globalColors from "@components/utils/global-colors";

const StyledMark = styled.li`
background-color: ${(props) =>
  props.type === "saas"
    ? globalColors.saas
    : props.type === "videoguide"
    ? globalColors.videoGuide
    : props.type === "controlpanel"
    ? globalColors.controlPanel
    : props.type === "onlineeditors"
    ? globalColors.onlineEditors
    : props.type === "iosmobileapp"
    ? globalColors.iOSApp
    : props.type === "androidmobileapp"
    ? globalColors.androidApp
    : props.type === "serverdocker"
    ? globalColors.serverDocker
    : props.type === "serverall"
    ? globalColors.serverAll
    : props.type === "serverwindows"
    ? globalColors.serverWindows
    : props.type === "iosweb"
    ? globalColors.iOSWeb
    : props.type === "androidweb"
    ? globalColors.androidWeb
    : props.type === "integration"
    ? globalColors.integration
    : props.type === "faq"
    ? globalColors.faq
    : props.type === "serverlinux"
    ? globalColors.serverLinux
    : props.type === "desktopall"
    ? globalColors.desktopAll
    : "#333333"}};
color: #ffffff;
display: inline-block;
font-size: 12px;
height: 18px;
line-height: 18px;
margin: 1px 5px 0px 0px;
padding: 0px 8px;
text-align: center;
text-decoration: none !important;
width: 120px;
`;

StyledMark.defaultProps = { theme: Base };

export default StyledMark;
