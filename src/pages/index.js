import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import Hero from "../components/hero"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      {edges.map(({ node }) => (
        <div key={node.id}>
          <h3>
            <Link to={node.frontmatter.path}>
              {node.frontmatter.title}
            </Link>
          </h3>
            
          <p>{node.frontmatter.date}</p>
          <p>{node.frontmatter.category}</p>
          <p>{node.frontmatter.tags}</p>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark (
      filter: { frontmatter: { status: { eq: "published" }}},
      sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 15)
          frontmatter {
            title
            date(formatString: "YYYY/MM/DD")
            path
            category
            tags
          }
        }
      }
    }
  }
`

export default IndexPage
