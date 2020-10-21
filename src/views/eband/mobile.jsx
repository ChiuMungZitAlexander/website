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
    <div className="eband" style={{ height: '50%' }}>
      <div className="eband-img" />
    </div>
    <div className="eband mobile">
      <p className="eband-member-row instrument">萨克斯</p>
      <p className="eband-member-row">赵梦哲</p>
      <p className="eband-member-row instrument">非洲鼓</p>
      <p className="eband-member-row">尼尔·麦克米兰(苏格兰)</p>
      <p className="eband-member-row instrument">节奏吉他/巴拉莱卡</p>
      <p className="eband-member-row">迪密特里·安东诺夫(俄罗斯)</p>
      <p className="eband-member-row instrument">主音吉他/贝司</p>
      <p className="eband-member-row">尼克·特鲁诺夫(乌克兰)</p>
      <p className="eband-member-row instrument">旋律吉他</p>
      <p className="eband-member-row">桑迪普·克拉姆贝(印度)</p>
      <p className="eband-member-row instrument">键盘</p>
      <p className="eband-member-row">向婕</p>
    </div>
  </>
)

export default EbandMobile
