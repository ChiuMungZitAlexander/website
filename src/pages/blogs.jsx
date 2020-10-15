import React from 'react'
import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'

import { Layout } from '~components'

const Blogs = ({ data }) => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Alexander Zhao | Blogs</title>
      <link rel="canonical" href="http://alexanderzhao.net/blogs" />
    </Helmet>
    <div className="blogs-container">
      <h4>{data.allMarkdownRemark.totalCount} 篇帖子</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Link to={`/blogs${node.fields.slug}`} key={node.id}>
          <div>
            <h3>
              {node.frontmatter.title} <span>— {node.frontmatter.date}</span>
            </h3>
            <p>{node.excerpt}</p>
          </div>
        </Link>
      ))}
    </div>
  </Layout>
)

export default Blogs

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`
