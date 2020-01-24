import { useStaticQuery } from "gatsby"

export const useCategories = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark (
          filter: { frontmatter: { type: { eq: "category" }}},
          sort: { order: ASC, fields: [frontmatter___order] }) {
          edges {
            node {
              frontmatter {
                order
                category
                categoryname
              }
            }
          }
        }
      }
    `
  )

  const categories = {};
  allMarkdownRemark.edges.forEach(({ node }) => {
    categories[node.frontmatter.category] = node.frontmatter.categoryname
  });
  return categories
}
