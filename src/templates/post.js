import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import Header from '../components/header'
import Title from '../components/title'

const Post = ({ data }) => {
  const post = data.markdownRemark
  const title = post.frontmatter.title
  const date = post.frontmatter.date
  const tags = post.frontmatter.tags
  const category = post.frontmatter.category
  const html = post.html

  return (
    <Layout>
      <Header />
      <Title title={title} />
      <p>{date}</p>
      <div>
        <Link to={`/${category[0]}`}>{category[1]}</Link>
      </div>
      <div>
        {tags.map(tag =>
          <Link key={tag} to={`/tags/${tag}`}>
            {tag}
          </Link>
        )}
      </div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}
export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: {eq: $pathSlug} }) {
      html
      frontmatter {
        date
        title
        category
        tags
      }
    }
  }
`
export default Post

