import { useStaticQuery } from "gatsby"

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            subtitle
            author
          }
        }
      }
    `
  )
  return site.siteMetadata
}
