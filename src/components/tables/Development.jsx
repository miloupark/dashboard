import { Card, CardHeader, CardBody, Heading} from '@chakra-ui/react'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'

const Development = () => {
  return (
    <Card>
    <CardHeader>
      <Heading size='md'>Client Report</Heading>
    </CardHeader>
  
    <CardBody>
    <TableContainer>
    {/* size={['sm','md','lg']} */}
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
          <Tr>
            <Td>Marketplace</Td>
            <Td>icon</Td>
            <Td>12.Jan.2021</Td>
            <Td isNumeric>75.5%</Td>
          </Tr>
          <Tr>
            <Td>Marketplace</Td>
            <Td>icon</Td>
            <Td>12.Jan.2021</Td>
            <Td isNumeric>75.5%</Td>
          </Tr>
          <Tr>
            <Td>Marketplace</Td>
            <Td>icon</Td>
            <Td>12.Jan.2021</Td>
            <Td isNumeric>75.5%</Td>
          </Tr>
          <Tr>
            <Td>Marketplace</Td>
            <Td>icon</Td>
            <Td>12.Jan.2021</Td>
            <Td isNumeric>75.5%</Td>
          </Tr>
          <Tr>
            <Td>Marketplace</Td>
            <Td>icon</Td>
            <Td>12.Jan.2021</Td>
            <Td isNumeric>75.5%</Td>
          </Tr>
          <Tr>
            <Td>Marketplace</Td>
            <Td>icon</Td>
            <Td>12.Jan.2021</Td>
            <Td isNumeric>75.5%</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
    </CardBody>
    </Card>
  );
};

export default Development;