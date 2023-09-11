import { Box, Flex, Image } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ThumbnailImg_NewsID = () => {
  const { newsId } = useParams();
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/news-plural/${newsId}?populate=*`
    );
    // console.log(res.data.data.attributes.thumbnail.data.attributes.url);
    setData(res.data.data.attributes.thumbnail.data.attributes.url);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Box w={["100vw"]} maxW={"100%"} mt={"71.64px"}>
        
        <Image
          w={["100vw"]}
          maxW={"100%"}
          height={["684px"]}
          objectFit={"cover"}
          src={`${process.env.REACT_APP_BACKEND_URL}${data}`}
        />
      </Box>
    </>
  );
};

export default ThumbnailImg_NewsID;
