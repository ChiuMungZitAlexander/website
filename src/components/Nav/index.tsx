import { Link } from 'gatsby';
import { useLocation } from '@reach/router';
import styled from 'styled-components';

import { blue, darkBlue } from 'src/styles/colors';

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 3rem;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  z-index: 1001;
`;

const LinkComp = styled(Link)`
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  margin-right: 1rem;
  text-decoration: none;

  &:hover {
    color: ${blue};
  }
`;

const Links = styled.nav`
  display: flex;
`;

const Lang = styled.div``;

const Nav = (): JSX.Element => {
  const location = useLocation();

  return (
    <Container>
      <Links>
        <LinkComp
          to="/"
          style={{ color: location.pathname === '/' ? blue : darkBlue }}
        >
          首页
        </LinkComp>
        <LinkComp
          to="/blogs"
          style={{
            color: location.pathname.startsWith('/blogs') ? blue : darkBlue,
          }}
        >
          博客
        </LinkComp>
        <LinkComp
          to="/music"
          style={{
            color: location.pathname.startsWith('/music') ? blue : darkBlue,
          }}
        >
          音乐
        </LinkComp>
      </Links>
      <Lang></Lang>
    </Container>
  );
};

export default Nav;
