import React, { useEffect, useState } from "react";
import Heading from "@components/common/heading";
import Video from "../video";
import StyledContent from "./styled-content";
import Text from "@components/common/text";
import Box from "@components/common/box";
import { useStaticQuery, graphql } from "gatsby";

const CenterContent = ({ t }) => {
const data = useStaticQuery(graphql`
  query {
    allStrapiArticle {
      nodes {
        title
        url
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
                    <Box>{c.blocks[0].body.data.body.childMarkdownRemark}</Box>
                    </div>
                ))} 
            </div>
            <Video t={t} />
        </StyledContent>
    );
}

export default CenterContent;