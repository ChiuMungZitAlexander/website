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
</div>

export default BannerHOC(Home)
