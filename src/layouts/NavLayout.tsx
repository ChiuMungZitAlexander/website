import * as React from 'react';
import styled from 'styled-components';

import Nav from 'src/components/Nav';

import { greenBlue } from 'src/styles/colors';

interface NavLayoutProps {
  children: string | JSX.Element | JSX.Element[] | null;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Content = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  max-height: calc(100% - 3rem);
  overflow-x: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${greenBlue};
    border-radius: 2px;
  }
`;

const NavLayout = ({ children }: NavLayoutProps): JSX.Element => (
  <Container>
    <Nav />
    <Content>
      {Array.isArray(children) ? children.map(child => child) : children}
    </Content>
  </Container>
);

export default NavLayout;
