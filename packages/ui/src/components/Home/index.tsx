import * as React from "react"
import { Link } from 'react-router-dom'

import { BannerHOC } from '../BannerHOC'

const Home = () => <div>
  Home
  <Link to="/AboutMe">To AboutMe</Link>
</div>

export default BannerHOC(Home)
