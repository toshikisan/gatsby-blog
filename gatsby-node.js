const path = require('path')

exports.createPages = (({graphql, actions}) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    const postTemplate = path.resolve('src/templates/post.js')
    const categoryTemplate = path.resolve('src/templates/category.js')
    const tagTemplate = path.resolve('src/templates/tag.js')
    const tagsTemplate = path.resolve('src/templates/tags.js')

    resolve(
      graphql(
        `
          query {
            allMarkdownRemark {
              edges {
                node {
                  frontmatter {
                    slug
                    title
                    category
                    tags
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          return Promise.reject(result.errors)
        }

        // createPage postTemplate
        const posts = result.data.allMarkdownRemark.edges;

        posts.forEach(({node}) => {
          const path = '/' + node.frontmatter.category + '/' + node.frontmatter.slug

          createPage({
            path,
            component: postTemplate,
            context: {
              slug: node.frontmatter.slug
            }
          })
        })

        // createPage categoryTemplate
        const postsByCategory = {};
        posts.forEach(({ node }) => {
          if (node.frontmatter.category) {
            const category = node.frontmatter.category
            if (!postsByCategory[category]) {
              postsByCategory[category] = [];
            }
            postsByCategory[category].push(node);
          }
        });

        const categories = Object.keys(postsByCategory);
        categories.forEach(category => {
          const posts = postsByCategory[category];
          createPage({
            path: `/${category}`,
            component: categoryTemplate,
            context: {
              posts,
              category
            }
          })
        });

        // createPage tagTemplate
        const postsByTag = {};
        posts.forEach(({ node }) => {
          if (node.frontmatter.tags) {
            node.frontmatter.tags.forEach(tag => {
              if (!postsByTag[tag]) {
                postsByTag[tag] = [];
              }
              postsByTag[tag].push(node);
            });
          }
        });

        const tags = Object.keys(postsByTag);
        tags.forEach(tagName => {
          const posts = postsByTag[tagName]
          createPage({
            path: `/tags/${tagName}`,
            component: tagTemplate,
            context: {
              posts,
              tagName
            }
          })
        })

        // createPage tagsTemplate
        createPage({
          path: '/tags',
          component: tagsTemplate,
          context: {
            tags: tags.sort(),
          },
        });

      })
    )
  })
})
