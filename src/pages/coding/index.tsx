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
      thumbnail: {
        publicURL: string
      }
    }
  }
}

const CodingPage: React.FC<PageProps<{ allMdx: { edges: MdxNode[] } }>> = ({ data }) => {
  return (
    <div className="h-full flex flex-col bg-slate-500">
      <Header />
      <div className="w-full max-w-[720px] flex flex-col gap-8 mx-auto p-4">
        {data?.allMdx?.edges?.map(_item => (
          <div
            className="flex bg-blue-300 text-white rounded-lg overflow-hidden"
            key={_item.node.id}
          >
            <img
              alt=""
              className="h-full min-h-[4rem] w-16 object-cover"
              src={_item.node.frontmatter.thumbnail.publicURL}
            />
            <div className="grow px-2">
              <h3 className="text-lg">{_item.node.frontmatter.title}</h3>
              <h5 className="text-xs text-gray-200">{_item.node.frontmatter.tag}</h5>
              <h5 className="text-right text-xs text-gray-200">{_item.node.frontmatter.date}</h5>
            </div>
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
            thumbnail {
              publicURL
            }
          }
        }
      }
    }
  }
`
