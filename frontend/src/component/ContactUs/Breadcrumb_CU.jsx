import React from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const Breadcrumb_CU = () => {
  return (
    <>
      <Box
        w={"100%"}
        maxW={"100%"}
        padding={[
          "115px 20px 0px 20px",
          "115px 4.01% 0px 4.01%",
          "115px 4.01% 0px 4.01%",
          "115px 4.01% 0px 4.01%",
          "140px 4.01% 0px 4.01%",
          "165px 4.01% 0px 4.01%",
        ]}
      >
        <Breadcrumb>
          <BreadcrumbItem 
          _hover={{textDecor: "none"}}
          fontSize={["12px", "14px","14px","14px", "15px", "16px"]}>
            <BreadcrumbLink fontFamily={"Bossa-Light"} href="/">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem
          _hover={{textDecor: "none"}}
          fontSize={["12px", "14px","14px","14px", "15px", "16px"]}
            isCurrentPage
          >
            <BreadcrumbLink fontFamily={"Bossa-Light"} href="#">
              Contact Us
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
    </>
  );
};

export default Breadcrumb_CU;
