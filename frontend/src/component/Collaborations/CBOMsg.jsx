import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import CBO from "../../assets/Collaboration/Kareem_Shaheen_CBO.svg";

const CBOMsg = () => {
  return (
    <>
      <Box
        mt={["124px"]}
        backgroundColor={"#004141"}
        h={["fit-content", "fit-content", "814px", "814px"]}
        w={["100vw"]}
        maxW={"100%"}
      >
        <Flex
          flexDir={["column", "column", "row", "row"]}
          alignItems={"start"}
          padding={[
            "40px 20px 82px 20px",
            "40px 20px 82px 20px",
            "56px 154px",
            "56px 154px",
          ]}
        >
          <Flex
            flexDirection={["column"]}
            w={["100%", "100%", "50%", "50%"]}
            alignItems={"start"}
          >
            <Text
              fontFamily={"Bossa-ExtendedBold"}
              w={["250px", "25px", "267px", "267px"]}
              maxW={"100%"}
              color={"white"}
              fontSize={["18px"]}
              fontWeight={700}
              lineHeight={"normal"}
              fontStyle={"normal"}
            >
              Message from Chief Business Officer
            </Text>
            <Text
              fontFamily={"Bossa-ExtendedBold"}
              mt={["45px"]}
              color={"#00D2AA"}
              fontSize={["35px", "35px", "60px", "60px"]}
              fontWeight={700}
              lineHeight={"normal"}
              fontStyle={"normal"}
            >
              Headline 1-2 line max.
            </Text>
            <Text
              fontFamily={"Bossa-Light"}
              w={["392px"]}
              maxW={"100%"}
              mt={["33px"]}
              color={"white"}
              fontSize={["14px"]}
              fontWeight={300}
              lineHeight={["21px"]}
              fontStyle={"normal"}
              letterSpacing={["-0.42px"]}
            >
              The potential for artificial intelligence is only as big as the
              human imagination and as we explore new territories and unleash
              the full potential of AI, we look forward to delivering
              exponential value to our present and future clients and partners
              through our professional excellence, in-depth understanding of
              different industries, and unique combination of technological
              resources and investments expertise.
            </Text>

            <Box mt={["30px"]}>
              <Text
                fontFamily={"Bossa-Bold"}
                color={"#00D2AA"}
                fontSize={["10px", "10px", "20px", "20px"]}
                fontWeight={700}
                lineHeight={"normal"}
              >
                Kareem Shaheen
              </Text>
              <Text
                fontFamily={"Bossa-Light"}
                color={"white"}
                fontSize={["10px", "10px", "14px", "14px"]}
                fontWeight={300}
                lineHeight={"normal"}
              >
                Chief Business Officer
              </Text>
            </Box>
          </Flex>
          <Flex
            mt={["50px", "50px", "0px", "0px"]}
            flexDirection={["column"]}
            w={["100%", "100%", "50%", "50%"]}
            alignItems={"start"}
          >
            <Image
              w={["351px", "351px", "468px", "468px"]}
              maxW={"100%"}
              h={["700px"]}
              flexShrink={0}
              objectFit={"cover"}
              src={CBO}
            />
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default CBOMsg;