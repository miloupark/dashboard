import React from 'react';
import Title from '../components/title/Title';
import History from '../components/title/History';
import { Box, Stack } from '@chakra-ui/react';
import { Grid, GridItem } from '@chakra-ui/react'

const Tables = () => {
  return (
    <Stack flexGrow={1}>
    <Box pl="10px">
      <History pagename="tables"/>
      <Title title="Tables" desc="이 페이지는 tables 페이지입니다."/>
    </Box>
    <Grid
      h='200px'
      templateColumns='repeat(5, 1fr)'
      gap={4}
      >
      <GridItem colSpan={2} bg='papayawhip' />
      <GridItem colSpan={2} bg='papayawhip' />
      <GridItem colSpan={2} bg='tomato' />
      <GridItem colSpan={2} bg='tomato' />
    </Grid>
    </Stack>
  );
}

export default Tables;