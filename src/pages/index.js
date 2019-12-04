import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import Img from "gatsby-image";
import { SinglePost, PostInfo, PreTitle, Title, Subtitle, Update, Freshnew, Excrept, Card, CardColumns }  from "../components/style/emo-home-posts";
import Bild from "../img/post/blog-1.png";
import RechercheBild from "../img/post/Sachrecherche-Bundesarchiv-Berlin.jpg";

let minutes = 1000 * 60;
let hours = minutes * 60;
let days = hours * 24;
let months = days * 30;

export default ({ data }) => {
  return (
    <Layout>
    <>
        <div><h1 className="customHeadline">Thomas Pruschwitz</h1></div>
        <div style={{display: 'flex'}}>

          <div style={{width:'48%', padding:'40px', marginRight:'20px', backgroundColor:'#f9f9f9', border:'1px solid #4d4d4d20', borderRadius:'6px'}}><img style={{width:'100%'}} src={Bild} />
          <h2 style={{marginLeft: 'auto',
    marginRight: 'auto',
    padding: '15px', width:'100%'}}>Ein Brief Hitlers mit mehreren Unbekannten</h2>
    <div style={{lineHeight: '1.3', fontWeight:'400', width:'100%', marginBottom:'30px', textAlign:'center'}}>Vor etwa 90 Jahren, am 8. Dezember 1929, wählten die Thüringerinnen und Thüringer ihren fünften demokratischen Landtag der Weimarer ...</div>
            <div style={{textAlign:' center', marginLeft: 'auto', marginRight: 'auto'}}><a href="/brief-hitler"><button class="button-x" value="test">Zum Artikel</button></a ></div>
          </div>
          <div style={{width:'48%', padding:'40px',backgroundColor:'#f9f9f9', border:'1px solid #4d4d4d20', borderRadius:'6px', textAlign:'center'}}><img style={{width:'90%'}} src={RechercheBild} />
          <h2 style={{marginLeft: 'auto',
    marginRight: 'auto',
    padding: '15px', width:'100%'}}>Recherchedienst Bundesarchiv</h2>
    <div style={{lineHeight: '1.3', fontWeight:'400', width:'100%', marginBottom:'30px', textAlign:'center'}}>Rechercheaufträge für Insititutionen und Privatpersonen im Bundesarchiv Berlin</div>
            <div style={{textAlign:' center', marginLeft: 'auto', marginRight: 'auto'}}><a target="_blank" href="https://www.recherche-bundesarchiv.de/"><button class="button-x" value="test">Zu Ad Acta</button></a ></div>
          </div>
        </div>
    </>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___update], order: DESC }
      filter: { frontmatter: { category: { ne: "2ndcat" } } }
    ) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            update(formatString: "DD MMMM, YYYY")
            title
            subtitle
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 500, maxHeight: 500) {
                  base64
                  tracedSVG
                  aspectRatio
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                  sizes
                  originalImg
                  originalName
                  presentationWidth
                  presentationHeight
                }
              }
            }
          }
        }
      }
    }
  }
`;
