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
                    path
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
          const path = node.frontmatter.path

          createPage({
            path,
            component: postTemplate,
            context: {
              pathSlug: path
            }
          })
        })

        // createPage categoryTemplate
        const postsByCategory = {};
        const categories = {};
        posts.forEach(({ node }) => {
          if (node.frontmatter.category) {
            const categoryName = node.frontmatter.category[1]
            const categorySlug = node.frontmatter.category[0]
            if (!postsByCategory[categorySlug]) {
              postsByCategory[categorySlug] = [];
              categories[categorySlug] = categoryName;
            }
            postsByCategory[categorySlug].push(node);
          }
        });

        const categorySlugs = Object.keys(postsByCategory);
        categorySlugs.forEach(categorySlug => {
          const categoryName = categories[categorySlug];
          const posts = postsByCategory[categorySlug];
          createPage({
            path: `/${categorySlug}`,
            component: categoryTemplate,
            context: {
              posts,
              categorySlug,
              categoryName
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
