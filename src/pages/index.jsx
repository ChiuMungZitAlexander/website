import React from 'react'
import { graphql } from 'gatsby'

import { Layout } from '~components'

import Avatar from '~images/avatar.jpg'
import ChinaFlag from '~images/china.svg'
import '~styles/index.scss'

const Home = ({ data }) => (
  <Layout>
    <div className="home-container">
      <div className="homeAvatar">
        <img src={Avatar} className="avatar" alt="" />
        <img src={ChinaFlag} className="flag" alt="" />
      </div>
      <p className="name">
        <h2>I am Alexander</h2>
        <h2>Mengzhe Zhao</h2>
      </p>
      <p className="job">
        <h4>Javascript Engineer</h4>
        <h4>and</h4>
        <h4>Saxophonist</h4>
      </p>
      <h4 className="thankWord">Appreciate your visit and support</h4>
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
