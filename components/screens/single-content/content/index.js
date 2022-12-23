import React from "react";
import StyledContent from "./styled-content";
import ReactHtmlParser from 'react-html-parser';

const CenterContent = ({ t, articles }) => {
  console.log(articles[0]);
  return (
    <StyledContent>
      <div className="wrapper">
        <h3>Installation Guides</h3>
        
        <div className="category-item">
          <a className="category-item-title" href="#">
            <img src="/images/icons/docs-community.svg" alt="ONLYOFFICE Docs Community Edition" />
            <h4>ONLYOFFICE Docs Community Edition</h4>
          </a>
          <div className="category-item-links">
            <a href="#"><img src="/images/icons/changelog.svg" alt="Changelog" />Changelog</a>
            <a href="#"><img src="/images/icons/roadmap.svg" alt="Roadmap" />Roadmap</a>
          </div>
          <div className="category-subitems">
            <div>
              <h5>Operating system</h5>
              <a href="#"><img src="/images/icons/windows-gray.svg" />Windows version</a>
              <a href="#"><img src="/images/icons/linux-gray.svg" />Linux version</a>
              <a href="#"><img src="/images/icons/docker-gray.svg" />Docker version</a>
              <a href="#">1-Click apps</a>
              <a href="#">Podman</a>
            </div>
            <div>
              <h5>General configuration</h5>
              <a href="#">Ports which must be opened for ONLYOFFICE Docs</a>
              <a href="#">Using ONLYOFFICE Docs behind the proxy</a>
              <a href="#">Uninstall default plugin from the server editors</a>
              <a href="#">Adding new plugins to server editors</a>
            </div>
          </div>
        </div>

        <div className="category-item">
          <a className="category-item-title" href="#">
            <img src="/images/icons/docs-enterprise.svg" alt="ONLYOFFICE Docs Enterprise Edition" />
            <h4>ONLYOFFICE Docs Enterprise Edition</h4>
          </a>
          <div className="category-item-links">
            <a href="#"><img src="/images/icons/changelog.svg" alt="Changelog" />Changelog</a>
            <a href="#"><img src="/images/icons/roadmap.svg" alt="Roadmap" />Roadmap</a>
          </div>
          <div className="category-subitems">
            <div>
              <h5>Operating system</h5>
              <a href="#"><img src="/images/icons/windows-gray.svg" />Windows version</a>
              <a href="#"><img src="/images/icons/linux-gray.svg" />Linux version</a>
              <a href="#"><img src="/images/icons/docker-gray.svg" />Docker version</a>
              <a href="#">1-Click apps</a>
              <a href="#">Amazon</a>
              <a href="#">Podman</a>
            </div>
            <div>
              <h5>General configuration</h5>
              <a href="#">Ports which must be opened for ONLYOFFICE Docs Enterprise Edition</a>
              <a href="#">Working with plugins when using CSP</a>
            </div>
          </div>
        </div>

        <div className="category-item">
          <a className="category-item-title" href="#">
            <img src="/images/icons/docs-developer.svg" alt="ONLYOFFICE Docs Developer Edition" />
            <h4>ONLYOFFICE Docs Developer Edition</h4>
          </a>
          <div className="category-item-links">
            <a href="#"><img src="/images/icons/changelog.svg" alt="Changelog" />Changelog</a>
            <a href="#"><img src="/images/icons/roadmap.svg" alt="Roadmap" />Roadmap</a>
          </div>
          <div className="category-subitems">
            <div>
              <h5>Operating system</h5>
              <a href="#"><img src="/images/icons/windows-gray.svg" />Windows version</a>
              <a href="#"><img src="/images/icons/linux-gray.svg" />Linux version</a>
              <a href="#"><img src="/images/icons/docker-gray.svg" />Docker version</a>
              <a href="#">1-Click apps</a>
              <a href="#">Podman</a>
            </div>
            <div>
              <div>
                <h5>General configuration</h5>
                <a href="#">Ports which must be opened for ONLYOFFICE Docs Enterprise Edition</a>
                <a href="#">Working with plugins when using CSP</a>
              </div>
              <div>
                <h5>Developing</h5>
                <a href="#">ONLYOFFICE Docs Developer Edition API</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledContent>
  );
}

export default CenterContent;