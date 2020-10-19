import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'

import { Layout } from '~components'

import Avatar from '~static/icons/avatar.jpg'
import ChinaFlag from '~static/icons/china.svg'
import '~styles/index.scss'

const Home = ({ data }) => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="keywords" content="alexander zhao,赵梦哲,个人网站,萨克斯" />
      <meta
        name="description"
        content="Alexander Zhao,赵梦哲,个人主页,javascript技术分享,萨克斯乐谱分享"
      />
      <title>赵梦哲 | 首页</title>
      <link rel="canonical" href="http://alexanderzhao.net" />
    </Helmet>
    <div className="home-container">
      <div className="homeAvatar">
        <img src={Avatar} className="avatar" alt="" />
        <img src={ChinaFlag} className="flag" alt="" />
      </div>
      <h2 className="name">
        <p>我是</p>
        <p>Alexander 赵梦哲</p>
      </h2>
      <h4 className="job">
        <p>JavaScript软件工程师</p>
        <p>中音萨克斯手</p>
      </h4>
      <h4 className="thankWord">感谢您的来访</h4>
      <p className="disclaimer">{data.site.siteMetadata.license}</p>
    </div>
  </Layout>
)

export default Home

export const query = graphql`
  query {
    site {
      siteMetadata {
        license
      }
    }
  }
`
