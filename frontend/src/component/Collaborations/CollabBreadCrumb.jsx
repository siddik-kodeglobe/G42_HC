import React from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";

const CollabBreadCrumb = () => {
  return (
    <div>
      <Box
        zIndex={-14}
        w={"100vw"}
        maxW={"100%"}
        padding={[
          "114px 0px 0px 4.01%",
          "114px 0px 0px 4.01%",
          "114px 0px 0px 4.01%",
          "107px 0px 0px 4.01%",
          "138px 0px 0px 4.01%",
          "164px 0px 0px 4.01%",
        ]}
      >
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink
              _hover={{ textDecor: "none" }}
              fontFamily={"Bossa-Light"}
              fontSize={["12px", "12px", "16px", "16px", "18px", "16px"]}
              href="/"
            >
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink
              _hover={{ textDecor: "none" }}
              fontFamily={"Bossa-Light"}
              fontSize={["12px", "12px", "16px", "16px", "18px", "16px"]}
              href="#"
            >
              Collaboration
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
    </div>
  );
};

export default CollabBreadCrumb;
