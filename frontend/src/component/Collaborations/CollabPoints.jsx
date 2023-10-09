import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const CollabPoints = () => {
  return (
    <>
      <Box>
        <Box
          margin={"auto"}
          mt={"8.19%"}
          // h={["114px"]}
          w={["100%", "100%", "52.12%", "52.12%"]}
        >
          <Text
            fontFamily={"Bossa-ExtendedBold"}
            textAlign={"center"}
            fontSize={["24px", "24px", "48px", "48px"]}
            fontWeight={700}
            lineHeight={"normal"}
          >
            Collaborate with{" "}
            <span style={{ color: "#00D2AA" }}>G42Healthcare?</span>
          </Text>
        </Box>

        {/* Points  */}
        <Box 
        margin={"3.94% 11.71% 0% 11.71%"}
        // w={["85vw","85vw","76vw","76vw"]}
         maxW={"100%"}  >
          {/* 1st Point  */}
          <Flex
            flexDir={["column", "column", "row", "row"]}
            w={"100%"}
            alignItems={["start", "start", "center", "center"]}
            justifyContent={"space-between"}
          >
            <Text
              fontFamily={"Bossa-ExtendedBold"}
              fontSize={["32px", "32px", "90px", "90px"]}
              fontWeight={700}
              letterSpacing={"-0.42px"}
              color={"black"}
              flexShrink={0}
            >
              01
            </Text>
            <Text
              fontFamily={"Bossa-ExtendedBold"}
              marginLeft={["0px", "0px", "16px", "16px"]}
              fontSize={["24px", "24px", "32px", "32px"]}
              fontWeight={700}
              letterSpacing={"-0.42px"}
              color={"black"}
              flexShrink={0}
            >
              Benefit 2-3 words
            </Text>
            <Text
              fontFamily={"Bossa-Light"}
              marginLeft={["0px", "0px", "61px", "61px"]}
              fontSize={["12px", "12px", "18px", "18px"]}
              fontWeight={300}
              letterSpacing={"-0.42px"}
              color={"#747272"}
            >
              Need content for these services: Max 3-4 lines. consectetur enim.
              adipiscing commodo urna elit. nisl. massa placerat. Morbi elit. id
              sapien at
            </Text>
          </Flex>

          <hr />

          {/* 2nd Point  */}

          <Flex
          
            flexDir={["column", "column", "row", "row"]}
            alignItems={["start", "start", "center", "center"]}
            w={"100%"}
            justifyContent={"space-between"}
          >
            <Text
            fontFamily={"Bossa-ExtendedBold"}
              fontSize={["32px", "32px", "90px", "90px"]}
              fontWeight={700}
              letterSpacing={"-0.42px"}
              color={"black"}
              flexShrink={0}
            >
              02
            </Text>
            <Text
            fontFamily={"Bossa-ExtendedBold"}
              marginLeft={["0px", "0px", "16px", "16px"]}
              fontSize={["24px", "24px", "32px", "32px"]}
              fontWeight={700}
              letterSpacing={"-0.42px"}
              color={"black"}
              flexShrink={0}
            >
              Benefit 2-3 words
            </Text>
            <Text
            fontFamily={"Bossa-Light"}
              marginLeft={["0px", "0px", "61px", "61px"]}
              fontSize={["12px", "12px", "18px", "18px"]}
              fontWeight={300}
              letterSpacing={"-0.42px"}
              color={"#747272"}
            >
              Need content for these services: Max 3-4 lines. consectetur enim.
              adipiscing commodo urna elit. nisl. massa placerat. Morbi elit. id
              sapien at
            </Text>
          </Flex>

          <hr />

          {/* 3rd Point  */}

          <Flex
            flexDir={["column", "column", "row", "row"]}
            w={"100%"}
            alignItems={["start", "start", "center", "center"]}
            justifyContent={"space-between"}
          >
            <Text
            fontFamily={"Bossa-ExtendedBold"}
              fontSize={["32px", "32px", "90px", "90px"]}
              fontWeight={700}
              letterSpacing={"-0.42px"}
              color={"black"}
              flexShrink={0}
            >
              03
            </Text>
            <Text
            fontFamily={"Bossa-ExtendedBold"}
              marginLeft={["0px", "0px", "16px", "16px"]}
              fontSize={["24px", "24px", "32px", "32px"]}
              // fontWeight={700}
              letterSpacing={"-0.42px"}
              color={"black"}
              flexShrink={0}
            >
              Benefit 2-3 words
            </Text>
            <Text
            fontFamily={"Bossa-Light"}
              marginLeft={["0px", "0px", "61px", "61px"]}
              fontSize={["12px", "12px", "18px", "18px"]}
              fontWeight={300}
              letterSpacing={"-0.42px"}
              color={"#747272"}
            >
              Need content for these services: Max 3-4 lines. consectetur enim.
              adipiscing commodo urna elit. nisl. massa placerat. Morbi elit. id
              sapien at
            </Text>
          </Flex>

          <hr />

        </Box>
      </Box>
    </>
  );
};

export default CollabPoints;
