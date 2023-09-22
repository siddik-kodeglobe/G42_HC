import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";

const FeaturedJobs = () => {
  return (
    <>
      <Box margin={["80px 20px 0px 20px", "125px 178px 0px 178px", "125px 178px 0px 178px"]}>
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Text
          fontFamily={"Bossa-ExtendedBold"}
            color={"black"}
            fontWeight={700}
            fontSize={["30px", "30px", "60px", "60px"]}
            fontStyle={"normal"}
          >
            Featured Jobs
          </Text>
          <Button
          fontFamily={"Bossa-ExtendedMedium"}
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
