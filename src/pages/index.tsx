import { graphql } from 'gatsby'
import { useTranslation } from 'gatsby-plugin-react-i18next'

import { Header } from '@/components/_shared/header'

import HomeVideo from '@/assets/home_1.webm'
import HomeVideoMobile from '@/assets/home_1_mobile.mp4'
import ChevronDown from '@/assets/icons/chevron_down.svg'

import type { HeadFC, PageProps } from 'gatsby'

const IndexPage: React.FC<PageProps> = () => {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col">
      <div className="relative w-full h-[80vh]">
        <Header />
        <video
          autoPlay
          className="absolute inset-x-0 top-0 w-full h-full bg-gray-300 -z-[1] object-cover hidden md:block"
          controls={false}
          loop
          muted
        >
          <source
            src={HomeVideo}
            type="video/mp4"
          />
        </video>
        <video
          autoPlay
          className="absolute inset-x-0 top-0 w-full h-full bg-gray-300 -z-[1] object-cover md:hidden"
          controls={false}
          loop
          muted
        >
          <source
            src={HomeVideoMobile}
            type="video/mp4"
          />
        </video>
      </div>
      <div className="h-[20vh] flex flex-col justify-end items-center">
        <div className="flex flex-col items-center animate-bounce">
          <p className="-mb-2 font-black text-lg">{t('more')}</p>
          <ChevronDown className="w-8 h-8" />
        </div>
      </div>
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home</title>

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
