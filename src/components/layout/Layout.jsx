import React from 'react'
import Header from './header/Header';
import styled from 'styled-components';
import Title from '../commmon/Title';
import History from '../commmon/History';
import { Box } from '@chakra-ui/react';
/* import Footer from './footer/Footer'; */
// .jsx 확장자 생략되어있음 왜? 같은 .jsx파일이니까!

const Layout = ({ title, pagename, children }) => {
  return (
    <Wrap>
      <Header />
      <main id='main'>
        <Box pl="0 0 50px 10px">
          <History pagename={pagename}/>
          <Title title={title}/>
        </Box>
        {children}
      </main>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  background: #0B1437;
  padding-left: 290px;
  #main {
    min-height: 100vh;
    padding: 50px 20px;
  }
`;

export default Layout;
