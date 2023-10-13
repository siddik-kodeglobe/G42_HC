import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";

const FeaturedJobs = () => {
  return (
    <>
      <Box w={"100%"}>
        <Flex
          w={"100%"}
          padding={[
            "80px 20px 0px 20px",
            "80px 4.01% 0px 4.01%",
            "80px 4.01% 0px 4.01%",
            "81px 11.71% 0px 11.71%",
            "105px 11.71% 0px 11.71%",
            "125px 11.71% 0px 11.71%",
          ]}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Text
            fontFamily={"Bossa-ExtendedBold"}
            color={"black"}
            fontWeight={700}
            fontSize={["30px", "30px", "30px", "40px", "50px", "60px"]}
            fontStyle={"normal"}
          >
            Featured Jobs
          </Text>
          <Button
            fontFamily={"Bossa-ExtendedMedium"}
            borderRadius={"80px"}
            padding={"15px 30px"}
            backgroundColor={"var(--Emergent-Green, #00D2AA)"}
            color={"white"}
            _hover={{backgroundColor: "var(--Emergent-Green, #00D2AA)"}}
            fontWeight={500}
            fontSize={["12px", "12px", "12px", "14px", "15px", "16px"]}
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
