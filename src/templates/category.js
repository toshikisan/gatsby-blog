import React from 'react'
import { Link } from 'gatsby'

const Category = ({ pageContext }) => {
  const { posts, categorySlug, categoryName } = pageContext
  return (
    <div>
      <div>
        Posts about {`${categoryName}`} ({`${categorySlug}`})
      </div>
      <div>
        <ul>
          {posts.map((post, index) => {
            return (
              <li key={index}>
                <Link to={post.frontmatter.path}>
                  {post.frontmatter.title}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Category
