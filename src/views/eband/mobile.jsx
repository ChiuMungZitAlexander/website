import React from 'react'

import './mobile.scss'

const EbandMobile = () => (
  <>
    <div className="eband mobile">
      <p className="eband-name">深圳</p>
      <p className="eband-name">EBand</p>
      <p className="eband-name" style={{ color: '#5fa8d3', fontSize: '3rem' }}>
        流行
      </p>
      <p
        className="eband-name"
        style={{ fontSize: '1rem', lineHeight: '1rem' }}
      >
        和
      </p>
      <p className="eband-name" style={{ color: '#5fa8d3', fontSize: '3rem' }}>
        爵士
      </p>
      <p className="eband-name">
        <div class="button-down"></div>
      </p>
    </div>
    <div className="eband mobile">
      <div className="eband-img" />
    </div>
  </>
)

export default EbandMobile
