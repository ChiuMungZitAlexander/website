import * as React from 'react'
import { Helmet } from 'react-helmet'

import Layout from '@layouts'

import Selfie_1 from '@assets/images/selfie_1.jpg'
import Selfie_2 from '@assets/images/selfie_2.jpg'
import Selfie_3 from '@assets/images/selfie_3.jpg'
import Selfie_4 from '@assets/images/selfie_4.jpg'

import '@styles/music.scss'

const Index = () => {
  React.useEffect(() => {
    if (window.Swiper) {
      new window.Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
        },
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
      })
    }
  }, [])

  return (
    <Layout>
      <div className="music">
        <Helmet>
          <meta charSet="utf-8" />
          <meta
            name="keywords"
            content="alexander zhao,赵梦哲,个人网站,萨克斯"
          />
          <meta
            name="description"
            content="Alexander Zhao,赵梦哲,个人主页,javascript技术分享,萨克斯乐谱分享"
          />
          <title>赵梦哲 | 音乐</title>
          <link rel="canonical" href="https://alexanderzhao.net/zh/music" />
        </Helmet>
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img alt="selfie_1" src={Selfie_1} />
            </div>
            <div className="swiper-slide">
              <img alt="selfie_2" src={Selfie_2} />
            </div>
            <div className="swiper-slide">
              <img alt="selfie_3" src={Selfie_3} />
            </div>
            <div className="swiper-slide">
              <img alt="selfie_4" src={Selfie_4} />
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </Layout>
  )
}

export default Index
