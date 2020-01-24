import { useStaticQuery } from "gatsby"

export const useTags = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark (
          filter: { frontmatter: { status: { eq: "published" }}},
          sort: { order: DESC, fields: [frontmatter___date] }) {
          group(field: frontmatter___tags) {
            fieldValue
            totalCount
          }
        }
      }
    `
  )
  return allMarkdownRemark
}
