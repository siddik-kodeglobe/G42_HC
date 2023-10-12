import React from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";

const NewsBreadcrumb = () => {
  return (
    <>
      <Box padding={["114px 0px 0px 20px", "114px 0px 0px 20px", "114px 0px 0px 20px", "107px 0px 0px 3.94%", "138px 0px 0px 3.94%", "165px 0px 0px 3.94%"]}>
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink _hover={{textDecor: "none"}} fontSize={["12px", "12px", "12px", "14px", "15px", "16px"]} fontFamily={"Bossa-Light"} href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink fontSize={["12px", "12px", "12px", "14px", "15px", "16px"]} fontFamily={"Bossa-Light"} href="#">News</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
    </>
  );
};

export default NewsBreadcrumb;
