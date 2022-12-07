import React, { useEffect, useState } from "react";
import Heading from "@components/common/heading";
import Video from "../video";
import StyledContent from "./styled-content";
import Text from "@components/common/text";
import { useStaticQuery, graphql } from "gatsby";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';

const CenterContent = ({ t }) => {
const data = useStaticQuery(graphql`
  query {
    allStrapiArticle {
      nodes {
        blocks {
          body {
            data {
              body
              childMarkdownRemark {
                html
                rawMarkdownBody
              }
            }
          }
        }
        title
        url
      }
    }
  }
`);

const allArticles = data.allStrapiArticle.nodes;

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
                    <div><ReactMarkdown remarkPlugins={[remarkGfm]}>{c.blocks[0].body.data.body}</ReactMarkdown></div>
                    </div>
                ))} 
            </div>
            <Video t={t} />
        </StyledContent>
    );
}

export default CenterContent;