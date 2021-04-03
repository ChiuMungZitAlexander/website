import * as React from 'react'
import { Helmet } from 'react-helmet'

import Layout from '@layouts'

import Selfie_1 from '@assets/images/selfie_1.jpg'
import Selfie_2 from '@assets/images/selfie_2.jpg'
import Selfie_3 from '@assets/images/selfie_3.jpg'
import Selfie_4 from '@assets/images/selfie_4.jpg'

import '@styles/music.scss'

const Music = () => {
  React.useEffect(() => {
    if (window.Swiper) {
      new window.Swiper('.swiper-container', {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
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
          <title>Alexander Zhao | Music</title>
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
          <div class="swiper-button-next" />
          <div class="swiper-button-prev" />
          <div class="swiper-pagination" />
        </div>
        <div className="info-container">
          <p>
            Pop and Jazz are the major area of my music. But inspired delicately
            by my parents, who are classical music fans, sometimes I cross the
            boundary of classical as well. At the moment I follow the way of
            Kaori Kobayashi. Besides saxophone, I am the amateur of piano,
            e-bass and drum set. Biggest achievements now are - member of MA,
            Bengbu, AH; member of HKWMC.
          </p>
          <hr />
          <p style={{ marginBottom: '1rem' }}>
            Play as the saxophonist of EBand in SZ, which is an international
            and multi-genre band. Pubs, parks and all public places are the
            stage for us. I enjoy the time with the other musicians.
          </p>
          <p className="musician">
            Dmitry Antonov
            <span className="nationality">Georgia</span>
          </p>
          <p>
            <span className="instrument">Classical Guitar/Balalaika</span>
          </p>
          <p className="musician">
            Neil McMillan
            <span className="nationality">Scotland</span>
          </p>
          <p>
            <span className="instrument">Djembe</span>
          </p>
          <p className="musician">
            Nick Turunov
            <span className="nationality">Ukraine</span>
          </p>
          <p>
            <span className="instrument">E-Guitar</span>
          </p>
          <p className="musician">
            James Xin
            <span className="nationality">China</span>
          </p>
          <p>
            <span className="instrument">E-Bass</span>
          </p>
          <p className="musician">
            Sandeep Kolambe
            <span className="nationality">India</span>
          </p>
          <p>
            <span className="instrument">Classical Guitar</span>
          </p>
          <p className="musician">
            Xiang Jie
            <span className="nationality">China</span>
          </p>
          <p>
            <span className="instrument">Keyboards</span>
          </p>
        </div>
        <div className="video">
          <video controls>
            <source
              src="https://sls-cloudfunction-ap-guangzhou-code-1256253626.cos.ap-guangzhou.myqcloud.com/conan.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </Layout>
  )
}

export default Music
