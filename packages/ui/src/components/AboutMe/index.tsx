import * as React from 'react'

import { BannerHOC } from '../BannerHOC'

const AboutMe = () => <div className='about-me-container'>
  <h3 className='paragraph'>My name is</h3>
  <h1 className='paragraph emphasize'>Alexander Zhao</h1>
  <h3 className='paragraph'>JavaScript Engineer</h3>
  <h3 className='paragraph'>Saxophonist</h3>
  <h2 className='paragraph'>&nbsp;</h2>
  <h4 className='paragraph'>Besides programming and music, I enjoy playing GTA5, The Elder Scroll 5 and FF14. Even</h4>
  <h4 className='paragraph'>I am nobody. Yet billions of nobody created the world.</h4>
</div>

export default BannerHOC(AboutMe)
