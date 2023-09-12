import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";

const FeaturedJobs = () => {
  return (
    <>
      <Box margin={["125px 178px 0px 178px"]}>
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Text
            color={"black"}
            fontWeight={700}
            fontSize={["30px", "30px", "60px", "60px"]}
            fontStyle={"normal"}
          >
            Featured Jobs
          </Text>
          <Button
            borderRadius={"80px"}
            backgroundColor={"var(--Emergent-Green, #00D2AA)"}
            color={"white"}
            fontWeight={500}
            fontSize={["12px", "12px", "16px", "16px"]}
            fontStyle={"normal"}
          >
            More Jobs
          </Button>
        </Flex>
      </Box>
    </>
  );
};

export default FeaturedJobs;
