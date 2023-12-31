import { Box, Flex, Image } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ThumbnailImg_EventID = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/resources/${id}?populate=*`
    );
    // console.log(res.data.data.attributes.thumbnail.data.attributes.url);
    setData(res.data.data.attributes.top_full_width_img.data.attributes.url);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Box w={["100vw"]} maxW={"100%"} mt={["40px", "40px", "40px", "45px", "55px", "71px"]}>
        
        <Image
         w={"100%"}
        //  border={"1px"}
          height={["367px","367px","367px", "446px", "576px", "684px"]}
          objectFit={"cover"}
          src={`${process.env.REACT_APP_BACKEND_URL}${data}`}
        />
      </Box>
    </>
  );
};

export default ThumbnailImg_EventID;
