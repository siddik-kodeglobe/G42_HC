import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const Breadcrumb_NewsID = () => {
  return (
    <>
      <Breadcrumb mt={["164px"]} marginLeft={["61px"]}>
        <BreadcrumbItem>
          <BreadcrumbLink fontFamily={"Bossa-Light"} href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink fontFamily={"Bossa-Light"} href="/news">News</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink fontFamily={"Bossa-Light"} href="#">Title</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </>
  );
};

export default Breadcrumb_NewsID;
