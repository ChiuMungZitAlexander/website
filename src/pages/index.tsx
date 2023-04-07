import { graphql } from 'gatsby'
import { useTranslation } from 'gatsby-plugin-react-i18next'

import { Header } from '../components/header'

import type { HeadFC, PageProps } from 'gatsby'

const IndexPage: React.FC<PageProps> = () => {
  const { t } = useTranslation()

  return (
    <div className="relative flex flex-col">
      <video
        autoPlay
        className="absolute inset-x-0 top-0 w-full h-[80vh] bg-gray-300 -z-[1] object-cover"
        controls={false}
        loop
        muted
      >
        <source
          src="/home.mp4"
          type="video/mp4"
        />
      </video>
      <Header />
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>

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
