import * as React from "react"
import {
  withRouter,
  RouteComponentProps
} from 'react-router-dom'
import * as classnames from 'classnames'

type TParams = { pathname?: string }

const Banner = ({ location }: RouteComponentProps<TParams>) => <ul className="banner-item-list">
  <li className={classnames("banner-item", { active: location.pathname === '/' })}>
    HOME
  </li>
  <li className={classnames("banner-item", { active: location.pathname === 'aboutme' })}>
    ABOUT ME
  </li>
  <li className={classnames("banner-item", { active: location.pathname === 'tutorials' })}>
    TUTORIALS
  </li>
  <li className={classnames("banner-item", { active: location.pathname === 'tblogs' })}>
    T BLOGS
  </li>
  <li className={classnames("banner-item", { active: location.pathname === 'tools' })}>
    TOOLS
  </li>
</ul>

export default withRouter(Banner)
