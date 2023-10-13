import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Benefits = () => {
  return (
    <>
      <Box
        w={"100%"}
        borderBottom={"1px solid #D9D9D9"}
        borderTop={"1px solid #D9D9D9"}
        padding={[
          "80px 20px 80px 20px",
          "80px 4.01% 80px 4.01%",
          "80px 4.01% 80px 4.01%",
          "125px 11.71% 125px 11.71%",
          "125px 11.71% 125px 11.71%",
          "125px 11.71% 125px 11.71%",
        ]}
      >
        <Text
          fontFamily={"Bossa-ExtendedBold"}
          w={"100%"}
          color={"black"}
          fontWeight={700}
          fontSize={["30px", "30px", "30px", "40px", "50px", "60px"]}
          fontStyle={"normal"}
          lineHeight={"normal"}
        >
          Benefits of working at G42 Healthcare
        </Text>

        {/* POINTS  */}
        <Box
          w={"100%"}
          padding={[
            "36px 0px 0px 0px",
            "36px 0px 0px 0px",
            "36px 0px 0px 0px",
            "60px 0px 0px 0px",
            "78px 0px 0px 0px",
            "92px 0px 0px 0px",
          ]}
        >
          {/* 1st Point  */}
          <Flex
            flexDir={["column", "row", "row", "row", "row", "row"]}
            w={"100%"}
            alignItems={[
              "start",
              "center",
              "center",
              "center",
              "center",
              "center",
            ]}
            justifyContent={"space-between"}
          >
            <Text
              fontFamily={"Bossa-ExtendedBold"}
              fontSize={["32px", "32px", "32px", "40px", "50px", "60px"]}
              fontWeight={700}
              letterSpacing={"-0.42px"}
              color={"black"}
              flexShrink={0}
            >
              01
            </Text>
            <Text
            w={["100%", "35.15%", "35.15%", "35.15%", "35.15%", "35.15%"]}
              fontFamily={"Bossa-ExtendedBold"}
              fontSize={["24px", "24px", "24px", "24px", "26px", "32px"]}
              fontWeight={700}
              letterSpacing={"-0.42px"}
              color={"black"}
              flexShrink={0}
            >
              Environment & Culture
            </Text>
            <Text
              fontFamily={"Bossa-Light"}
              w={["100%", "26%", "26%", "26%", "26%", "26%"]}
              fontSize={["12px", "12px", "12px", "14px", "16px", "18px"]}
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
          mt={["50px","50px", "50px",  "50px", "50px", "60px"]}
            flexDir={["column", "row", "row", "row", "row", "row"]}
            w={"100%"}
            alignItems={[
                "start",
                "center",
                "center",
                "center",
                "center",
                "center",
              ]}
            justifyContent={"space-between"}
          >
            <Text
              fontFamily={"Bossa-ExtendedBold"}
              fontSize={["32px", "32px", "32px", "40px", "50px", "60px"]}
              fontWeight={700}
              letterSpacing={"-0.42px"}
              color={"black"}
              flexShrink={0}
            >
              02
            </Text>
            <Text
            w={["100%", "35.15%", "35.15%", "35.15%", "35.15%", "35.15%"]}
            fontFamily={"Bossa-ExtendedBold"}
              fontSize={["24px", "24px", "24px", "24px", "26px", "32px"]}
              fontWeight={700}
              letterSpacing={"-0.42px"}
              color={"black"}
              flexShrink={0}
            >
              Career Development
            </Text>
            <Text
              fontFamily={"Bossa-Light"}
              w={["100%", "26%", "26%", "26%", "26%", "26%"]}

              fontSize={["18px"]}
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
          mt={["50px","50px", "50px",  "50px", "50px", "60px"]}
          flexDir={["column", "row", "row", "row", "row", "row"]}
            w={"100%"}
            alignItems={[
                "start",
                "center",
                "center",
                "center",
                "center",
                "center",
              ]}
            justifyContent={"space-between"}
          >
            <Text
              fontFamily={"Bossa-ExtendedBold"}
              fontSize={["32px", "32px", "32px", "40px", "50px", "60px"]}
              fontWeight={700}
              letterSpacing={"-0.42px"}
              color={"black"}
              flexShrink={0}
            >
              03
            </Text>
            <Text
            w={["100%", "35.15%", "35.15%", "35.15%", "35.15%", "35.15%"]}
            fontFamily={"Bossa-ExtendedBold"}
              fontSize={["24px", "24px", "24px", "24px", "26px", "32px"]}
              fontWeight={700}
              letterSpacing={"-0.42px"}
              color={"black"}
              flexShrink={0}
            >
              Work Life Balance
            </Text>
            <Text
              fontFamily={"Bossa-Light"}
              w={["100%", "26%", "26%", "26%", "26%", "26%"]}

              fontSize={["18px"]}
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

export default Benefits;
