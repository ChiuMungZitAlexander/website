import React from 'react'

import { Header } from '../components'

import Avatar from '@images/avatar.jpg'
import '@styles/index.scss'

const Home = (): JSX.Element => (
  <>
    <Header />
    <div className="homeContainer">
      <div className="homeAvatar">
        <img src={Avatar} />
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
  </>
)

export default Home
