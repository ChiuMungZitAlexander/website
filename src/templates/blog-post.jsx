import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from '@layouts'

import RewardCode from '@assets/images/reward_code.jpg'

import './blog-post.scss'

const BlogPost = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <div className="blog-post">
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="keywords" content={frontmatter.tag} />
          <title>赵梦哲 | {frontmatter.title}</title>
          <link
            rel="canonical"
            href={`http://alexanderzhao.net/blogs/${frontmatter.title}`}
          />
        </Helmet>
        <p className="title">
          <span>
            <span className="type">{frontmatter.type}</span> {frontmatter.title}
          </span>
        </p>
        <p>
          {frontmatter.tag.split(',').map(tag => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </p>
        <p className="date">{frontmatter.date}</p>
        <hr />
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
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
