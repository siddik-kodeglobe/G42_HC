import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const BreadCrumbCaseStudy = () => {
    const {caseStudyId} = useParams();
  return (
    <>
      <Breadcrumb mt={["164px"]} marginLeft={["61px"]}>
        <BreadcrumbItem fontSize={["12px", "12px", "16px", "16px"]}>
          <BreadcrumbLink fontFamily={"Bossa-Light"} href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem fontSize={["12px", "12px", "16px", "16px"]}>
          <BreadcrumbLink fontFamily={"Bossa-Light"} href="/">Resources</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem fontSize={["12px", "12px", "16px", "16px"]}>
          <BreadcrumbLink fontFamily={"Bossa-Light"} href="#">Case Studies</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem fontFamily={"Bossa-Light"} fontSize={["12px", "12px", "16px", "16px"]} isCurrentPage>
          <BreadcrumbLink href="#">Title</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </>
  );
};

export default BreadCrumbCaseStudy;
