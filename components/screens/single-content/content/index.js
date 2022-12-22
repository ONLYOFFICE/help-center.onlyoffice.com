import React, { useEffect, useState } from "react";
import Heading from "@components/common/heading";
import Video from "../video";
import StyledContent from "./styled-content";
import Text from "@components/common/text";
import ReactHtmlParser from 'react-html-parser';

const CenterContent = ({ t, articles }) => {
    console.log(articles[0]);
    return (
        <StyledContent>
            <div className="wrapper-content">
                <Heading
                    level={1}
                    label="Installation Guides"
                />
                {/* <ReactHtmlParser>{articles.data}</ReactHtmlParser> */}
            </div>
            <Video t={t} />
        </StyledContent>
    );
}
  
export default CenterContent;