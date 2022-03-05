import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import NavLayout from 'src/layouts/NavLayout';

import { lightGrey, darkGrey, darkBlue } from 'src/styles/colors';

import AvatarImage from 'src/assets/images/avatar.jpg';
import ChinaFlagImage from 'src/assets/icons/china.svg';

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        license: string;
      };
    };
  };
}

const Container = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;

const Avatar = styled.div`
  background-image: url(${AvatarImage});
  background-size: contain;
  border-radius: 50%;
  box-shadow: 2px 2px 10px ${darkGrey};
  height: 8rem;
  margin-bottom: 2rem;
  position: relative;
  width: 8rem;
`;

const ChinaFlag = styled.div`
  background: url(${ChinaFlagImage});
  border-radius: 50%;
  box-shadow: 2px 2px 10px $theme-dark-grey;
  height: 2rem;
  position: absolute;
  right: 0;
  top: 0;
  width: 2rem;
`;

const H2 = styled.h2`
  color: ${darkBlue};
  line-height: 1.75rem;
  text-align: center;
`;

const H4 = styled.h4`
  color: ${darkBlue};
  line-height: 1.5rem;
  text-align: center;
`;

const Disclaimer = styled.p`
  bottom: 1rem;
  color: ${lightGrey};
  font-size: 0.5rem;
  position: fixed;
  text-align: center;
  text-decoration: none;
  width: 100%;
`;

const IndexPage = ({ data }: IndexPageProps): JSX.Element => (
  <NavLayout>
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="keywords" content="alexander zhao,赵梦哲,个人网站,萨克斯" />
      <meta
        name="description"
        content="Alexander Zhao,赵梦哲,个人主页,javascript技术分享,萨克斯乐谱分享"
      />
      <title>赵梦哲 | 主页</title>
      <link rel="canonical" href="https://alexanderzhao.net" />
    </Helmet>
    <Container>
      <Avatar>
        <ChinaFlag />
      </Avatar>
      <H2>我是</H2>
      <H2 style={{ marginBottom: '1rem' }}>Alexander 赵梦哲</H2>
      <H4>JavaScript/Rust 软件工程师</H4>
      <H4>中音萨克斯手</H4>
    </Container>
    <Disclaimer>
      <span>Copyright © 2018-2022&nbsp;</span>
      <a href="https://beian.miit.gov.cn/" rel="noreferrer" target="_blank">
        {data.site.siteMetadata.license}
      </a>
    </Disclaimer>
  </NavLayout>
);

export default IndexPage;

export const query = graphql`
  query {
    site {
      siteMetadata {
        license
      }
    }
  }
`;
