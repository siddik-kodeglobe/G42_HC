import { Box, Image, SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FourImg_CS = () => {
    const {caseStudyId} = useParams()
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [third, setThird] = useState("");
  const [fourth, setFourth] = useState("");

  const getData = async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/case-studies/${caseStudyId}?populate=*`
    );
    setFirst(res.data.data.attributes.img1_50percentW.data.attributes.url);
    setSecond(res.data.data.attributes.img2_50percentW.data.attributes.url);
    setThird(res.data.data.attributes.img3_50percentW.data.attributes.url);
    setFourth(res.data.data.attributes.img4_50percentW.data.attributes.url);
    
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Box w={"100vw"} maxW={"100%"} padding={["36px 20px 0px 20px", "36px 20px 0px 20px", "36px 20px 0px 20px", "81px 4.01% 0px 4.01%", "105px 4.01% 0px 4.01%", "125px 4.01% 0px 4.01%", ]}>
        <SimpleGrid gap={["20px"]} columns={[1,1,1,2,2,2]}>
            <Image w={"100%"} maxW={["100%"]} h={["315px", "315px", "315px", "329px", "425px", "510px"]} objectFit={"cover"} src={`${process.env.REACT_APP_BACKEND_URL}${first}`}/>
            <Image w={"100%"} maxW={["100%"]} h={["315px", "315px", "315px", "329px", "425px", "510px"]} objectFit={"cover"} src={`${process.env.REACT_APP_BACKEND_URL}${second}`}/>
            <Image w={"100%"} maxW={["100%"]} h={["315px", "315px", "315px", "329px", "425px", "510px"]} objectFit={"cover"} src={`${process.env.REACT_APP_BACKEND_URL}${third}`}/>
            <Image w={"100%"} maxW={["100%"]} h={["315px", "315px", "315px", "329px", "425px", "510px"]} objectFit={"cover"} src={`${process.env.REACT_APP_BACKEND_URL}${fourth}`}/>
        </SimpleGrid>
      </Box>
    </>
  );
};

export default FourImg_CS;
