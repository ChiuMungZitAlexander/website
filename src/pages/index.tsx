import { Header } from '../components/header'

import type { HeadFC, PageProps } from 'gatsby'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className="relative flex flex-col">
      <video
        autoPlay
        className="absolute inset-x-0 top-0 h-[80vh] bg-gray-300 -z-[1]"
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
