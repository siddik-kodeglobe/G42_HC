import React from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const BreadCrumbCaseStudy = () => {
  const { caseStudyId } = useParams();
  return (
    <>
      <Box w={"100vw"} maxW={"100%"}>
        <Breadcrumb w={"100%"} padding={["114px 20px 0px 20px", "114px 20px 0px 20px", "114px 20px 0px 20px", "107px 3.94% 0px 3.94%", "139px 3.94% 0px 3.94%", "165px 3.94% 0px 3.94%"]}>
          <BreadcrumbItem fontSize={["12px", "12px", "12px", "14px", "15px", "16px"]}>
            <BreadcrumbLink _hover={{textDecor: "none"}} fontFamily={"Bossa-Light"} href="/">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>


          <BreadcrumbItem fontSize={["12px", "12px", "12px", "14px", "15px", "16px"]}>
            <BreadcrumbLink _hover={{textDecor: "none"}} fontFamily={"Bossa-Light"} href="/">
              Resources
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem fontSize={["12px", "12px", "12px", "14px", "15px", "16px"]}>
            <BreadcrumbLink _hover={{textDecor: "none"}} fontFamily={"Bossa-Light"} href="#">
              Case Studies
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem
            _hover={{textDecor: "none"}} fontFamily={"Bossa-Light"}
            fontSize={["12px", "12px", "12px", "14px", "15px", "16px"]}
            isCurrentPage
          >
            <BreadcrumbLink href="#">Title</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
    </>
  );
};

export default BreadCrumbCaseStudy;
