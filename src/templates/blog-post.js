import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'

import { Layout } from '~components'
import '~styles/blog-post.scss'

const BlogPost = ({ data, location }) => {
  const post = data.markdownRemark

  return (
    <Layout location={location}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Alexander Zhao | {post.frontmatter.title}</title>
        <link
          rel="canonical"
          href={`http://alexanderzhao.net/blogs/${post.frontmatter.title}`}
        />
      </Helmet>
      <div className="blog-post">
        <p className="title">
          <span># {post.frontmatter.title}</span>
          <span className="type">{post.frontmatter.type}</span>
        </p>
        <p>
          {post.frontmatter.tag.split(' ').map(tag => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </p>
        <p className="date">{post.frontmatter.date}</p>
        <hr />
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
