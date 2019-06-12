import * as React from "react"

import Banner from './components/Banner/'

export const BannerHOC = (WrappedComp: React.ComponentType) => () => <div className="wrapped-banner-container">
  <div className="banner-wrapper">
    <Banner />
  </div>
  <div className="content-wrapper">
    <WrappedComp />
  </div>
</div>
