import React from 'react'
import { Link } from "gatsby"

import './styles.scss'

const Header = () => (
  <nav className="header">
    <div>
      <Link to="/blogs/" className="link">BLOGS</Link>
      <Link to="/music/" className="link">MUSIC</Link>
    </div>

    <div className="language">EN</div>
  </nav>
)

export default Header
