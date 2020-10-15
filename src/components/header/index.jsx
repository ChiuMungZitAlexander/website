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
              首页
            </span>
          </Link>
          <Link to="/blogs/" className="link">
            <span
              className={classNames({
                highlighted: /^\/blogs/i.test(location.pathname),
              })}
            >
              博客
            </span>
          </Link>
          <Link to="/music/" className="link">
            <span
              className={classNames({
                highlighted: /^\/music/i.test(location.pathname),
              })}
            >
              音乐
            </span>
          </Link>
        </div>
        {/* <img src={Language} className="language" alt="" /> */}
      </nav>
    )}
  </Location>
)

export default Header
