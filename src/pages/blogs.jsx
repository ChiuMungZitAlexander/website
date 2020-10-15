import React from 'react'
import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'

import { Layout } from '~components'
import '~styles/blogs.scss'

const Blogs = ({ data }) => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Alexander Zhao | Blogs</title>
      <link rel="canonical" href="http://alexanderzhao.net/blogs" />
    </Helmet>
    <div className="blogs-container">
      <h4>{data.allMarkdownRemark.totalCount} 篇帖子</h4>
      {data.allMarkdownRemark.edges
        .sort(
          (n, m) =>
            +new Date(m.node.frontmatter.date) -
            +new Date(n.node.frontmatter.date)
        )
        .map(({ node }) => (
          <Link to={`/blogs${node.fields.slug}`} key={node.id} className="blog">
            <p className="title">
              <span># {node.frontmatter.title}</span>
              <span className="type">{node.frontmatter.type}</span>
            </p>
            <p>
              {node.frontmatter.tag.split(' ').map(tag => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </p>
            <p className="date">{node.frontmatter.date}</p>
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
            tag
            type
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
