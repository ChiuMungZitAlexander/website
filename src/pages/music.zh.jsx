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
          <div class="swiper-button-next" />
          <div class="swiper-button-prev" />
          <div class="swiper-pagination" />
        </div>
        <div className="info-container">
          <p>
            我的音乐关注于流行和爵士，但童年时代深受古典音乐爱好者的父母的影响，时常也会演奏一些传统曲目。
            目前演奏风格偏向小林香织。除了萨克斯以外，钢琴、电贝司和爵士鼓都尝试过一段时间。
            目前最高成就是安徽蚌埠音乐家协会会员和香港西洋乐理事会成员。
          </p>
          <hr />
          <p style={{ marginBottom: '1rem' }}>
            在深圳我有一支乐队名叫EBand。这是一个国际化的、多风格的乐队。
            EBand不定时间会在酒吧、公园等公开场所演奏。我非常享受和其他音乐家们合奏的时光。
          </p>
          <p className="musician">
            迪密特里·安东诺夫
            <span className="nationality">格鲁吉亚</span>
          </p>
          <p>
            <span className="instrument">古典吉他/巴拉莱卡</span>
          </p>
          <p className="musician">
            尼尔·麦克米兰
            <span className="nationality">苏格兰</span>
          </p>
          <p>
            <span className="instrument">非洲鼓</span>
          </p>
          <p className="musician">
            尼克·特鲁诺夫
            <span className="nationality">乌克兰</span>
          </p>
          <p>
            <span className="instrument">电吉他</span>
          </p>
          <p className="musician">
            詹姆斯·辛
            <span className="nationality">中国</span>
          </p>
          <p>
            <span className="instrument">电贝司</span>
          </p>
          <p className="musician">
            桑迪普·克拉姆贝
            <span className="nationality">印度</span>
          </p>
          <p>
            <span className="instrument">古典吉他</span>
          </p>
          <p className="musician">
            向婕
            <span className="nationality">中国海南</span>
          </p>
          <p>
            <span className="instrument">键盘</span>
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
