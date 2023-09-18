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
      <Box zIndex={-14} padding={["115px 0px 0px 20px", "115px 60px 0px 60px", "115px 60px 0px 60px"]}>
        <Breadcrumb>
          <BreadcrumbItem >
            <BreadcrumbLink  href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">What We Do</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
    </>
  );
};

export default BreadCrumb;
