import * as React from 'react'

import { BannerHOC } from '../BannerHOC'

const Home = () => <div className="home-container">
  Home
</div>

export default BannerHOC(Home, true)
