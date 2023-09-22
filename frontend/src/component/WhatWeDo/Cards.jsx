import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

// Import images
import AdvancedDiagnostics from "../../assets/WhatWeDo/AdvancedDiagnostics.svg";
import DigitalHealth from "../../assets/WhatWeDo/DigitalHealth.svg";
import EnvironmentalScience from "../../assets/WhatWeDo/EnvironmentalScience.svg";
import IROS from "../../assets/WhatWeDo/IROS.svg";
import Omics from "../../assets/WhatWeDo/Omics.svg";
import Pharma from "../../assets/WhatWeDo/Pharma.svg";

const Cards = () => {
  return (
    <>
      <Box padding={["40px 20px 78px 18px","40px 20px 78px 18px", "71px 61px 182px 50px", "71px 61px 182px 50px"]}>
        {/* 1st 2nd  */}
        <Flex flexDirection={["column","column","row","row"]} gap={["40px"]}>
          {/* 1st Box */}
          <Flex
            flexShrink={0}
            w={["100%","100%","50%","50%"]}
            maxW={"100%"}
            alignItems={"start"}
            gap={["9.5px", "9.5px", "19px", "19px"]}
          >
            <Text fontFamily={"Bossa-Bold"} fontSize={["24px","24px","80px","80px"]} fontWeight={700} lineHeight={"68px"}>
              01
            </Text>
            <Box w={"502px"} maxW={"100%"}>
              <Image
                w={["302px","302px","502px","502px"]}
                maxW={"100%"}
                h={["233px","233px","387px","387px"]}
                objectFit={"cover"}
                src={Omics}
              />
              <Text
              fontFamily={"Bossa-ExtendedBold"}
                mt={["5px","5px","18px","18px"]}
                color={"black"}
                fontSize={["20px","2 0px","30px","30px"]}
                fontStyle={"normal"}
                fontWeight={[400,400, 700, 700]}
                lineHeight={"38px"}
                letterSpacing={"-0.9px"}
              >
                Omics
              </Text>
              <Text
              fontFamily={"Bossa-Light"}
                mt={["5px"]}
                fontSize={["12px","12px","16px","16px"]}
                fontStyle={"normal"}
                fontWeight={300}
                lineHeight={["18px","18px","21px","21px"]}
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
                mt={["8px","8px","20px","20px"]}
                backgroundColor={"#00D2AA"}
                _hover={{ backgroundColor: "#00D2AA" }}
                borderRadius={["48px","48px","80px","80px"]}
                height={["30px","30px","50px","50px"]}
                w={["120px","120px","200px","200px"]}
                color={"white"}
                fontSize={["10px","10px","16px","16px"]}
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
            w={["100%","100%","50%","50%"]}
            maxW={"100%"}
            alignItems={"start"}
            gap={["9.5px", "9.5px", "19px", "19px"]}
          >
            <Text fontFamily={"Bossa-Bold"} fontSize={["24px","24px","80px","80px"]} fontWeight={700} lineHeight={"68px"}>
              02
            </Text>
            <Box w={"502px"} maxW={"100%"}>
              <Image
                w={["302px","302px","502px","502px"]}
                maxW={"100%"}
                h={["233px","233px","387px","387px"]}
                objectFit={"cover"}
                src={DigitalHealth}
              />
              <Text
              fontFamily={"Bossa-ExtendedBold"}
                mt={["5px","5px","18px","18px"]}
                color={"black"}
                fontSize={["20px","2 0px","30px","30px"]}
                fontStyle={"normal"}
                fontWeight={[400,400, 700, 700]}
                lineHeight={"38px"}
                letterSpacing={"-0.9px"}
              >
                Digital Health
              </Text>
              <Text
              fontFamily={"Bossa-Light"}
                mt={["5px"]}
                fontSize={["12px","12px","16px","16px"]}
                fontStyle={"normal"}
                fontWeight={300}
                lineHeight={["18px","18px","21px","21px"]}
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
                mt={["8px","8px","20px","20px"]}
                backgroundColor={"#00D2AA"}
                _hover={{ backgroundColor: "#00D2AA" }}
                borderRadius={["48px","48px","80px","80px"]}
                height={["30px","30px","50px","50px"]}
                w={["120px","120px","200px","200px"]}
                color={"white"}
                fontSize={["10px","10px","16px","16px"]}
                fontStyle={"normal"}
                lineHeight={"22px"}
                textTransform={"capitalize"}
              >
                Discover More
              </Button>
            </Box>
          </Flex>
        </Flex>

        <hr
          style={{
            width: "100vw",
            maxWidth: "100%",
            border: "1px solid #D9D9D9",
          }}
        />

        {/* 3rd 4th  */}

        <Flex flexDirection={["column","column","row","row"]} mt={["72px"]} gap={["40px"]}>
          {/* 3rd Box */}
          <Flex
            flexShrink={0}
            w={["100%","100%","50%","50%"]}
            maxW={"100%"}
            alignItems={"start"}
            gap={["9.5px", "9.5px", "19px", "19px"]}
          >
            <Text fontFamily={"Bossa-Bold"} fontSize={["24px","24px","80px","80px"]} fontWeight={700} lineHeight={"68px"}>
              03
            </Text>
            <Box w={"502px"} maxW={"100%"}>
              <Image
                w={["302px","302px","502px","502px"]}
                maxW={"100%"}
                h={["233px","233px","387px","387px"]}
                objectFit={"cover"}
                src={AdvancedDiagnostics}
              />
              <Text
              fontFamily={"Bossa-ExtendedBold"}
                mt={["5px","5px","18px","18px"]}
                color={"black"}
                fontSize={["20px","2 0px","30px","30px"]}
                fontStyle={"normal"}
                fontWeight={[400,400, 700, 700]}
                lineHeight={"38px"}
                letterSpacing={"-0.9px"}
              >
                Advanced Diagnostics
              </Text>
              <Text
              fontFamily={"Bossa-Light"}
                mt={["5px"]}
                fontSize={["12px","12px","16px","16px"]}
                fontStyle={"normal"}
                fontWeight={300}
                lineHeight={["18px","18px","21px","21px"]}
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
                mt={["8px","8px","20px","20px"]}
                backgroundColor={"#00D2AA"}
                _hover={{ backgroundColor: "#00D2AA" }}
                borderRadius={["48px","48px","80px","80px"]}
                height={["30px","30px","50px","50px"]}
                w={["120px","120px","200px","200px"]}
                color={"white"}
                fontSize={["10px","10px","16px","16px"]}
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
            w={["100%","100%","50%","50%"]}
            maxW={"100%"}
            alignItems={"start"}
            gap={["9.5px", "9.5px", "19px", "19px"]}
          >
            <Text fontFamily={"Bossa-Bold"} fontSize={["24px","24px","80px","80px"]} fontWeight={700} lineHeight={"68px"}>
              04
            </Text>
            <Box w={"502px"} maxW={"100%"}>
              <Image
                w={["302px","302px","502px","502px"]}
                maxW={"100%"}
                h={["233px","233px","387px","387px"]}
                objectFit={"cover"}
                src={Pharma}
              />
              <Text
              fontFamily={"Bossa-ExtendedBold"}
                mt={["5px","5px","18px","18px"]}
                color={"black"}
                fontSize={["20px","2 0px","30px","30px"]}
                fontStyle={"normal"}
                fontWeight={[400,400, 700, 700]}
                lineHeight={"38px"}
                letterSpacing={"-0.9px"}
              >
                Pharma & Therapeutics
              </Text>
              <Text
              fontFamily={"Bossa-Light"}
                mt={["5px"]}
                fontSize={["12px","12px","16px","16px"]}
                fontStyle={"normal"}
                fontWeight={300}
                lineHeight={["18px","18px","21px","21px"]}
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
                mt={["8px","8px","20px","20px"]}
                backgroundColor={"#00D2AA"}
                _hover={{ backgroundColor: "#00D2AA" }}
                borderRadius={["48px","48px","80px","80px"]}
                height={["30px","30px","50px","50px"]}
                w={["120px","120px","200px","200px"]}
                color={"white"}
                fontSize={["10px","10px","16px","16px"]}
                fontStyle={"normal"}
                lineHeight={"22px"}
                textTransform={"capitalize"}
              >
                Discover More
              </Button>
            </Box>
          </Flex>
        </Flex>

        <hr
          style={{
            width: "100vw",
            maxWidth: "100%",
            border: "1px solid #D9D9D9",
          }}
        />

        {/* 5th 6th  */}

        <Flex flexDirection={["column","column","row","row"]} mt={["72px"]} gap={["40px"]}>
          {/* 5th Box */}
          <Flex
            flexShrink={0}
            w={["100%","100%","50%","50%"]}
            maxW={"100%"}
            alignItems={"start"}
            gap={["9.5px", "9.5px", "19px", "19px"]}
          >
            <Text fontFamily={"Bossa-Bold"} fontSize={["24px","24px","80px","80px"]} fontWeight={700} lineHeight={"68px"}>
              05
            </Text>
            <Box w={"502px"} maxW={"100%"}>
              <Image
                w={["302px","302px","502px","502px"]}
                maxW={"100%"}
                h={["233px","233px","387px","387px"]}
                objectFit={"cover"}
                src={IROS}
              />
              <Text
              fontFamily={"Bossa-ExtendedBold"}
                mt={["5px","5px","18px","18px"]}
                color={"black"}
                fontSize={["20px","2 0px","30px","30px"]}
                fontStyle={"normal"}
                fontWeight={[400,400, 700, 700]}
                lineHeight={"38px"}
                letterSpacing={"-0.9px"}
              >
                IROS
              </Text>
              <Text
              fontFamily={"Bossa-Light"}
                mt={["5px"]}
                fontSize={["12px","12px","16px","16px"]}
                fontStyle={"normal"}
                fontWeight={300}
                lineHeight={["18px","18px","21px","21px"]}
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
                mt={["8px","8px","20px","20px"]}
                backgroundColor={"#00D2AA"}
                _hover={{ backgroundColor: "#00D2AA" }}
                borderRadius={["48px","48px","80px","80px"]}
                height={["30px","30px","50px","50px"]}
                w={["120px","120px","200px","200px"]}
                color={"white"}
                fontSize={["10px","10px","16px","16px"]}
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
            w={["100%","100%","50%","50%"]}
            maxW={"100%"}
            alignItems={"start"}
            gap={["9.5px", "9.5px", "19px", "19px"]}
          >
            <Text fontFamily={"Bossa-Bold"} fontSize={["24px","24px","80px","80px"]} fontWeight={700} lineHeight={"68px"}>
              06
            </Text>
            <Box w={"502px"} maxW={"100%"}>
              <Image
                w={["302px","302px","502px","502px"]}
                maxW={"100%"}
                h={["233px","233px","387px","387px"]}
                objectFit={"cover"}
                src={EnvironmentalScience}
              />
              <Text
              fontFamily={"Bossa-ExtendedBold"}
                mt={["5px","5px","18px","18px"]}
                color={"black"}
                fontSize={["20px","2 0px","30px","30px"]}
                fontStyle={"normal"}
                fontWeight={[400,400, 700, 700]}
                lineHeight={"38px"}
                letterSpacing={"-0.9px"}
              >
                Environmental Science
              </Text>
              <Text
              fontFamily={"Bossa-Light"}
                mt={["5px"]}
                fontSize={["12px","12px","16px","16px"]}
                fontStyle={"normal"}
                fontWeight={300}
                lineHeight={["18px","18px","21px","21px"]}
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
                mt={["8px","8px","20px","20px"]}
                backgroundColor={"#00D2AA"}
                _hover={{ backgroundColor: "#00D2AA" }}
                borderRadius={["48px","48px","80px","80px"]}
                height={["30px","30px","50px","50px"]}
                w={["120px","120px","200px","200px"]}
                color={"white"}
                fontSize={["10px","10px","16px","16px"]}
                fontStyle={"normal"}
                lineHeight={"22px"}
                textTransform={"capitalize"}
              >
                Discover More
              </Button>
            </Box>
          </Flex>
        </Flex>

        <hr
          style={{
            width: "100vw",
            maxWidth: "100%",
            border: "1px solid #D9D9D9",
            marginTop: "124px"
          }}
        />
      </Box>
    </>
  );
};

export default Cards;
