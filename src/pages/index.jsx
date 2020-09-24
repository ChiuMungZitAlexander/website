import React from 'react'
import { graphql } from 'gatsby'

import { Layout } from '~components'

import Avatar from '~images/avatar.jpg'
import ChinaFlag from '~images/china.svg'
import '~styles/index.scss'

const Home = ({ data, location }) => (
  <Layout location={location}>
    <div className="home-container">
      <div className="homeAvatar">
        <img src={Avatar} className="avatar" alt="" />
        <img src={ChinaFlag} className="flag" alt="" />
      </div>
      <h2 className="name">
        <p>I am Alexander</p>
        <p>Mengzhe Zhao</p>
      </h2>
      <h4 className="job">
        <p>Javascript Engineer</p>
        <p>and</p>
        <p>Saxophonist</p>
      </h4>
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
