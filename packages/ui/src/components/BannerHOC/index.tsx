import * as React from "react"

export const BannerHOC = (WrappedComp: React.ComponentType) => () => <div className="wrapped-banner-container">
  <div>banner</div>
  <WrappedComp />
</div>
