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
      padding={["114px 0px 0px 20px","114px 0px 0px 20px","114px 0px 0px 20px","114px 0px 0px 3.94%","118px 0px 0px 3.94%","141px 0px 0px 3.94%"]}
      // padding={["115px 0px 0px 20px", "115px 60px 0px 60px", "115px 60px 0px 60px"]}
      >
        <Breadcrumb>
          <BreadcrumbItem >
            <BreadcrumbLink _hover={{textDecor: "none"}} fontSize={["12px", "12px", "12px", "14px", "16px", "16px"]} fontFamily={"Bossa-Light"} href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink _hover={{textDecor: "none"}} fontSize={["12px", "12px", "12px", "14px", "16px", "16px"]} fontFamily={"Bossa-Light"} href="#">What We Do</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
    </>
  );
};

export default BreadCrumb;
