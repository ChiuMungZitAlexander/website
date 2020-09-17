import React from 'react'

import { Header } from '~components'
import './styles.scss'

const Layout = ({ children }) => (
  <div className="page-layout">
    <Header />
    <div className="page-content">{children}</div>
  </div>
)

export default Layout
