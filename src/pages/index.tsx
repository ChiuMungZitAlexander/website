import { graphql } from 'gatsby'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import useMediaQuery from 'beautiful-react-hooks/useMediaQuery'

import { Header } from '@/components/_shared/header'

import HomeVideo from '@/assets/videos/home_1.webm'
import HomeVideoMobile from '@/assets/videos/home_1_mobile.mp4'
import ChevronDown from '@/assets/icons/chevron_down.svg'
import Avatar from '@/assets/images/avatar.jpg'

import type { HeadFC, PageProps } from 'gatsby'

const IndexPage: React.FC<PageProps> = () => {
  const { t } = useTranslation()
  const isMobile = useMediaQuery('(max-width: 48rem)')

  return (
    <div className="flex flex-col">
      <div className="relative w-full h-[80vh]">
        <Header />
        <video
          autoPlay
          className="absolute inset-x-0 top-0 w-full h-full bg-gray-300 -z-[1] object-cover"
          loop
          muted
          onContextMenu={() => false}
          playsInline
          preload="auto"
        >
          {isMobile ? (
            <source
              src={HomeVideoMobile}
              type="video/mp4"
            />
          ) : (
            <source
              src={HomeVideo}
              type="video/mp4"
            />
          )}
        </video>
      </div>
      <div className="h-[20vh] flex flex-col justify-end items-center">
        <div className="flex flex-col items-center animate-bounce">
          <p className="-mb-2 font-black text-lg">{t('more')}</p>
          <ChevronDown className="w-8 h-8" />
        </div>
      </div>
      <div className="h-[100vh] flex flex-col justify-center items-center">
        <div className='grow flex flex-col justify-center items-center font-bold text-slate-500'>
          <img alt='avatar' className='h-32 w-32 rounded-full' src={Avatar} />
          <p className='text-[4rem]'>I'm Alexander Zhao</p>
          <p className='text-[2rem]'>Web3 Developer (Typescript/Rust)</p>
          <p className='text-[2rem]'>Alto Saxophonist</p>
        </div>
        <p className="mb-8 text-sm text-gray-300">
          Copyright © 2018-2023&nbsp;
          <a
            href="https://beian.miit.gov.cn/"
            rel="noreferrer"
            target="_blank"
          >
            粤ICP备18042140号
          </a>
        </p>
      </div>
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>About - Alexander</title>

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { ns: { in: ["common", "index"] }, language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
