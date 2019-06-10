import * as React from "react"

import { Banner } from './components/Banner/'

export const BannerHOC = (WrappedComp: React.ComponentType) => () => <div className="wrapped-banner-container">
  <Banner />
  <WrappedComp />
</div>
