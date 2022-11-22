import globalColors from "../utils/global-colors";

const {
  white,
  grayMain,
  grayHover,
  orangeMain,
  orangeHover,
  orangeLetters,
  graySecnodary,
  gray,
  grayTextInput,
  grayLight,
  grayTag,
  shuttleGrey,
} = globalColors;

const Base = {
  ul: {
    li: {
      textColor: "gray",
      fontSize: "14px",
      lineHeight: "160%",
      textAlign: "justify",
      fontWeight: "normal",
      margin: "16px 0",
      position: "relative",
      paddingLeft: "21px",

      before: {
        backgroundColor: orangeMain,
        width: "6px",
        height: "6px",
        position: "absolute",
        left: "0",
        top: "calc(50% - 3px)",
        transform: "rotate(-45deg)",
      },
    },
  },

  button: {
    textColor: white,
    textColorTransparentType: grayMain,
    textColorTransparentTypeHover: orangeMain,
    textColorSecondaryType: white,
    borderColorHover: orangeMain,
    backgroundColorPrimary: orangeMain,
    backgroundColorSecondary: grayMain,
    backgroundColorPrimaryHover: orangeHover,
    backgroundColorSecondaryHover: grayHover,

    borderTransparentType: `1px solid ${grayMain}`,
    borderRadius: "3px",

    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    outline: "none",
    boxSizing: "border-box",
    fontWeight: "600",
    margin: "0",
    display: "inline-block",
    textAlign: "center",
    textDecoration: "none",
    topVerticalAlign: "text-top",
    middleVerticalAlign: "middle",
    bottomVerticalAlign: "text-bottom",
    lineHeight: "13px",
    textTransform: "uppercase",
    fontSize: "12px",
    transitionDuration: "0.3s",

    mobile: {
      height: "48px",
      width: "100%",
    },
  },

  externalLink: {
    color: orangeMain,
    textDecoration: "underline",
    cursor: "default",
    hoverColor: orangeMain,
    hoverTextTransform: "none",
    hoverTextDecoration: "none",
    hoverCursor: "pointer",
  },

  header: {
    fontSize: ["48px", "40px", "32px", "24px", "18px", "14px", "14px"],
    lineHeight: ["74px", "53px", "38px", "32px", "24px", "19px", "19px"],
    fontWeight: 700,
  },

  textInput: {
    textColor: gray,
    textColorHover: grayHover,
    textColorSecondaryType: graySecnodary,
    textColorSecondaryTypeHover: gray,

    backgroundColor: "#fff",
    backgroundColorPrimaryHover: white,
    backgroundColorDisabled: "#F9F9F9",
    backgroundColorSuccess: "#F9FEEF",
    backgroundColorError: "#FFF7F7",

    border: "1px solid",
    borderRadius: "3px",
    borderColor: "#AAAAAA",
    borderColorHover: "#666666",
    borderColorDisabled: "#AAAAAA",
    borderColorSuccess: "#8BB825",
    borderColorError: "#CB0000",

    position: "absolute",
    display: "block",
    boxSizing: "border-box",
    boxShadow: "none",
    width: "100%",
    height: "76px",
    padding: "0 16px",
    margin: "0",
    overflow: "auto",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "22px",
    textAlign: "left",
    verticalAlign: "center",
    textDecoration: "none",
    textTransform: "none",
    textShadow: "none",
    outline: "none",

    placeholderColor: "#CCC",

    label: {
      color: "#AAAAAA",
      colorHover: gray,
      padding: "0 15px",
      left: "2px",
      top: "8px",
      fontSize: "12px",
    },

    media: {
      width: "100%",
      fontSize: "13px",
    },
  },

  tag : {
    borderColorPage: "#d9d9d9",
    backgroundColorPopup: "#999",
    colorWhite: white,
    colorPage: grayTag,
    colorList: orangeLetters,
    fontSizePopup: "18px",
    fontSizeList: "14px", 
    fontWeightBold: "600",
    paddingPopup: "1px 5px 3px",
    paddingPage: "0px 5px",
  },

  text: {
    color: gray,

    display: "inline-block",
    height: "auto",
    width: "auto",
    padding: "0",
    margin: "0",
    fontSize: "14px",
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: "21px",
    textAlign: "left",
    textTransform: "none",
    textDecoration: "none",
    textShadow: "none",
    whiteSpace: "wrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
    cursor: "default",
    hoverColor: gray,
    hoverTextTransform: "none",
    hoverTextDecoration: "none",
    hoverTextShadow: "none",
    hoverCursor: "default",
  },

  iconButton: {
    width: "20px",
  },

  checkbox: {
    color: grayTextInput,
    fontSize: "14px",
    paddingBottom: "12px",
    lineHeight: "160%",
  },
  loader: {
    color: shuttleGrey,
    size: "40px",
    marginRight: "2px",
    borderRadius: "50%",
  },
  requestLoader: {
    backgroundColor: white,
    border: `1px solid ${globalColors.veryLightGrey}`,
    overflow: "hidden",
    padding: "5px 10px",
    lineHeight: "16px",
    borderRadius: "5px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",

    marginRight: "10px",
    top: "10px",
    width: "100%",
  },

  separator: {
    display: "flex",
    width: "1px",
    alignItems: "center",

    div: {
      backgroundColor: grayLight,

      height: "1px",
      flex: "1",
    },

    span: {
      padding: "0 12px",
    },
  },

  scrollbar: {
    backgroundColorVertical: "rgba(0, 0, 0, 0.1)",
    backgroundColorHorizontal: "rgba(0, 0, 0, 0.1)",
  },

  tabsContainer: {
    scrollbar: {
      width: "100%",
      height: "67px",
    },

    label: {
      height: " 55px",
      minWidth: "fit-content",
      marginRight: "8px",
      width: "fit-content",

      selectedBorder: `1px solid ${orangeMain}`,
      backgroundColor: white,
      hoverBackgroundColor: white,
      disableBackgroundColor: gray,

      title: {
        margin: "7px 15px 7px 15px",
        overflow: "hidden",
        color: orangeMain,
        disableColor: gray,
      },
    },
  },

  box: {
    background: "unset",
    border: "none",
    justifyContent: "start",
    alignItems: "center",
    flexWrap: "nowrap",
    flexDirection: "row",
    alignContent: "flex-start",
  },
};

export default Base;
