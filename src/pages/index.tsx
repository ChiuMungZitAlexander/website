import type { HeadFC, PageProps } from 'gatsby'

const IndexPage: React.FC<PageProps> = () => {
  return <main className="bg-blue-500">Alexander Chiu</main>
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
