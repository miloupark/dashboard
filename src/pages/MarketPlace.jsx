import React from 'react';
import History from '../components/title/History';
import Title from '../components/title/Title';
import { Box } from '@chakra-ui/react';

const MarketPlace = () => {
  return (
    <>
    <Box pl="10px">
      <History pagename="MarketPlace"/>
      <Title title="MarketPlace" desc="이 페이지는 MarketPlace 페이지입니다."/>
    </Box>
    </>
  );
}

export default MarketPlace;