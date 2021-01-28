import * as React from 'react'
import { Link } from 'gatsby'
import { Location } from '@reach/router'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import Global from '@assets/icons/global.svg'

import { pathToArray } from '@utils/url'

import './styles.scss'

const Nav = ({ pathname }) => {
  const lang = pathToArray(pathname)[0]
  const nextLang = lang === 'zh' ? 'en' : 'zh'

  return (
    <nav>
      <div className="links-container">
        <Link to={`/${lang}/`} className="link">
          <span
            className={classNames({
              active: /^\/(zh|en)(\/)?$/i.test(pathname),
            })}
          >
            {lang === 'zh' ? '首页' : 'HOME'}
          </span>
        </Link>
        <Link to={`/${lang}/blogs/`} className="link">
          <span
            className={classNames({
              active: /blogs/i.test(pathname),
            })}
          >
            {lang === 'zh' ? '博客' : 'BLOGS'}
          </span>
        </Link>
        {/* <Link to={`/${lang}/music/`} className="link">
          <span
            className={classNames({
              active: /music/i.test(pathname),
            })}
          >
            {lang === 'zh' ? '音乐' : 'MUSIC'}
          </span>
        </Link> */}
      </div>
      <div className="lang-container">
        <Link to={pathname.replace(lang, nextLang)}>
          <img className="ref-icon" src={Global} alt="lang" />
        </Link>
      </div>
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
