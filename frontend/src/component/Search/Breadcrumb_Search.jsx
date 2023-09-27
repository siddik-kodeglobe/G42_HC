import React from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";

const Breadcrumb_Search = () => {
  return (
    <>
      <Box
        zIndex={-14}
        padding={[
          "115px 0px 0px 20px",
          "115px 60px 0px 60px",
          "115px 60px 0px 60px",
        ]}
      >
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink fontFamily={"Bossa-Light"} href="/">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink fontFamily={"Bossa-Light"} href="#">
              Search
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
    </>
  );
};

export default Breadcrumb_Search;
