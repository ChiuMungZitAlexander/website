import * as React from "react"
import { Link } from 'react-router-dom'

import { BannerHOC } from '../BannerHOC'

const Home = () => <div>
  谁家的小赖皮终于重构了网站
  <Link to="/AboutMe">To AboutMe</Link>
</div>

export default BannerHOC(Home)
