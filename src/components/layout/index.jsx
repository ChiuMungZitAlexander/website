import React from 'react'

import { Header } from '~components'
import './styles.scss'

const Layout = ({ children }) => (
  <>
    <Header />
    <div className="page-content">{children}</div>
  </>
)

export default Layout
