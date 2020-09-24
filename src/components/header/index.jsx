import React from 'react'
import { Link } from 'gatsby'
import { Location } from '@reach/router'
import classNames from 'classnames'

import './styles.scss'

const Header = () => (
  <Location>
    {({ location }) => (
      <nav className="header">
        <div className="links-container">
          <Link to="/" className="link">
            <span
              className={classNames({
                highlighted: /^\/$/i.test(location.pathname),
              })}
            >
              HOME
            </span>
          </Link>
          <Link to="/blogs/" className="link">
            <span
              className={classNames({
                highlighted: /^\/blogs/i.test(location.pathname),
              })}
            >
              BLOGS
            </span>
          </Link>
          <Link to="/music/" className="link">
            <span
              className={classNames({
                highlighted: /^\/music/i.test(location.pathname),
              })}
            >
              MUSIC
            </span>
          </Link>
        </div>
        <div className="language">EN</div>
      </nav>
    )}
  </Location>
)

export default Header
