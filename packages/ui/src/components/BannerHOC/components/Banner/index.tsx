import * as React from "react"
import {
  Link,
  withRouter,
  RouteComponentProps
} from 'react-router-dom'
import * as classnames from 'classnames'

type TParams = { pathname?: string }

const Banner = ({ location }: RouteComponentProps<TParams>) => <ul className="banner-item-list">
  <Link
    to="/"
    className={classnames("banner-item", { active: location.pathname === '/' })}
  >
    Home
  </Link>
  <Link
    to="/aboutme"
    className={classnames("banner-item", { active: location.pathname === '/aboutme' })}
  >
    ABOUT ME
  </Link>
  <Link
    to="/tutorials"
    className={classnames("banner-item", { active: location.pathname === '/tutorials' })}
  >
    TUTORIALS
  </Link>
  <Link
    to="/tblogs"
    className={classnames("banner-item", { active: location.pathname === '/tblogs' })}
  >
    T BLOGS
  </Link>
  <Link
    to="/games"
    className={classnames("banner-item", { active: location.pathname === '/games' })}
  >
    GAMES
  </Link>
</ul>

export default withRouter(Banner)
