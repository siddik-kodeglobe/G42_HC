import { Box, Image } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MainImg_CS = () => {
  const { caseStudyId } = useParams();
  const [rdata, setData] = useState([]);

  const getData = async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/resources/${caseStudyId}?populate=*`
    );
    // console.log(res.data.data.attributes.image_FullWidth.data.attributes.url);
    setData(res.data.data.attributes.full_width_img_CS.data.attributes.url);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Box w={"100vw"} maxW={"100%"} padding={["36px 20px 0px 20px", "36px 20px 0px 20px", "36px 20px 0px 20px", "66px 4.01% 0px 4.01%", "85px 4.01% 0px 4.01%", "102px 4.01% 0px 4.01%", ]}>
        <Image
        w={"100%"}
        margin={"auto"}
        height={["151px", "390px", "390px", "390px", "504px", "598px"]}
          objectFit={"cover"}
          src={`${process.env.REACT_APP_BACKEND_URL}${rdata}`}
        />
      </Box>
    </>
  );
};

export default MainImg_CS;
