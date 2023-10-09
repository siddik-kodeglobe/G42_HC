import React from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";

const BreadCrumb = () => {
  return (
    <>
      <Box 
      w={"100vw"}
      maxW={"100%"}
      zIndex={-14}
      padding={"9.12% 0% 2.16% 4%"} 
      // padding={["115px 0px 0px 20px", "115px 60px 0px 60px", "115px 60px 0px 60px"]}
      >
        <Breadcrumb>
          <BreadcrumbItem >
            <BreadcrumbLink fontSize={"18px"} fontFamily={"Bossa-Light"} href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink fontSize={"18px"} fontFamily={"Bossa-Light"} href="#">What We Do</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
    </>
  );
};

export default BreadCrumb;
