import React from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { Link } from 'react-router-dom';


const History = ({ pagename }) => {
  // const { pagename } = props;

  return (
    <Breadcrumb color="white_eee" fontSize="14px" fontWeight="500">
    <BreadcrumbItem>
      <BreadcrumbLink as={Link} to='/'>
        Home
      </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbItem isCurrentPage>
      <BreadcrumbLink as={Link} to={`/${pagename.toLowerCase()}`}>
        {pagename}
      </BreadcrumbLink>
    </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default History;