import React from 'react'

import { Header } from '~components'
import './styles.scss'

const Layout = ({ children, location }) => (
  <div className="page-layout">
    <Header location={location} />
    <div className="page-content">{children}</div>
  </div>
)

export default Layout
