import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const BreadcrumbCareer = () => {
  return (
    <>
      <Breadcrumb mt={["164px"]} marginLeft={["61px"]}>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>

       
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">Career</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </>
  );
};

export default BreadcrumbCareer;
