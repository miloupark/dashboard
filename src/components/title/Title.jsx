import React from 'react'
import { Heading, VStack, Text } from '@chakra-ui/react'

const Title = (props) => {
  return (
    <VStack alignItems={'flex-start'} spacing={4}>
      <Heading as={'h2'} fontSize={'34px'}fontWeight={700}color={"white_eee"}>{props.title}</Heading>
      <Text variant={'txt164'}>{props.desc}</Text>
    </VStack>
  );
};

export default Title;