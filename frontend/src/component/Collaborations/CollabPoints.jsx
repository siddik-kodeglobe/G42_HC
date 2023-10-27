import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const CollabPoints = () => {
  return (
    <>
      <Box w={"100vw"} maxW={"100%"}>
        <Box
          padding={[
            "80px 20px 12px 20px",
            "80px 20px 12px 20px",
            "80px 20px 12px 20px",
            "81px 11.71% 0px 11.71%",
            "105px 11.71% 0px 11.71%",
            "125px 11.71% 0px 11.71%",
          ]}
          w={"100%"}
        >
          <Text
            fontFamily={"Bossa-ExtendedBold"}
            textAlign={"center"}
            fontSize={["24px", "24px", "24px", "48px", "48px"]}
            fontWeight={700}
            lineHeight={"normal"}
          >
            Collaborate with <br />
            <span style={{ color: "#00D2AA" }}>G42Healthcare?</span>
          </Text>
        </Box>

        {/* Points  */}
        <Box
          w={"100%"}
          padding={[
            "50px 20px 80px 20px",
            "50px 11.71% 80px 11.71%",
            "50px 11.71% 80px 11.71%",
            "81px 11.71% 0px 11.71%",
            "105px 11.71% 0px 11.71%",
            "125px 11.71% 0px 11.71%",
          ]}
        >
          {/* 1st Point  */}
          <Flex
            flexDir={["column", "row", "row", "row", "row", "row"]}
            w={"100%"}
            alignItems={[
              "start",
              "start",
              "start",
              "center",
              "center",
              "center",
            ]}
            gap={["16px", "16px", "16px", "34px", "44px", "50px"]}
          >
            <Text
              w={["129px"]}
              fontSize={["32px", "32px", "32px", "40px", "50px", "60px"]}
              fontFamily={"Bossa-ExtendedBold"}
              fontWeight={700}
              letterSpacing={"-0.42px"}
              color={"black"}
              flexShrink={0}
            >
              01
            </Text>
            <Text
              w={["100%", "45.86%", "45.86%", "45.86%", "45.86%", "45.86%"]}
              fontSize={["24px", "24px", "24px", "24px", "26px", "32px"]}
              fontFamily={"Bossa-ExtendedBold"}
              // marginLeft={["0px", "0px", "16px", "16px"]}
              fontWeight={700}
              letterSpacing={"-0.42px"}
              color={"black"}
              flexShrink={0}
            >
              Benefit 2-3 words
            </Text>
            <Text
              w={["100%", "33.82%", "33.82%", "33.82%", "33.82%", "33.82%"]}
              fontFamily={"Bossa-Light"}
              // marginLeft={["0px", "0px", "61px", "61px"]}
              fontSize={["12px", "12px", "12px", "12px", "15px", "18px"]}
              fontWeight={300}
              letterSpacing={"-0.42px"}
              color={"#747272"}
            >
              Need content for these services: Max 3-4 lines. consectetur enim.
              adipiscing commodo urna elit. nisl. massa placerat. Morbi elit. id
              sapien at
            </Text>
          </Flex>

          <Box
            w={"100%"}
            border={"1px solid black"}
            margin={["16px 0px 50px 0px", "16px 0px 50px 0px", "16px 0px 50px 0px", "65px 0px", "65px 0px", "65px 0px"]}
          ></Box>

          {/* 2nd Point  */}

          <Flex
            // mt={["0px", "0px", "0px", "40px", "50px", "60px"]}
            flexDir={["column", "row", "row", "row", "row", "row"]}
            alignItems={[
              "start",
              "start",
              "center",
              "center",
              "center",
              "center",
            ]}
            w={"100%"}
            gap={["16px", "16px", "16px", "34px", "44px", "50px"]}
            
          >
            <Text
              w={["129px"]}
              fontSize={["32px", "32px", "32px", "40px", "50px", "60px"]}
              fontFamily={"Bossa-ExtendedBold"}
              fontWeight={700}
              letterSpacing={"-0.42px"}
              color={"black"}
              flexShrink={0}
            >
              02
            </Text>
            <Text
              w={["100%", "45.86%", "45.86%", "45.86%", "45.86%", "45.86%"]}
              fontSize={["24px", "24px", "24px", "24px", "26px", "32px"]}
              fontFamily={"Bossa-ExtendedBold"}
              // marginLeft={["0px", "0px", "16px", "16px"]}
              fontWeight={700}
              letterSpacing={"-0.42px"}
              color={"black"}
              flexShrink={0}
            >
              Benefit 2-3 words
            </Text>
            <Text
              w={["100%", "33.82%", "33.82%", "33.82%", "33.82%", "33.82%"]}
              fontFamily={"Bossa-Light"}
              // marginLeft={["0px", "0px", "61px", "61px"]}
              fontSize={["12px", "12px", "12px", "12px", "15px", "18px"]}
              fontWeight={300}
              letterSpacing={"-0.42px"}
              color={"#747272"}
            >
              Need content for these services: Max 3-4 lines. consectetur enim.
              adipiscing commodo urna elit. nisl. massa placerat. Morbi elit. id
              sapien at
            </Text>
          </Flex>

          <Box
            w={"100%"}
            border={"1px solid black"}
            margin={["16px 0px 50px 0px", "16px 0px 50px 0px", "16px 0px 50px 0px", "65px 0px", "65px 0px", "65px 0px"]}
          ></Box>


          {/* 3rd Point  */}

          <Flex
            // mt={["50px", "50px", "50px", "40px", "50px", "60px"]}
            flexDir={["column", "row", "row", "row", "row", "row"]}
            alignItems={[
              "start",
              "start",
              "center",
              "center",
              "center",
              "center",
            ]}
            w={"100%"}
            gap={["16px", "16px", "16px", "34px", "44px", "50px"]}
            
          >
            <Text
              w={["129px"]}
              fontSize={["32px", "32px", "32px", "40px", "50px", "60px"]}
              fontFamily={"Bossa-ExtendedBold"}
              fontWeight={700}
              letterSpacing={"-0.42px"}
              color={"black"}
              flexShrink={0}
            >
              03
            </Text>
            <Text
              w={["100%", "45.86%", "45.86%", "45.86%", "45.86%", "45.86%"]}
              fontSize={["24px", "24px", "24px", "24px", "26px", "32px"]}
              fontFamily={"Bossa-ExtendedBold"}
              letterSpacing={"-0.42px"}
              color={"black"}
              flexShrink={0}
            >
              Benefit 2-3 words
            </Text>
            <Text
              w={["100%", "33.82%", "33.82%", "33.82%", "33.82%", "33.82%"]}
              fontFamily={"Bossa-Light"}
              fontSize={["12px", "12px", "12px", "12px", "15px", "18px"]}
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
