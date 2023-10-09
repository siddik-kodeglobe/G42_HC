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
        <Box zIndex={-14} 
        // w={"100vw"} maxW={"100%"}
        padding={"10.83% 0px 0px 4.01%"}
        // padding={["115px 0px 0px 20px", "115px 0px 0px 20px", "115px 60px 0px 60px", "115px 60px 0px 60px"]}
        >
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink fontSize={["16px"]} _hover={{textDecor: "none"}} href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink fontSize={["16px"]} _hover={{textDecor: "none"}} href="#">Collaborations</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
    </div>
  )
}

export default CollabBreadCrumb