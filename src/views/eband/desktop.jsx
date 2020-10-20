import React from 'react'

import './desktop.scss'

const EbandDesktop = () => (
  <div className="eband desktop">
    <p className="eband-name color--theme-light-green">深圳 EBand</p>
    <p className="eband-name">
      <span style={{ color: '#1b4965', fontSize: '3rem' }}>流行</span>
      <span style={{ fontSize: '1rem' }}> 和 </span>
      <span style={{ color: '#5fa8d3', fontSize: '3rem' }}>爵士</span>
    </p>
    <p className="eband-member-row">
      <span className="instrument">萨克斯</span>
      <span className="member">赵梦哲</span>
    </p>
    <p className="eband-member-row">
      <span className="instrument">非洲鼓</span>
      <span className="member">尼尔·麦克米兰(苏格兰)</span>
    </p>
    <p className="eband-member-row">
      <span className="instrument">节奏吉他/巴拉莱卡</span>
      <span className="member">迪密特里·安东诺夫(俄罗斯)</span>
    </p>
    <p className="eband-member-row">
      <span className="instrument">主音吉他/贝司</span>
      <span className="member">尼克·特鲁诺夫(乌克兰)</span>
    </p>
    <p className="eband-member-row">
      <span className="instrument">旋律吉他</span>
      <span className="member">桑迪普·克拉姆贝(印度)</span>
    </p>
    <p className="eband-member-row">
      <span className="instrument">键盘</span>
      <span className="member">向婕</span>
    </p>
  </div>
)

export default EbandDesktop
