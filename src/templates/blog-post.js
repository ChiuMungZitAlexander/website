import React from 'react'
import { graphql } from 'gatsby'

import { Layout } from '~components'

const BlogPost = ({ data, location }) => {
  const post = data.markdownRemark

  return (
    <Layout location={location}>
      <div>
        <h1>{post.frontmatter.title}</h1>
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
      }
    }
  }
`
