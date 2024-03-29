const postsQuery = `{
  posts: allMarkdownRemark(
    sort: {order: DESC, fields: frontmatter___date}
    filter: {fileAbsolutePath: {regex: "/(_posts)/.*\.md$/"}}
  ) {
    edges {
      node {
        objectID: id
        frontmatter {
          category
          color
          title
          description
          date_timestamp: date
          date(formatString: "MMMM[, ] Do [of] YYYY", locale: "en-US")
        }
        fields {
          slug
        }
        excerpt(pruneLength: 5000)
      }
    }
  }
}`

const flatten = arr => arr.map(({ node: { frontmatter, ...rest } }) => ({
  ...frontmatter,
  date_timestamp: parseInt((new Date(frontmatter.date_timestamp).getTime() / 1000).toFixed(0)),
  ...rest
}))

const queries = [
  {
    query: postsQuery,
    transformer: ({ data }) => flatten(data.posts.edges), // optional
    indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME, // overrides main index name, optional
    settings: {
      attributesToSnippet: [`excerpt:20`]
      // optional, any index settings
    },
  },
];


module.exports = queries;