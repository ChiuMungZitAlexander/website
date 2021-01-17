import * as React from 'react'
import { Link } from 'gatsby'
import { Location } from '@reach/router'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import { pathToArray } from '@utils/url'

import './styles.scss'

const Nav = ({ pathname }) => {
  const lang = pathToArray(pathname)[0]
  const nextLang = lang === 'zh' ? 'zh' : 'en'

  return (
    <nav>
      <div className="links-container">
        <Link to={`/${nextLang}/`} className="link">
          <span
            className={classNames({
              active: /^\/(zh|en)(\/)?$/i.test(pathname),
            })}
          >
            {lang === 'zh' ? '首页' : 'HOME'}
          </span>
        </Link>
        <Link to={`/${nextLang}/blogs/`} className="link">
          <span
            className={classNames({
              active: /blogs/i.test(pathname),
            })}
          >
            {lang === 'zh' ? '博客' : 'BLOGS'}
          </span>
        </Link>
        <Link to={`/${nextLang}/music/`} className="link">
          <span
            className={classNames({
              active: /music/i.test(pathname),
            })}
          >
            {lang === 'zh' ? '音乐' : 'MUSIC'}
          </span>
        </Link>
      </div>
      <div className="icon-container"></div>
    </nav>
  )
}

const Layout = ({ children }) => (
  <Location>
    {({ location }) => (
      <div className="layout">
        <Nav pathname={location.pathname} />
        <main>{children}</main>
      </div>
    )}
  </Location>
)

Layout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Layout
