import React from 'react';
import Title from '../components/title/Title';
import History from '../components/title/History';
import { Box } from '@chakra-ui/react';

const Home = () => {
  return (
    <>
    <Box pl="10px">
      <History pagename="Home"/>
      <Title title="Home" desc="이 페이지는 Home 페이지입니다."/>
    </Box>
    </>
  );
};

export default Home;
