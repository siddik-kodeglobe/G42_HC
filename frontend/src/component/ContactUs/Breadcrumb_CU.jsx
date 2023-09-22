import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const Breadcrumb_CU = () => {
  return (
    <>
      <Breadcrumb mt={["114px", "114px", "164px", "164px"]} marginLeft={["20px", "20px", "61px", "61px"]}>
        <BreadcrumbItem fontSize={["12px", "12px", "16px", "16px"]}>
          <BreadcrumbLink fontFamily={"Bossa-Light"} href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>

       
        <BreadcrumbItem fontSize={["12px", "12px", "16px", "16px"]} isCurrentPage>
          <BreadcrumbLink fontFamily={"Bossa-Light"} href="#">Contact Us</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </>
  );
};

export default Breadcrumb_CU;
