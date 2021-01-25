import * as React from 'react'
import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'

import Layout from '@layouts'

import '@styles/blogs.scss'

const Blogs = ({ data }) => (
  <Layout>
    <div className="blogs">
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="keywords"
          content="alexander zhao,赵梦哲,个人网站,javascript"
        />
        <meta
          name="description"
          content="Alexander Zhao,赵梦哲,javascript技术分享"
        />
        <title>Alexander Zhao | Blogs</title>
        <link rel="canonical" href="https://alexanderzhao.net/en/blogs/" />
      </Helmet>
      <h4 className="count">{data.allMarkdownRemark.totalCount / 2} Posts</h4>
      {data.allMarkdownRemark.edges
        .filter(({ node }) => node.fields.langKey === 'en')
        .sort(
          (n, m) =>
            +new Date(m.node.frontmatter.date) -
            +new Date(n.node.frontmatter.date)
        )
        .map(({ node }) => (
          <Link to={`${node.fields.slug}`} key={node.id} className="blog">
            <p className="title">
              <span className="type">{node.frontmatter.type}</span>{' '}
              <span>{node.frontmatter.title}</span>
            </p>
            <p>
              {node.frontmatter.tag.split(',').map(tag => (
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
            date(formatString: "YYYY-MM-DD")
            tag
            type
          }
          fields {
            slug
            langKey
          }
        }
      }
    }
  }
`
