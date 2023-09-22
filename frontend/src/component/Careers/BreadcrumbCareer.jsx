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
      <Breadcrumb mt={["111px", "111px", "164px", "164px"]} marginLeft={["20px", "20px", "61px", "61px"]}>
        <BreadcrumbItem>
          <BreadcrumbLink fontFamily={"Bossa-Light"} fontSize={["12px", "12px", "16px", "16px"]} href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>

       
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink fontFamily={"Bossa-Light"} fontSize={["12px", "12px", "16px", "16px"]} href="#">Career</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </>
  );
};

export default BreadcrumbCareer;
