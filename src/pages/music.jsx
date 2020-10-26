import React from 'react'
import { Helmet } from 'react-helmet'
// import { useMediaQuery } from 'react-responsive'

import { Layout } from '~components'
import EbandMobile from '~views/eband/mobile'

import '~styles/music.scss'

const Music = () => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <meta
        name="keywords"
        content="alexander zhao,赵梦哲,个人网站,萨克斯,乐谱"
      />
      <meta
        name="description"
        content="Alexander Zhao,赵梦哲,萨克斯,视频动态免费乐谱"
      />
      <title>赵梦哲 | 音乐</title>
      <link rel="canonical" href="http://alexanderzhao.net/music" />
    </Helmet>
    <div className="music-container">
      <EbandMobile />
    </div>
  </Layout>
)

export default Music
