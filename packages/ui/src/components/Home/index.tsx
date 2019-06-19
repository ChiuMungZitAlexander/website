import * as React from 'react'

import { BannerHOC } from '../BannerHOC'

const Home = () => <div className='home-container'>
  <div className='content'>
    <div className='test'>test</div>
    <div className='test'>test</div>
    <div className='test'>test</div>
    <div className='test'>test</div>
    <div className='test'>test</div>
    <div className='test'>test</div>
    <div className='test'>test</div>
    <div className='test'>test</div>
    <div className='test'>test</div>
    <div className='test'>test</div>
    <div className='test'>test</div>
    <div className='test'>test</div>
    <div className='test'>test</div>
  </div>
</div>

export default BannerHOC(Home)
