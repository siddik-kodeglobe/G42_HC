import React from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const BreadcrumbCareer = () => {
  return (
    <>
    <Box w={"100vw"} maxW={"100%"}>
      <Breadcrumb w={"100%"} padding={["114px 20px 0px 20px", "114px 4.01% 0px 4.01%", "114px 4.01% 0px 4.01%", "107px 4.01% 0px 4.01%", "139px 4.01% 0px 4.01%", "165px 4.01% 0px 4.01%"]}>
        <BreadcrumbItem>
          <BreadcrumbLink fontFamily={"Bossa-Light"} fontSize={["12px", "12px","12px","14px", "15px", "16px"]} href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>

       
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink fontFamily={"Bossa-Light"} fontSize={["12px", "12px","12px","14px", "15px", "16px"]} href="#">Career</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      </Box>
    </>
  );
};

export default BreadcrumbCareer;
