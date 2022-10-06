import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from '../utils/globalStyle';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  main {
    flex: 1;
    margin: 0 auto 1.5rem;
    padding: 0 1.5rem 1rem;
    width: 90%;
    & > div {
      white-space: pre-line;
    }
    a:visited {
      color: blue;
    }
  }
`;

function Layout() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Navbar />
        <Outlet />
        <Footer />
      </Wrapper>
    </>
  );
}

export default Layout;
