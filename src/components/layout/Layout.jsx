import React from 'react'
import styled from 'styled-components';
import Header from './header/Header';
import Footer from './footer/Footer';
// .jsx 확장자 생략되어있음 왜? 같은 .jsx파일이니까!

const Layout = (props) => {
  return (
    <Wrap>
      <Header />
      <main id='main'>{props.children}</main>
      <Footer />
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #0B1437;
  #main {
    flex: 1;
    padding: 30px;
  }
`;

export default Layout;
