const path = require(`path`)

/* Helper function to create the URL from the file's path in the system. */
const { createFilePath } = require(`gatsby-source-filesystem`)

/* Creates a unique URL for each individual blog post by creating a new field under 
each node on the GraphQL layer. */
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  /* Ensures that we are only processing MDX files and not other assets
  that might be within the sourced folder. */

  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode })

    // Creates new query'able field with name of 'slug'.
    createNodeField({
      name: `slug`,
      node,
      value: `${value}`,
    })
  }
}

// Call the createPages API
exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            id
            frontmatter {
              title
              description
              date
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  // Create blog post pages.
  const posts = result.data.allMdx.edges

  // you'll call `createPage` for each result
  posts.forEach(({ node }, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      path: `/blog${node.fields.slug}`,
      // This component will wrap our MDX content
      component: path.resolve(`./src/templates/BlogPost.js`),
      // You can use the values in this context in
      // our page layout component
      context: {
        id: node.id,
        slug: node.fields.slug,
        previous,
        next,
      },
    })

    const postsPerPage = 10
    const numPages = Math.ceil(posts.length / postsPerPage)

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/blog` : `/blog/page/${i + 1}`,
        component: path.resolve('./src/templates/BlogList.js'),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
        },
      })
    })
  })
}
