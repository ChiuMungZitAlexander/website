import * as React from 'react'
import { graphql, HeadFC, PageProps } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import { Header } from '@/components/_shared/header'

type MdxNode = {
  node: {
    id: string
    frontmatter: {
      date: string
      tag: string
      title: string
      type: string
      featuredImage: string
    }
  }
}

const CodingPage: React.FC<PageProps<{ allMdx: { edges: MdxNode[] } }>> = ({ data }) => {
  return (
    <div className="h-full flex flex-col bg-slate-500">
      <Header />
      <div className="w-full max-w-[720px] flex flex-col mx-auto">
        {data?.allMdx?.edges?.map(_item => (
          <div key={_item.node.id}>
            <h1>{_item.node.frontmatter.title}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CodingPage

export const Head: HeadFC = () => <title>Coding - Alexander</title>

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
    allMdx {
      edges {
        node {
          id
          frontmatter {
            date
            tag
            title
            type
          }
        }
      }
    }
  }
`
