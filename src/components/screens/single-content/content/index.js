import React, { useEffect, useState } from "react";
import Heading from "@components/common/heading";
import Video from "../video";
import StyledContent from "./styled-content";
import Text from "@components/common/text";
import { useStaticQuery, graphql } from "gatsby";
//import getAllData from "@lib/strapi/getData";
import axios from 'axios';


const CenterContent = ({ t }) => {
  // useEffect(() => {
  //   // Update the document title using the browser API
  //  axios.get('http://localhost:1337/api/articles')
  //   .then(data => {
  //       console.log(data.data);
  //   })
  // }, []);
    const { articles } = useStaticQuery(graphql`
    query {
      articles {
        data {
          id,
          attributes {
            title
          }
        }
      }
    }
  `)
  // axios.get('http://localhost:1337/api/articles').then(response => {
  //   console.log(response);
  // });
//   const forms = fetch('http://localhost:1337/api/articles', {
//   method: 'GET',
//   headers: {
//     'Content-Type': 'application/json',
//   },
// })
//   .then(response => response.json())
//   .then(data => data);

 // const forms = getAllData();
 //console.log(data);
//  const [blogs, setBlogs] = useState([]);
//  React.useEffect(() => {
//   fetch("http://localhost:1337/api/articles").then(res => res.json()).then(val => setBlogs(val))
// }, []);
// console.log(blogs);
    return (
        <StyledContent>
            <div className="wrapper-content">
                <Heading
                    level={1}
                    label="Installation Guides"
                />
                {/* <div>{blogs.data[0].attributes.title}</div> */}
                <div>{articles.data}</div>
            </div>
            <Video t={t} />
        </StyledContent>
    );
}

// export const query = graphql`
//   fragment ArticleCard on STRAPI_ARTICLE {
//     data {
//       id,
//       attributes {
//         title
//       }
//     }
//   }
// `

// export const getServerSideProps = async () => {
//     const res = await fetch(
//       `http://localhost:1337/api/articles`);
//     const forms = await res.json();
//   return {
//     props: {
//       forms
//     },
//   };
// };


export default CenterContent;