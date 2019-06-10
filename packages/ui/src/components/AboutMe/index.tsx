import * as React from "react"
import { Link } from 'react-router-dom'

import { BannerHOC } from '../BannerHOC'

const AboutMe = () => <div>
  About Me
  <Link to="/">To Home</Link>
</div>

export default BannerHOC(AboutMe)
