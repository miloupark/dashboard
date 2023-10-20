import { Card, CardHeader, CardBody, Heading, Image, HStack, Progress, Text, Flex} from '@chakra-ui/react'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
} from '@chakra-ui/react'
import apple from '../../assets/images/tables/apple.svg';
import android from '../../assets/images/tables/android.svg';
import windows from '../../assets/images/tables/windows.svg';

const data = [
  {
    title: 'Marketplace',
    image: [
      {
        src: apple, 
        alt:'apple',
      },
      {
        src: android,
        alt: 'android'
      },
      {
        src: windows,
        alt: 'windows'
      },
    ],
    number: 25.4,
    percentage: 75.5,
  },
  {
    title: 'Marketplace',
    image: [
      {
        src: apple, 
        alt:'apple',
      },
      {
        src: android,
        alt: 'android'
      },
      {
        src: windows,
        alt: 'windows'
      },
    ],
    number: 25.4,
    percentage: 75.5,
  },
];

const Development = () => {
  return (
    <Card>
    <CardHeader>
      <Heading size='md'>Client Report</Heading>
    </CardHeader>
  
    <CardBody py={2} px={5}>
    <TableContainer overflowX={"hidden"} overflowY={"auto"} maxHeight={"400px"}>
    {/* size={['sm','md','lg']} */}
    {/* 반응형 = 모바일, 태블릿, 데스크탑 */}
      <Table variant='simple'>
        <TableCaption>Development Table</TableCaption>
        <Thead>
          <Tr>
            <Th>Title</Th>
            <Th>Title</Th>
            <Th>Title</Th>
            <Th isNumeric>Title</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item, index) => (
            <Tr key={index}>
             <Td>{item.title}</Td>
             <Td>
               <HStack spacing={1} alignItems={'center'}>
                {item.image.map((images, i) => (
                  <Image key={i} src={images.src} alt={images.alt}/>
                ))}
               </HStack>
             </Td>
             <Td>
              <HStack/>{item.number}
             <Td>
              <Flex>

              <Box w="32px" textAlign={'right'}>
              {item.percentage}
              </Box>
             <Text variant="txt104" color= "#999">
                %
             </Text>
             <Progress value={80}/>
              </Flex>
             </Td>
           </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
    </CardBody>
    </Card>
  );
};

export default Development;