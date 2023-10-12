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
    w={"100vw"}
    maxW={"100%"}
      zIndex={-14}
      padding={[
        "115px 20px 0px 20px",
        "115px 20px 0px 20px",
        "115px 20px 0px 20px",
        "107px 11.71% 0px 3.94%",
        "138px 11.71% 0px 3.94%",
        "165px 11.71% 0px 3.94%",
      ]}
    >
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink
          _hover={{textDecor: "none"}}
            fontSize={["12px", "12px","12px", "12px", "14px", "16px"]}
            fontFamily={"Bossa-Light"}
            href="/"
          >
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink
          _hover={{textDecor: "none"}}
          fontSize={["12px", "12px","12px", "12px", "14px", "16px"]}
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
