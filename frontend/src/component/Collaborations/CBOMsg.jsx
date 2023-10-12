import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import CBO from "../../assets/Collaboration/Kareem_Shaheen_CBO.svg";

const CBOMsg = () => {
  return (
    <>
      <Box
        mt={["80px", "125px"]}
        backgroundColor={"#004141"}
        w={"100%"}
        padding={[
          "40px 20px 82px 20px",
          "40px 11.71% 82px 11.71%",
          "40px 11.71% 82px 11.71%",
          "56px 11.71% 56px 11.71%",
          "56px 11.71% 56px 11.71%",
          "56px 11.71% 56px 11.71%",
        ]}
      >
        <Flex
          flexDir={["column", "row", "row", "row", "row", "row"]}
          alignItems={"start"}
          justifyContent={"space-between"}
          gap={["50px", "10.26%", "10.26%", "10.26%", "10.26%", "10.26%"]}
        >
          <Flex
            mt={["0px", "0px", "0px", "46px", "46px", "46px"]}
            flexDirection={["column"]}
            w={["100%", "50%", "50%", "50%", "50%", "50%"]}
            alignItems={"start"}
          >
            <Text
              fontFamily={"Bossa-ExtendedBold"}
              w={["80%", "80%", "80%", "48%", "48%", "48%"]}
              color={"white"}
              fontSize={["16px", "18px"]}
              fontWeight={700}
              lineHeight={"normal"}
              fontStyle={"normal"}
            >
              Message from Chief Business Officer
            </Text>
            <Text
              fontFamily={"Bossa-ExtendedBold"}
              mt={["12px", "14px", "22px","30px","37px","45px"]}
              color={"#00D2AA"}
              fontSize={["24px", "30px","35px", "40px", "50px", "60px"]}
              fontWeight={700}
              lineHeight={"normal"}
              fontStyle={"normal"}
            >
              Headline 1-2 line max.
            </Text>
            <Text
              fontFamily={"Bossa-Light"}
             
              w={"100%"}
              mt={["12px", "20px", "25px", "33px", "33px", "33px"]}
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
            mt={["50px", "0px","0px","0px", "0px", "0px"]}
            flexDirection={["column"]}
            w={["100%", "50%","50%","50%", "50%", "50%"]}
            // h={["477px", "fit-content", "353px", "457px", "589px", "700px"]}
            h={["477px", "fit-content","fit-content","fit-content","fit-content","fit-content",]}
            alignItems={"start"}
          >
            <Image
              w={"100%"}
              h={"100%"}
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
