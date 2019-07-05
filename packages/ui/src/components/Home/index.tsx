import * as React from 'react'

import { BannerHOC } from '../BannerHOC'

const KEY_WORDS: String[] = [
  'SOMEONE',
  'HAS',
  'TO',
  'WIN',
  ',',
  'WHY',
  'NOT',
  'ME',
]

const Home = () => <div className='home-container'>
  <div className='content'>
    {
      KEY_WORDS.map((keyword, i) => (
        <li
          key={i}
          className='keywords'
          style={{
            'animationDelay': `${0.1 * i }s`,
          }}
        >
          {keyword}
        </li>
      ))
    }
  </div>
  <div className='copyright-info'>
    <a
      href='http://www.beian.miit.gov.cn/publish/query/indexFirst.action'
      target='_blank'
    >
      粤ICP备18042140号
    </a>
    <p>Designed and developed by Alexander Zhao.</p>
    <p>Copyright © 2018-2019 alexanderzhao.net.</p>
    <p>All Rights Reserved.</p>
  </div>
</div>

export default BannerHOC(Home)
