import React, { useEffect, useState } from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Breadcrumb_EventsID = () => {
    const {id} = useParams();
    const [data, setData] = useState([]);
    
    const getData = async () => {
        const res = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/resources/${id}?populate=*`
        );
        // console.log(res.data.data);
        setData(res.data.data.attributes);
      };

    useEffect(() => {
        getData();
    }, []);
  return (
    <>
         <Box w={"100vw"} maxW={"100%"}>
        <Breadcrumb w={"100%"} padding={["114px 20px 0px 20px", "114px 20px 0px 20px", "114px 20px 0px 20px", "107px 3.94% 0px 3.94%", "139px 3.94% 0px 3.94%", "165px 3.94% 0px 3.94%"]}>
          <BreadcrumbItem>
            <BreadcrumbLink _hover={{textDecor: "none"}} fontSize={["12px", "12px", "12px", "14px", "15px", "16px"]} fontFamily={"Bossa-Light"} href="/">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink _hover={{textDecor: "none"}} fontSize={["12px", "12px", "12px", "14px", "15px", "16px"]} fontFamily={"Bossa-Light"} href="/resources">
              Resources
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink _hover={{textDecor: "none"}} fontSize={["12px", "12px", "12px", "14px", "15px", "16px"]} fontFamily={"Bossa-Light"} href="#">
            {data.heading}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
    </>
  )
}

export default Breadcrumb_EventsID