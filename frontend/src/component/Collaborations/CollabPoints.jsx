import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const CollabPoints = () => {
  return (
    <>
      <Box>
        <Box margin={"auto"} mt={["124px"]} h={["114px"]} w={["793px"]}>
          <Text
            textAlign={"center"}
            fontSize={["48px"]}
            fontWeight={700}
            lineHeight={"normal"}
          >
            Collaborate with{" "}
            <span style={{ color: "#00D2AA" }}>G42Healthcare?</span>
          </Text>
        </Box>

        {/* Points  */}
        <Box w={["76vw"]} maxW={"100%"} margin={"auto"} mt={"60px"}>
            
            {/* 1st Point  */}
            <Flex w={"100%"} alignItems={"center"} justifyContent={"space-between"}>
                <Text fontSize={["90px"]} fontWeight={700} letterSpacing={"-0.42px"} color={"black"} flexShrink={0}>01</Text>
                <Text marginLeft={"16px"} fontSize={["32px"]} fontWeight={700} letterSpacing={"-0.42px"} color={"black"} flexShrink={0}>Benefit 2-3 words</Text>
                <Text marginLeft={"61px"} fontSize={["18px"]} fontWeight={300} letterSpacing={"-0.42px"} color={"#747272"}>Need content for these services: Max 3-4 lines. consectetur enim. adipiscing commodo urna elit. nisl. massa placerat. Morbi elit. id sapien at</Text>
            </Flex>

            <hr />

            {/* 2nd Point  */}

            <Flex w={"100%"} alignItems={"center"} justifyContent={"space-between"}>
                <Text fontSize={["90px"]} fontWeight={700} letterSpacing={"-0.42px"} color={"black"} flexShrink={0}>02</Text>
                <Text marginLeft={"16px"} fontSize={["32px"]} fontWeight={700} letterSpacing={"-0.42px"} color={"black"} flexShrink={0}>Benefit 2-3 words</Text>
                <Text marginLeft={"61px"} fontSize={["18px"]} fontWeight={300} letterSpacing={"-0.42px"} color={"#747272"}>Need content for these services: Max 3-4 lines. consectetur enim. adipiscing commodo urna elit. nisl. massa placerat. Morbi elit. id sapien at</Text>
            </Flex>

            <hr />

            {/* 3rd Point  */}

            <Flex w={"100%"} alignItems={"center"} justifyContent={"space-between"}>
                <Text fontSize={["90px"]} fontWeight={700} letterSpacing={"-0.42px"} color={"black"} flexShrink={0}>03</Text>
                <Text marginLeft={"16px"} fontSize={["32px"]} fontWeight={700} letterSpacing={"-0.42px"} color={"black"} flexShrink={0}>Benefit 2-3 words</Text>
                <Text marginLeft={"61px"} fontSize={["18px"]} fontWeight={300} letterSpacing={"-0.42px"} color={"#747272"}>Need content for these services: Max 3-4 lines. consectetur enim. adipiscing commodo urna elit. nisl. massa placerat. Morbi elit. id sapien at</Text>
            </Flex>

        </Box>
      </Box>
    </>
  );
};

export default CollabPoints;
