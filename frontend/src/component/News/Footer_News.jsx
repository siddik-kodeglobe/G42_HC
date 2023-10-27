import { Box } from "@chakra-ui/react";
import React from "react";
import Footer from "../Footer/Footer";

const Footer_News = () => {
  return (
    <>
    <Box w={"100vw"} maxW={"100%"}>
      <Box
        borderTop={"1px solid #D9D9D9"}
        w={"100%"}
        padding={[
          "40px 20px 18px 20px",
          "55px 11.71% 29px 11.71%",
          "55px 11.71% 29px 11.71%",
          "55px 11.71% 29px 11.71%",
          "55px 11.71% 29px 11.71%",
          "55px 11.71% 29px 11.71%",
        ]}
      >
        <Footer />
      </Box>
      </Box>
    </>
  );
};

export default Footer_News;
