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
      <Box padding={"115px 60px 0px 60px"}>
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink fontFamily={"Bossa-Light"} href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink fontFamily={"Bossa-Light"} href="#">News</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
    </>
  );
};

export default NewsBreadcrumb;
