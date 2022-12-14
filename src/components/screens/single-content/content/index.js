import React, { useEffect, useState } from "react";
import Heading from "@components/common/heading";
import Video from "../video";
import StyledContent from "./styled-content";
import Text from "@components/common/text";
import { useStaticQuery, graphql } from "gatsby";
import remarkGfm from 'remark-gfm';
import ReactHtmlParser from 'react-html-parser';

const CenterContent = ({ t }) => {
const data = useStaticQuery(graphql`
  query {
    allStrapiArticle {
      nodes {
        blocks {
          childrenStrapiComponentSharedRichTextBodyTextnode {
            body
          }
        }
        title
        url
      }
    }
  }
`);
const allArticles = data.allStrapiArticle.nodes;

console.log(allArticles);
    return (
        <StyledContent>
            <div className="wrapper-content">
                <Heading
                    level={1}
                    label="Installation Guides"
                />
                {allArticles.map((c, index) => (
                  <div key={index}>
                    <Text>{c.title}</Text>
                    <div>{ReactHtmlParser(c.blocks[0].childrenStrapiComponentSharedRichTextBodyTextnode[0].body)}</div>
                    </div>
                ))} 
            </div>
            <Video t={t} />
        </StyledContent>
    );
}

export default CenterContent;