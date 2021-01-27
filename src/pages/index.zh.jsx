import * as React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from '@layouts'

import Avatar from '@assets/images/avatar.jpg'
import ChinaFlag from '@assets/icons/china.svg'
import Github from '@assets/icons/github.svg'
import Facebook from '@assets/icons/facebook.svg'

import '@styles/home.scss'

const Index = ({ data }) => (
  <Layout>
    <div className="home">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="keywords" content="alexander zhao,赵梦哲,个人网站,萨克斯" />
        <meta
          name="description"
          content="Alexander Zhao,赵梦哲,个人主页,javascript技术分享,萨克斯乐谱分享"
        />
        <title>赵梦哲 | 主页</title>
        <link rel="canonical" href="https://alexanderzhao.net/zh" />
      </Helmet>
      <div className="homeAvatar">
        <img src={Avatar} className="avatar" alt="" />
        <img src={ChinaFlag} className="flag" alt="" />
      </div>
      <h2 className="name">
        <p>我是</p>
        <p>Alexander 赵梦哲</p>
      </h2>
      <h4 className="job">
        <p>JavaScript/go 软件工程师</p>
        <p>中音萨克斯手</p>
      </h4>
      <p>
        <a
          href="https://github.com/ChiuMungZitAlexander"
          rel="noreferrer"
          target="_blank"
        >
          <img className="ref-icon" src={Github} alt="github" />
        </a>
        <a href="https://facebook.com" rel="noreferrer" target="_blank">
          <img className="ref-icon" src={Facebook} alt="facebook" />
        </a>
      </p>
      <p className="disclaimer">
        Copyright © 2018-2020&nbsp;
        <a href="https://beian.miit.gov.cn/" rel="noreferrer" target="_blank">
          {data.site.siteMetadata.license}
        </a>
      </p>
    </div>
  </Layout>
)

export default Index

export const query = graphql`
  query {
    site {
      siteMetadata {
        license
      }
    }
  }
`
