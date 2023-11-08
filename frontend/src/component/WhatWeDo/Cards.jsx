import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

// Import images
import AdvancedDiagnostics from "../../assets/WhatWeDo/AdvanceDiagnostics.jpg";
import DigitalHealth from "../../assets/WhatWeDo/DigitalHealth.jpg";
import EnvironmentalScience from "../../assets/WhatWeDo/EnvironmentalScience.jpg";
import IROS from "../../assets/WhatWeDo/IROS.jpg";
import Omics from "../../assets/WhatWeDo/Omics.jpg";
import Pharma from "../../assets/WhatWeDo/PharmaTherapeutics.jpg";

const Cards = () => {
  return (
    <>
      <Box
        w={"100vw"}
        maxW={"100%"}
        padding={[
          "40px 20px 67px 20px",
          "40px 20px 67px 20px",
          "40px 20px 67px 20px",
          "46px 4.01% 80px 5.52%",
          "59px 4.01% 104px 5.52%",
          "71px 4.01% 125px 5.52%",
        ]}
      >
        {/* 1st 2nd  */}
        <Flex
          flexDirection={["column", "row", "row", "row", "row", "row"]}
          gap={["40px", "20px", "20px", "20px", "40px", "40px"]}
        >
          {/* 1st Box */}
          <Flex
            flexShrink={0}
            w={["100%", "50%", "50%", "50%", "50%", "50%"]}
            // maxW={"100%"}
            h={"100%"}
            alignItems={"flex-start"}
            gap={"2.27%"}
            // gap={["9.5px", "9.5px", "19px", "19px"]}
          >
            <Text
              paddingLeft={["2.5%", "2.5%", "2.5%"]}
              w={"fit-content"}
              fontFamily={"Bossa-Bold"}
              fontSize={["24px", "24px", "24px", "52px", "67px", "80px"]}
              fontWeight={700}
              lineHeight={[null, null, null, "68px","68px","68px"]}
            >
              01
            </Text>
            <Box  w={["302px", "302px", "302px", "327px", "425px", "507px"]}>
              <Image
                // border={"2px"}
                w={["302px", "302px", "302px", "327px", "425px", "507px"]}
                h={["233px", "233px", "233px", "252px", "326px", "391px"]}
                objectFit={"cover"}
                src={Omics}
              />
              <Text
                fontFamily={"Bossa-ExtendedBold"}
                mt={["5px", "5px", "18px", "18px"]}
                color={"black"}
                fontSize={["20px", "20px", "20px", "20px", "25px", "30px"]}
                fontStyle={"normal"}
                fontWeight={[400, 400, 700, 700]}
                lineHeight={"38px"}
                letterSpacing={"-0.9px"}
              >
                Omics
              </Text>
              <Text
                fontFamily={"Bossa-Light"}
                mt={["5px"]}
                fontSize={["12px", "12px", "12px", "14px", "14px", "16px"]}
                fontStyle={"normal"}
                fontWeight={300}
                lineHeight={["18px", "18px", "21px", "21px"]}
                letterSpacing={"-0.42px"}
                color={"#747272"}
                w={"100%"}
              >
                Need content for these services: Max 3-4 lines. consectetur
                enim. adipiscing commodo urna elit. nisl. massa placerat. Morbi
                elit. id sapien at efficitur. in tincidunt non consectetur enim.
                adipiscing commodo
              </Text>
              <Button
                fontFamily={"Bossa-ExtendedRegular"}
                mt={["8px", "8px", "20px", "20px"]}
                backgroundColor={"#00D2AA"}
                _hover={{ backgroundColor: "#00D2AA" }}
                borderRadius={["48px", "48px", "80px", "80px"]}
                height={["30px", "30px", "50px", "50px"]}
                w={["120px", "120px", "200px", "200px"]}
                color={"white"}
                fontSize={["10px", "10px", "16px", "16px"]}
                fontStyle={"normal"}
                lineHeight={"22px"}
                textTransform={"capitalize"}
              >
                Discover More
              </Button>
            </Box>
          </Flex>

          {/* 2nd Box */}
          <Flex
            flexShrink={0}
            // w={["100%", "100%", "50%", "50%"]}
            w={["100%", "50%", "50%", "50%", "50%", "50%"]}
            maxW={"100%"}
            alignItems={"start"}
            gap={["9.5px", "9.5px", "19px", "19px"]}
          >
            <Text
              w={"fit-content"}
              fontFamily={"Bossa-Bold"}
              fontSize={["24px", "24px", "24px", "52px", "67px", "80px"]}
              fontWeight={700}
              lineHeight={[null, null, null, "68px","68px","68px"]}
            >
              02
            </Text>
            <Box w={["302px", "302px", "302px", "327px", "425px", "507px"]}>
              <Image
                w={["302px", "302px", "302px", "327px", "425px", "507px"]}
                height={["233px", "233px", "233px", "252px", "326px", "391px"]}
                objectFit={"cover"}
                src={DigitalHealth}
              />
              <Text
                fontFamily={"Bossa-ExtendedBold"}
                mt={["5px", "5px", "18px", "18px"]}
                color={"black"}
                fontSize={["20px", "20px", "20px", "20px", "25px", "30px"]}
                fontStyle={"normal"}
                fontWeight={[400, 400, 700, 700]}
                lineHeight={"38px"}
                letterSpacing={"-0.9px"}
              >
                Digital Health
              </Text>
              <Text
                fontFamily={"Bossa-Light"}
                mt={["5px"]}
                fontSize={["12px", "12px", "12px", "14px", "14px", "16px"]}
                fontStyle={"normal"}
                fontWeight={300}
                lineHeight={["18px", "18px", "21px", "21px"]}
                letterSpacing={"-0.42px"}
                color={"#747272"}
              >
                Need content for these services: Max 3-4 lines. consectetur
                enim. adipiscing commodo urna elit. nisl. massa placerat. Morbi
                elit. id sapien at efficitur. in tincidunt non consectetur enim.
                adipiscing commodo
              </Text>
              <Button
                fontFamily={"Bossa-ExtendedRegular"}
                mt={["8px", "8px", "20px", "20px"]}
                backgroundColor={"#00D2AA"}
                _hover={{ backgroundColor: "#00D2AA" }}
                borderRadius={["48px", "48px", "80px", "80px"]}
                height={["30px", "30px", "50px", "50px"]}
                w={["120px", "120px", "200px", "200px"]}
                color={"white"}
                fontSize={["10px", "10px", "16px", "16px"]}
                fontStyle={"normal"}
                lineHeight={"22px"}
                textTransform={"capitalize"}
              >
                Discover More
              </Button>
            </Box>
          </Flex>
        </Flex>

        {/* <hr
          style={{
            width: "100vw",
            maxWidth: "100%",
            border: "1px solid #D9D9D9",
          }}
        /> */}
        <Box
        margin={["0px","0px","0px", "58px 0px 58px 0px", "58px 0px 58px 0px", "58px 0px 58px 0px"]}
          w={"100%"}
          display={["none", "none", "none", "block", "block", "block"]}
          border={"1px solid #D9D9D9"}
        ></Box>

        {/* 3rd 4th  */}

        <Flex
          flexDirection={["column", "row", "row", "row", "row", "row"]}
          gap={["40px", "20px", "20px", "20px", "40px", "40px"]}
          mt={["40px", "40px", "40px", "72px", "72px", "72px"]}
        >
          {/* 3rd Box */}
          <Flex
            flexShrink={0}
            w={["100%", "50%", "50%", "50%", "50%", "50%"]}
            maxW={"100%"}
            alignItems={"start"}
            gap={"2.27%"}
            // gap={["9.5px", "9.5px", "19px", "19px"]}
          >
            <Text
              // w={["42px", "42px", "fit-content", "fit-content"]}
              fontFamily={"Bossa-Bold"}
              fontSize={["24px", "24px", "24px", "52px", "67px", "80px"]}
              fontWeight={700}
              lineHeight={[null, null, null, "68px","68px","68px"]}
            >
              03
            </Text>
            <Box>
              <Image
                w={["76.84vw", "302px", "302px", "327px", "425px", "507px"]}
                h={["233px", "233px", "233px", "252px", "326px", "391px"]}
                objectFit={"cover"}
                src={AdvancedDiagnostics}
              />
              <Text
                w={["76.84vw", "302px", "302px", "327px", "425px", "507px"]}
                fontFamily={"Bossa-ExtendedBold"}
                mt={["5px", "5px", "18px", "18px"]}
                color={"black"}
                fontSize={["20px", "20px", "20px", "20px", "25px", "30px"]}
                fontStyle={"normal"}
                fontWeight={[400, 400, 700, 700]}
                lineHeight={"38px"}
                letterSpacing={"-0.9px"}
              >
                Advanced Diagnostics
              </Text>
              <Text
                w={["76.84vw", "302px", "302px", "327px", "425px", "507px"]}
                fontFamily={"Bossa-Light"}
                mt={["5px"]}
                fontSize={["12px", "12px", "12px", "14px", "14px", "16px"]}
                fontStyle={"normal"}
                fontWeight={300}
                lineHeight={["18px", "18px", "21px", "21px"]}
                letterSpacing={"-0.42px"}
                color={"#747272"}
              >
                Need content for these services: Max 3-4 lines. consectetur
                enim. adipiscing commodo urna elit. nisl. massa placerat. Morbi
                elit. id sapien at efficitur. in tincidunt non consectetur enim.
                adipiscing commodo
              </Text>
              <Button
                fontFamily={"Bossa-ExtendedRegular"}
                mt={["8px", "8px", "20px", "20px"]}
                backgroundColor={"#00D2AA"}
                _hover={{ backgroundColor: "#00D2AA" }}
                borderRadius={["48px", "48px", "80px", "80px"]}
                height={["30px", "30px", "50px", "50px"]}
                w={["120px", "120px", "200px", "200px"]}
                color={"white"}
                fontSize={["10px", "10px", "16px", "16px"]}
                fontStyle={"normal"}
                lineHeight={"22px"}
                textTransform={"capitalize"}
              >
                Discover More
              </Button>
            </Box>
          </Flex>

          {/* 4th Box */}
          <Flex
            flexShrink={0}
            w={["100%", "50%", "50%", "50%", "50%", "50%"]}
            maxW={"100%"}
            alignItems={"start"}
            gap={["9.5px", "9.5px", "19px", "19px"]}
          >
            <Text
              w={"fit-content"}
              // w={["42px", "42px", "fit-content", "fit-content"]}
              fontFamily={"Bossa-Bold"}
              fontSize={["24px", "24px", "24px", "52px", "67px", "80px"]}
              fontWeight={700}
              lineHeight={[null, null, null, "68px","68px","68px"]}
            >
              04
            </Text>
            <Box w={["302px", "302px", "302px", "327px", "425px", "507px"]}>
              <Image
                w={["302px", "302px", "302px", "327px", "425px", "507px"]}
                height={["233px", "233px", "233px", "252px", "326px", "391px"]}
                objectFit={"cover"}
                src={Pharma}
              />
              <Text
                fontFamily={"Bossa-ExtendedBold"}
                mt={["5px", "5px", "18px", "18px"]}
                color={"black"}
                fontSize={["20px", "20px", "20px", "20px", "25px", "30px"]}
                fontStyle={"normal"}
                fontWeight={[400, 400, 700, 700]}
                lineHeight={"38px"}
                letterSpacing={"-0.9px"}
              >
                Pharma & Therapeutics
              </Text>
              <Text
                fontFamily={"Bossa-Light"}
                mt={["5px"]}
                fontSize={["12px", "12px", "12px", "14px", "14px", "16px"]}
                fontStyle={"normal"}
                fontWeight={300}
                lineHeight={["18px", "18px", "21px", "21px"]}
                letterSpacing={"-0.42px"}
                color={"#747272"}
              >
                Need content for these services: Max 3-4 lines. consectetur
                enim. adipiscing commodo urna elit. nisl. massa placerat. Morbi
                elit. id sapien at efficitur. in tincidunt non consectetur enim.
                adipiscing commodo
              </Text>
              <Button
                fontFamily={"Bossa-ExtendedRegular"}
                mt={["8px", "8px", "20px", "20px"]}
                backgroundColor={"#00D2AA"}
                _hover={{ backgroundColor: "#00D2AA" }}
                borderRadius={["48px", "48px", "80px", "80px"]}
                height={["30px", "30px", "50px", "50px"]}
                w={["120px", "120px", "200px", "200px"]}
                color={"white"}
                fontSize={["10px", "10px", "16px", "16px"]}
                fontStyle={"normal"}
                lineHeight={"22px"}
                textTransform={"capitalize"}
              >
                Discover More
              </Button>
            </Box>
          </Flex>
        </Flex>

        {/* <hr
          style={{
            width: "100vw",
            maxWidth: "100%",
            border: "1px solid #D9D9D9",
          }}
        /> */}

<Box
        margin={["0px","0px","0px", "58px 0px 58px 0px", "58px 0px 58px 0px", "58px 0px 58px 0px"]}
          w={"100%"}
          display={["none", "none", "none", "block", "block", "block"]}
          border={"1px solid #D9D9D9"}
        ></Box>

        {/* 5th 6th  */}

        <Flex
          flexDirection={["column", "row", "row", "row", "row", "row"]}
          gap={["40px", "20px", "20px", "20px", "40px", "40px"]}
          mt={["40px", "40px", "40px", "72px", "72px", "72px"]}
        >
          {/* 5th Box */}
          <Flex
            flexShrink={0}
            w={["100%", "50%", "50%", "50%", "50%", "50%"]}
            maxW={"100%"}
            alignItems={"start"}
            gap={["9.5px", "9.5px", "19px", "19px"]}
          >
            <Text
              w={"fit-content"}
              // w={["42px", "42px", "fit-content", "fit-content"]}
              fontFamily={"Bossa-Bold"}
              fontSize={["24px", "24px", "24px", "52px", "67px", "80px"]}
              fontWeight={700}
              lineHeight={[null, null, null, "68px","68px","68px"]}
            >
              05
            </Text>
            <Box w={["302px", "302px", "302px", "327px", "425px", "507px"]}>
              <Image
                w={["302px", "302px", "302px", "327px", "425px", "507px"]}
                h={["233px", "233px", "233px", "252px", "326px", "391px"]}
                objectFit={"cover"}
                src={IROS}
              />
              <Text
                fontFamily={"Bossa-ExtendedBold"}
                mt={["5px", "5px", "18px", "18px"]}
                color={"black"}
                fontSize={["20px", "20px", "20px", "20px", "25px", "30px"]}
                fontStyle={"normal"}
                fontWeight={[400, 400, 700, 700]}
                lineHeight={"38px"}
                letterSpacing={"-0.9px"}
              >
                IROS
              </Text>
              <Text
                fontFamily={"Bossa-Light"}
                mt={["5px"]}
                fontSize={["12px", "12px", "12px", "14px", "14px", "16px"]}
                fontStyle={"normal"}
                fontWeight={300}
                lineHeight={["18px", "18px", "21px", "21px"]}
                letterSpacing={"-0.42px"}
                color={"#747272"}
                w={"100%"}
              >
                Need content for these services: Max 3-4 lines. consectetur
                enim. adipiscing commodo urna elit. nisl. massa placerat. Morbi
                elit. id sapien at efficitur. in tincidunt non consectetur enim.
                adipiscing commodo
              </Text>
              <Button
                fontFamily={"Bossa-ExtendedRegular"}
                mt={["8px", "8px", "20px", "20px"]}
                backgroundColor={"#00D2AA"}
                _hover={{ backgroundColor: "#00D2AA" }}
                borderRadius={["48px", "48px", "80px", "80px"]}
                height={["30px", "30px", "50px", "50px"]}
                w={["120px", "120px", "200px", "200px"]}
                color={"white"}
                fontSize={["10px", "10px", "16px", "16px"]}
                fontStyle={"normal"}
                lineHeight={"22px"}
                textTransform={"capitalize"}
              >
                Discover More
              </Button>
            </Box>
          </Flex>

          {/* 6th Box */}
          <Flex
            flexShrink={0}
            w={["100%", "50%", "50%", "50%", "50%", "50%"]}
            maxW={"100%"}
            alignItems={"start"}
            gap={["9.5px", "9.5px", "19px", "19px"]}
          >
            <Text
              w={"fit-content"}
              // w={["42px", "42px", "fit-content", "fit-content"]}
              fontFamily={"Bossa-Bold"}
              fontSize={["24px", "24px", "24px", "52px", "67px", "80px"]}
              fontWeight={700}
              lineHeight={[null, null, null, "68px","68px","68px"]}
            >
              06
            </Text>
            <Box w={["302px", "302px", "302px", "327px", "425px", "507px"]}>
              <Image
                w={["302px", "302px", "302px", "327px", "425px", "507px"]}
                height={["233px", "233px", "233px", "252px", "326px", "391px"]}
                objectFit={"cover"}
                src={EnvironmentalScience}
              />
              <Text
                fontFamily={"Bossa-ExtendedBold"}
                mt={["5px", "5px", "18px", "18px"]}
                color={"black"}
                fontSize={["20px", "20px", "20px", "20px", "25px", "30px"]}
                fontStyle={"normal"}
                fontWeight={[400, 400, 700, 700]}
                lineHeight={"38px"}
                letterSpacing={"-0.9px"}
              >
                Environmental Science
              </Text>
              <Text
                fontFamily={"Bossa-Light"}
                mt={["5px"]}
                fontSize={["12px", "12px", "12px", "14px", "14px", "16px"]}
                fontStyle={"normal"}
                fontWeight={300}
                lineHeight={["18px", "18px", "21px", "21px"]}
                letterSpacing={"-0.42px"}
                color={"#747272"}
                w={"100%"}
              >
                Need content for these services: Max 3-4 lines. consectetur
                enim. adipiscing commodo urna elit. nisl. massa placerat. Morbi
                elit. id sapien at efficitur. in tincidunt non consectetur enim.
                adipiscing commodo
              </Text>
              <Button
                fontFamily={"Bossa-ExtendedRegular"}
                mt={["8px", "8px", "20px", "20px"]}
                backgroundColor={"#00D2AA"}
                _hover={{ backgroundColor: "#00D2AA" }}
                borderRadius={["48px", "48px", "80px", "80px"]}
                height={["30px", "30px", "50px", "50px"]}
                w={["120px", "120px", "200px", "200px"]}
                color={"white"}
                fontSize={["10px", "10px", "16px", "16px"]}
                fontStyle={"normal"}
                lineHeight={"22px"}
                textTransform={"capitalize"}
              >
                Discover More
              </Button>
            </Box>
          </Flex>
        </Flex>

        <Box mt={"8.21%"} borderBottom={"1px solid #D9D9D9"} w={"100%"}></Box>
        {/* <hr
          style={{
            width: "100vw",
            maxWidth: "100%",
            border: "1px solid #D9D9D9",
            marginTop: "124px",
          }}
        /> */}
      </Box>
    </>
  );
};

export default Cards;
