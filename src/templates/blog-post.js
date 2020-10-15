import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'

import { Layout } from '~components'

const BlogPost = ({ data, location }) => {
  const post = data.markdownRemark

  return (
    <Layout location={location}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Alexander Zhao | {post.frontmatter.title}</title>
        <link rel="canonical" href="http://alexanderzhao.net/blogs/post.frontmatter.title" />
      </Helmet>
      <div>
        <h3>{post.frontmatter.title}</h3>
        <p>{post.frontmatter.date}</p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        tag
        type
      }
    }
  }
`
