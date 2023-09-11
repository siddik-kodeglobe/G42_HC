import { Box, Image } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MainImg_CS = () => {
  const { caseStudyId } = useParams();
  const [rdata, setData] = useState([]);

  const getData = async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/case-studies/${caseStudyId}?populate=*`
    );
    // console.log(res.data.data.attributes.image_FullWidth.data.attributes.url);
    setData(res.data.data.attributes.image_FullWidth.data.attributes.url);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Box mt={"71.64px"}>
        <Image
        margin={"auto"}
          w={["90vw"]}
          maxW={"100%"}
          height={["400px"]}
          objectFit={"cover"}
          src={`${process.env.REACT_APP_BACKEND_URL}${rdata}`}
        />
      </Box>
    </>
  );
};

export default MainImg_CS;
