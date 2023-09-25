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
      `${process.env.REACT_APP_BACKEND_URL}/api/resources/${caseStudyId}?populate=*`
    );
    // console.log(res.data.data.attributes.Heading_1);
    setData(res.data.data.attributes.Heading_1);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Box fontFamily={"Bossa-Light"} margin={["20px 20px 0px 20px","20px 20px 0px 20px", "119px 414px 0px 178px", "119px 414px 0px 178px"]}>
        <ReactMarkdown children={data} />
      </Box>
    </>
  );
};

export default Heading1;
