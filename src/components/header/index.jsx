import React from 'react'
import { Link } from 'gatsby'
import classNames from 'classnames'

import './styles.scss'

const Header = () => {
  const isHighlighted = pathname => {
    const reg = new RegExp(`${pathname}`, 'i')
    return reg.test(window.location.pathname)
  }

  return (
    <nav className="header">
      <div>
        <Link
          to="/blogs/"
          className={classNames('link', {'highlighted': isHighlighted('blogs')})}
        >
          BLOGS
        </Link>
        <Link
          to="/music/"
          className={classNames('link', {'highlighted': isHighlighted('music')})}
        >
          MUSIC
        </Link>
      </div>

      <div className="language">EN</div>
    </nav>
  )
}

export default Header
