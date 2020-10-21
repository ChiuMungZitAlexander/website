import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'

import { Layout } from '~components'
import RewardCode from '~static/icons/reward_code.jpg'
import './blog-post.scss'

const BlogPost = ({ data, location }) => {
  const post = data.markdownRemark

  return (
    <Layout location={location}>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="keywords"
          content={post.frontmatter.tag}
        />
        <title>赵梦哲 | {post.frontmatter.title}</title>
        <link
          rel="canonical"
          href={`http://alexanderzhao.net/blogs/${post.frontmatter.title}`}
        />
      </Helmet>
      <div className="blog-post">
        <p className="title">
          <span><span className="type">{post.frontmatter.type}</span> {post.frontmatter.title}</span>
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
        <div
          dangerouslySetInnerHTML={{ __html: post.html }}
          className="post-md"
        />
        <hr />
        <p className="copy-right">如文章标明“原创”，转载请联系笔者</p>
        <p className="copy-right">侵权直接起诉</p>
        <div className="reward">
          <p>编程易秃，打赏植发</p>
          <img src={RewardCode} alt="reward-code" className="reward-code" />
        </div>
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
        date(formatString: "YYYY-MM-DD")
        tag
        type
      }
    }
  }
`
