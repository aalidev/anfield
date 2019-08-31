import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Service from "../components/service"
import Menu from "../components/menu"
import { useStaticQuery, graphql } from "gatsby"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query MyCode {
      allContentfulBeers {
        edges {
          node {
            name
            price
          }
        }
      }
      allContentfulWines {
        edges {
          node {
            name
            price
          }
        }
      }
      allContentfulAsset {
        edges {
          node {
            fluid(maxWidth: 1600) {
              src
              srcWebp
              srcSetWebp
              srcSet
            }
            title
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Home" />
      <Hero data={data} style={{ overflow: "hidden" }} />
      <div style={{ background: "#f4f4f4" }}>
        <Service />
      </div>
      <Menu data={data} />
    </Layout>
  )
}

export default IndexPage
