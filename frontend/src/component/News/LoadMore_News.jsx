import { Box, Button } from "@chakra-ui/react";
import React from "react";

const LoadMore_News = ({ onChangeLoadStatus }) => {
  return (
    <>
      <Box

        onClick={onChangeLoadStatus}
        fontSize={["16px"]}
        textTransform={"capitalize"}
        fontFamily={"Bossa-Regular"}
        border={"1px solid black"}
        padding={["21px 42px"]}
        w={"fit-content"}
        margin={"auto"}
        mt={["56px"]}
        mb={["165px"]}
        borderRadius={"80px"}
        cursor={"pointer"}
      >
        Load More
      </Box>
    </>
  );
};

export default LoadMore_News;
