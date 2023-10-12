import { Box, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const Heading1 = () => {
  const { caseStudyId } = useParams();
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/case-studies/${caseStudyId}?populate=*`
    );
    // console.log(res.data.data.attributes.Heading_1);
    setData(res.data.data.attributes.Heading_1);
  };



  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Box padding={["20px 20px 0px 20px", "20px 20px 0px 20px", "20px 20px 0px 20px", "42px 27.71% 0px 11.71%", "52px 27.71% 0px 11.71%", "62px 27.71% 0px 11.71%"]}
      fontFamily={"Bossa-Light"} w={"100vw"} maxW={"100%"} >
        <ReactMarkdown children={data} />
      </Box>
    </>
  );
};

export default Heading1;
