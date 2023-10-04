import { Box } from "@chakra-ui/react";
import React from "react";
import Footer from "../Footer/Footer";

const Footer_News = () => {
  return (
    <>
      <Box
        borderTop={"1px solid #D9D9D9"}
        paddingTop={"55px"}
        margin={["0px 22px 0px 22px","0px 22px 0px 22px","0px 174px 0px 174px","0px 174px 0px 174px"]}
      >
        <Footer />
      </Box>
    </>
  );
};

export default Footer_News;
