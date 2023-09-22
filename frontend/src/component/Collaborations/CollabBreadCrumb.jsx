import React from 'react';
import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
  } from "@chakra-ui/react";
  

const CollabBreadCrumb = () => {
  return (
    <div>
        <Box zIndex={-14} padding={["115px 0px 0px 20px", "115px 0px 0px 20px", "115px 60px 0px 60px", "115px 60px 0px 60px"]}>
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">Collaborations</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
    </div>
  )
}

export default CollabBreadCrumb