import React from 'react'

import '@styles/components/header/index.scss'

const Header = (): JSX.Element => (
  <nav className="header">
    <div>
      <a>BLOGS</a>
      <a>MUSIC</a>
    </div>

    <div className="language">EN</div>
  </nav>
)

export default Header
