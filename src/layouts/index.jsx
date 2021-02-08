import * as React from 'react'
import { Link } from 'gatsby'
import { Location } from '@reach/router'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import Global from '@assets/icons/global.svg'

import { pathToArray } from '@utils/url'

import './styles.scss'

const Nav = ({ pathname, lang }) => {
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

Nav.propTypes = {
  pathname: PropTypes.string.isRequired,
  lang: PropTypes.oneOf(['en', 'zh']),
}

const Layout = ({ children }) => (
  <Location>
    {({ location }) => {
      const lang = pathToArray(location.pathname)[0]

      return (
        <div className={`layout ${lang}`}>
          <Nav pathname={location.pathname} lang={lang} />
          <main>{children}</main>
        </div>
      )
    }}
  </Location>
)

Layout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Layout
