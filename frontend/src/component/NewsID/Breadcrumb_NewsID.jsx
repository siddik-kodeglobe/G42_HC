import React from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const Breadcrumb_NewsID = () => {
  return (
    <>
      <Box w={"100vw"} maxW={"100%"}>
        <Breadcrumb w={"100%"} padding={["114px 20px 0px 20px", "114px 20px 0px 20px", "114px 20px 0px 20px", "107px 3.94% 0px 3.94%", "139px 3.94% 0px 3.94%", "165px 3.94% 0px 3.94%"]}>
          <BreadcrumbItem>
            <BreadcrumbLink _hover={{textDecor: "none"}} fontSize={["12px", "12px", "12px", "14px", "15px", "16px"]} fontFamily={"Bossa-Light"} href="/">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink _hover={{textDecor: "none"}} fontSize={["12px", "12px", "12px", "14px", "15px", "16px"]} fontFamily={"Bossa-Light"} href="/news">
              News
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink _hover={{textDecor: "none"}} fontSize={["12px", "12px", "12px", "14px", "15px", "16px"]} fontFamily={"Bossa-Light"} href="#">
              Title
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
    </>
  );
};

export default Breadcrumb_NewsID;
