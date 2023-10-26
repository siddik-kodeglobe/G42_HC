import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";

const LoadMore_News = ({ onChangeLoadStatus }) => {
  return (
    <>
      <Box
        onClick={onChangeLoadStatus}
        border={"2px solid black"}
        w={"fit-content"}
        height={"fit-content"}
        margin={"auto"}
        mt={["56px"]}
        marginBottom={["165px"]}
        borderRadius={"80px"}
        cursor={"pointer"}
      >
        <Text
          fontSize={["16px"]}
          textTransform={"capitalize"}
          fontFamily={"Bossa-Regular"}
          padding={["15px 42px"]}
        >
          Load More
        </Text>
      </Box>
    </>
  );
};

export default LoadMore_News;
