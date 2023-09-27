import React from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";

const Breadcrumb_AU = () => {
  return (
    <Box
      zIndex={-14}
      padding={[
        "115px 0px 0px 20px",
        "115px 0px 0px 20px",
        "115px 60px 0px 60px",
        "115px 60px 0px 60px",
      ]}
    >
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink
            fontSize={["12px", "12px", "16px", "16px"]}
            fontFamily={"Bossa-Light"}
            href="/"
          >
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink
            fontSize={["12px", "12px", "16px", "16px"]}
            fontFamily={"Bossa-Light"}
            href="/about"
          >
            About G42 Heathcare
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </Box>
  );
};

export default Breadcrumb_AU;
