import React from 'react'
import { Link } from 'gatsby'
import classNames from 'classnames'

import './styles.scss'

const Header = () => {
  const isHighlighted = pathReg => pathReg.test(window.location.pathname)

  return (
    <nav className="header">
      <div className="links-container">
        <Link to="/" className="link">
          <span
            className={classNames({
              highlighted: isHighlighted(/^\/$/i),
            })}
          >
            HOME
          </span>
        </Link>
        <Link to="/blogs/" className="link">
          <span
            className={classNames({
              highlighted: isHighlighted(/^\/blogs/i),
            })}
          >
            BLOGS
          </span>
        </Link>
        <Link to="/music/" className="link">
          <span
            className={classNames({
              highlighted: isHighlighted(/^\/music/i),
            })}
          >
            MUSIC
          </span>
        </Link>
      </div>
      <div className="language">EN</div>
    </nav>
  )
}

export default Header
