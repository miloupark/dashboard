import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react'
import Layout from '../components/layout/Layout';
import Development from '../components/tables/Development';

const Tables = () => {
  return (
    <Layout title="Tables" pagename={'Tables'}>
      <Grid 
        h={"calc(100vh - 50px * 2 - 97px)"}
        templateColumns='repeat(2, 1fr)'
        templateRows='repeat(2, 1fr)'
        gap={4}
        >
        <GridItem bg='black'>
        <Development/>
        </GridItem>
        <GridItem bg='papayawhip' />
        <GridItem bg='tomato' />
        <GridItem bg='black' />
      </Grid>
    </Layout>
  );
}

export default Tables;