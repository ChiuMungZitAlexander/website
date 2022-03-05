import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import NavLayout from 'src/layouts/NavLayout';
import {
  IBlogFrontmatter,
  Title,
  Tags,
  Tag,
  Type,
  Date,
} from 'src/components/BlogCard';

import QRImage from 'src/assets/images/qr.jpg';

import { darkBlue, veryLightGrey } from 'src/styles/colors';

interface BlogTemplateProps {
  children: string | JSX.Element | JSX.Element[] | null;
  pageContext: {
    frontmatter: IBlogFrontmatter;
  };
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1.5rem;

  .gatsby-resp-image-wrapper {
    margin: 1rem 0;
  }

  p {
    margin: 0.5rem 0;

    > img {
      display: block;
      margin: 1rem auto;
      width: 100%;
    }

    > code {
      background-color: ${veryLightGrey};
      border-radius: 4px;
      color: #c7254e;
      font-family: monospace, Arial, Helvetica, sans-serif;
      padding: 1px 6px 4px;
    }
  }

  pre {
    background-color: ${veryLightGrey};
    border-radius: 4px;
    color: #c7254e;
    font-family: monospace, Arial, Helvetica, sans-serif;
    overflow-x: auto;
    padding: 1px 6px 4px;
  }
`;

const Card = styled.div`
  p {
    margin: 0;
  }
`;

const Content = styled.div`
  max-width: 768px;
  margin: 0 auto 1rem;
  width: 100%;
`;

const HR = styled.hr`
  margin: 1rem 0;
`;

const CopyRight = styled.p`
  font-size: 0.75rem;
  line-height: 1rem;
  margin: 0 !important;
  text-align: center;
`;

const Reward = styled.p`
  color: ${darkBlue};
  font-style: italic;
  font-weight: 700;
  line-height: 3rem;
  text-align: center;
`;

const BlogTemplate = ({
  children,
  pageContext,
}: BlogTemplateProps): JSX.Element => (
  <NavLayout>
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="keywords" content={pageContext.frontmatter.tag} />
      <title>赵梦哲 | {pageContext.frontmatter.title}</title>
      <link
        rel="canonical"
        href={`http://alexanderzhao.net/blogs/${pageContext.frontmatter.title}`}
      />
    </Helmet>
    <Container>
      <Card>
        <Title>{pageContext.frontmatter.title}</Title>
        <Tags>
          {pageContext.frontmatter.tag.split(',').map(_tag => (
            <Tag key={_tag}>{_tag}</Tag>
          ))}
        </Tags>
        <p>
          <Type>{pageContext.frontmatter.type}</Type>
          <Date>{pageContext.frontmatter.date}</Date>
        </p>
      </Card>
      <HR />
      <Content>{children}</Content>
      <HR />
      <CopyRight>如文章标明“原创”，转载请联系笔者</CopyRight>
      <CopyRight>侵权直接起诉</CopyRight>
      <Reward>编程易秃，打赏植发</Reward>
      <img
        alt=""
        src={QRImage}
        style={{
          display: 'block',
          height: '182px',
          margin: '0 auto',
          pointerEvents: 'auto',
          userSelect: 'all',
          width: '182px',
        }}
      />
    </Container>
  </NavLayout>
);

export default BlogTemplate;
