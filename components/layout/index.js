import React from "react";
import PropTypes from "prop-types";

import StyledLayout from "./styled-layout";
import Header from "./sub-components/header";
import Main from "./sub-components/main";
import Footer from "./sub-components/footer";
import Head from "./sub-components/head";
import CookieNotify from "@components/common/cookie-notify";

function PageHead() {
  return null;
}
PageHead.displayName = "PageHead";

function PageHeader() {
  return null;
}
PageHeader.displayName = "PageHeader";

function SectionMain() {
  return null;
}
SectionMain.displayName = "SectionMain";

function PageFooter() {
  return null;
}
PageFooter.displayName = "PageFooter";

class Layout extends React.Component {
  static PageHeader = PageHeader;
  static SectionMain = SectionMain;
  static PageFooter = PageFooter;
  static PageHead = PageHead;

  render() {
    const { children } = this.props;
    let headerContent = null;
    let mainContent = null;
    let footerContent = null;
    let headContent = null;

    React.Children.forEach(children, (child) => {
      const childType =
        child && child.type && (child.type.displayName || child.type.name);

      switch (childType) {
        case PageHead.displayName:
          headContent = child;
          break;
        case PageHeader.displayName:
          headerContent = child;
          break;
        case SectionMain.displayName:
          mainContent = child;
          break;
        case PageFooter.displayName:
          footerContent = child;
          break;
        default:
          break;
      }
    });

    return (
      <StyledLayout id="page-layout" className="layout">
        {children}
        {headContent && <Head>{headContent.props.children}</Head>}
        {headerContent && <Header>{headerContent.props.children}</Header>}
        <Main>{mainContent ? mainContent.props.children : null}</Main>
        {footerContent && (
          <Footer className="footer">{footerContent.props.children}</Footer>
        )}
        <CookieNotify />
      </StyledLayout>
    );
  }
}

Layout.propTypes = {
  headContent: PropTypes.bool,
  headerContent: PropTypes.bool,
  footerContent: PropTypes.bool,
};

Layout.defaultProps = {
  headContent: true,
  headerContent: true,
  footerContent: true,
};

export default Layout;


