import React from 'react';
import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
  } from "@chakra-ui/react";
  

const BreadCrumb = () => {
  return (
    <div>
        <Box zIndex={-14} padding={["115px 0px 0px 20px", "115px 0px 0px 20px", "115px 60px 0px 60px", "115px 60px 0px 60px"]}>
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink fontFamily={"Bossa-Light"} fontSize={["12px","12px","16px","16px"]} href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink fontFamily={"Bossa-Light"} fontSize={["12px","12px","16px","16px"]} href="#">Resources</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
    </div>
  )
}

export default BreadCrumb