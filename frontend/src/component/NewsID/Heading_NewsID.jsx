import { Box, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const Heading_NewsID = () => {
  const { newsId } = useParams();
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/news-plural/${newsId}?populate=*`
    );
    // console.log(res.data.data.attributes.Heading_1);
    setData(res.data.data.attributes.content);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Box fontFamily={"Bossa-Light"} margin={["20px 20px 0px 20px", "119px 414px 0px 178px", "119px 414px 0px 178px"]}>
        <ReactMarkdown children={data} />
      </Box>
    </>
  );
};

export default Heading_NewsID;
