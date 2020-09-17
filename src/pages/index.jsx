import React from 'react'

import { Layout } from '~components'

import Avatar from '~images/avatar.jpg'
import ChinaFlag from '~images/china.svg'
import '~styles/index.scss'

const Home = () => (
  <Layout>
    <div className="home-container">
      <div className="homeAvatar">
        <img src={Avatar} className="avatar" />
        <img src={ChinaFlag} className="flag" />
      </div>
      <p className="name">
        <b>
          I am Alexander
          <br />
          Mengzhe Zhao
        </b>
      </p>
      <p className="job">
        Javascript Engineer
        <br />
        and
        <br />
        Saxophonist
      </p>
      <p className="thankWord">Appreciate your visit and support</p>
      <p className="disclaimer">粤ICP备 18042140号</p>
    </div>
  </Layout>
)

export default Home
