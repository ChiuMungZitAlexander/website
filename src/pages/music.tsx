import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';

import NavLayout from 'src/layouts/NavLayout';

import { blue, darkGrey } from 'src/styles/colors';

import Selfie_1 from 'src/assets/images/selfies/selfie_1.jpg';
import Selfie_2 from 'src/assets/images/selfies/selfie_2.jpg';
import Selfie_3 from 'src/assets/images/selfies/selfie_3.jpg';
import Selfie_4 from 'src/assets/images/selfies/selfie_4.jpg';

import 'swiper/css';
import 'swiper/css/navigation';

declare global {
  interface Window {
    Swiper: any;
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 768px;
  padding-bottom: 1rem;
  width: 100%;
`;

const StyledSwiper = styled.div`
  max-height: 432px;
  width: 100%;

  @media screen and (max-width: 480px) {
    max-height: 248px;
  }

  .mySwiper {
    width: 100%;

    img {
      height: 100%;
      width: 100%;
    }
  }
`;

const BiographyContainer = styled.div`
  font-size: 0.75rem;
  margin: 1rem 0;
  padding: 0 1.5rem;
`;

const HR = styled.hr`
  margin: 1rem 0;
`;

const Musician = styled.p`
  color: ${blue};
  font-size: 1.5rem;

  .nationality {
    color: ${darkGrey};
    font-size: 1rem;
    margin-left: 0.5rem;
  }
`;

const Instrument = styled.p`
  color: ${darkGrey};
  font-size: 1rem;
`;

const Video = styled.div`
  video {
    max-heigth: 432px;
    width: 100%;

    @media screen and (max-width: 480px) {
      max-height: 248px;
    }
  }
`;

const Music = (): JSX.Element => (
  <NavLayout>
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="keywords" content="alexander zhao,赵梦哲,个人网站,萨克斯" />
      <meta
        name="description"
        content="Alexander Zhao,赵梦哲,个人主页,javascript技术分享,萨克斯乐谱分享"
      />
      <title>赵梦哲 | 音乐</title>
      <link rel="canonical" href="https://alexanderzhao.net/music" />
    </Helmet>
    <Container>
      <StyledSwiper>
        <Swiper modules={[Navigation]} navigation loop className="mySwiper">
          <SwiperSlide>
            <img alt="selfie_1" src={Selfie_1} />
          </SwiperSlide>
          <SwiperSlide>
            <img alt="selfie_2" src={Selfie_2} />
          </SwiperSlide>
          <SwiperSlide>
            <img alt="selfie_3" src={Selfie_3} />
          </SwiperSlide>
          <SwiperSlide>
            <img alt="selfie_4" src={Selfie_4} />
          </SwiperSlide>
        </Swiper>
      </StyledSwiper>
      <BiographyContainer>
        <p>
          我的音乐倾向于流行爵士流派。
          但童年时代深受古典音乐爱好者的父母的影响，时常也会演奏一些传统曲目。
          除了萨克斯以外，钢琴、电贝斯和爵士鼓都尝试过一段时间。
          目前最高成就是安徽省蚌埠市音乐家协会会员和香港西洋乐理事会(HKWMC)成员。
        </p>
        <HR />
        <p style={{ marginBottom: '1rem' }}>
          在深圳我有一支乐队名叫EBand。这是一个国际化的、多风格的乐队。
          EBand不定时间会在酒吧、公园等公开场所演奏。我非常享受和其他音乐家们合奏的时光。
        </p>
        <Musician>
          <span>迪密特里·安东诺夫</span>
          <span className="nationality">格鲁吉亚</span>
        </Musician>
        <Instrument>巴拉莱卡</Instrument>
        <Musician>
          <span>尼尔·麦克米兰</span>
          <span className="nationality">苏格兰</span>
        </Musician>
        <Instrument>非洲鼓</Instrument>
        <Musician>
          <span>尼克·特鲁诺夫</span>
          <span className="nationality">乌克兰</span>
        </Musician>
        <Instrument>电吉他</Instrument>
        <Musician>
          <span>詹姆斯·辛</span>
          <span className="nationality">中国</span>
        </Musician>
        <Instrument>电贝斯</Instrument>
        <Musician>
          <span>桑迪普·克拉姆贝</span>
          <span className="nationality">印度</span>
        </Musician>
        <Instrument>古典吉他</Instrument>
        <Musician>
          <span>向婕</span>
          <span className="nationality">中国海南</span>
        </Musician>
        <Instrument>键盘</Instrument>
      </BiographyContainer>
      <Video>
        <video
          controls
          poster="https://sls-cloudfunction-ap-guangzhou-code-1256253626.cos.ap-guangzhou.myqcloud.com/conan_poster.jpg"
        >
          <source
            src="https://sls-cloudfunction-ap-guangzhou-code-1256253626.cos.ap-guangzhou.myqcloud.com/conan.mp4"
            type="video/mp4"
          />
        </video>
      </Video>
    </Container>
  </NavLayout>
);

export default Music;
