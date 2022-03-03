import * as React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import NavLayout from 'src/layouts/NavLayout';
import BlogCard, { IBlogFrontmatter } from 'src/components/BlogCard';

interface IBlogNode {
  node: {
    id: string;
    slug: string;
    frontmatter: IBlogFrontmatter;
  };
}

interface BlogsProps {
  data: {
    allMdx: {
      edges: IBlogNode[];
      totalCount: number;
    };
  };
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1.5rem;
`;

const TotalCount = styled.p`
  font-size: 1rem;
  font-weight: bold;
  margin: 0 0 1rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Blogs = ({ data }: BlogsProps): JSX.Element => (
  <NavLayout>
    <Helmet>
      <meta charSet="utf-8" />
      <meta
        name="keywords"
        content="alexander zhao,赵梦哲,个人网站,javascript"
      />
      <meta
        name="description"
        content="Alexander Zhao,赵梦哲,javascript技术分享"
      />
      <title>赵梦哲 | 博客</title>
      <link rel="canonical" href="https://alexanderzhao.net/blogs/" />
    </Helmet>
    <Container>
      <TotalCount>
        {data.allMdx.totalCount}
        {'篇帖子'}
      </TotalCount>
      <Content>
        {data.allMdx.edges.map(_blog => (
          <BlogCard
            key={_blog.node.id}
            slug={`/${_blog.node.slug}`}
            {..._blog.node.frontmatter}
          />
        ))}
      </Content>
    </Container>
  </NavLayout>
);

export default Blogs;

export const query = graphql`
  query MyQuery {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { slug: { regex: "/^blogs/i" } }
    ) {
      edges {
        node {
          id
          slug
          frontmatter {
            title
            type
            tag
            date
          }
        }
      }
      totalCount
    }
  }
`;
