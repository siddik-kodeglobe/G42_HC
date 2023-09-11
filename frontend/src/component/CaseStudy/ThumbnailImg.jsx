import { Box, Image } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ThumbnailImg = () => {
  const { caseStudyId } = useParams();
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/case-studies/${caseStudyId}?populate=*`
    );
    // console.log(res.data.data.attributes.thumbnail.data.attributes.url);
    setData(res.data.data.attributes.thumbnail.data.attributes.url);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Box mt={"71.64px"}>
        <Image
          w={["100vw"]}
          maxW={"100%"}
          height={["683px"]}
          objectFit={"cover"}
          src={`${process.env.REACT_APP_BACKEND_URL}${data}`}
        />
      </Box>
    </>
  );
};

export default ThumbnailImg;
