import * as React from 'react'
import * as classnames from 'classnames'

import { AppContextConsumer } from 'src/Context'

import Banner from './components/Banner/'

export const BannerHOC = (WrappedComp: React.ComponentType, withBG?: boolean) => () => (
  <AppContextConsumer>
    {
      ({ isMenuCollapsed, toggleMenu }) => (
        <div className="wrapped-banner-container">
          <div className="banner-wrapper">
            <Banner />
          </div>
          <div className={classnames('content-wrapper', { 'with-bg': withBG })}>
            <WrappedComp />
          </div>
        </div>
      )
    }
  </AppContextConsumer>
)
