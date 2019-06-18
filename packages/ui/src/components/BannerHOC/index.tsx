import * as React from 'react'
import * as classnames from 'classnames'

import { AppContextConsumer } from 'src/Context'

import Banner from './components/Banner/'

export const BannerHOC = (WrappedComp: React.ComponentType) => () => (
  <AppContextConsumer>
    {
      ({ isMenuCollapsed }) => (
        <div className='wrapped-banner-container'>
          <div className={classnames('banner-wrapper', { 'collapsed': isMenuCollapsed })}>
            <Banner />
          </div>
          <div className='content-wrapper'>
            <WrappedComp />
          </div>
        </div>
      )
    }
  </AppContextConsumer>
)
