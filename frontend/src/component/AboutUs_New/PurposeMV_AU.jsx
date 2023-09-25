import React from 'react';
import { Box, Flex, Text } from "@chakra-ui/react";

const PurposeMV_AU = () => {
  return (
    <>
    <Box mt={5} border={"1px solid rgba(0, 0, 0, 0.10)"} padding={["39px 20px 79px 20px","39px 20px 79px 20px","78px 100px 95px 100px","78px 148px 95px 148px","78px 148px 95px 148px"]} >
      <Flex
        flexDirection={["column", "column", "row"]}
        padding={["0px", "0px", "0px 25px"]}
        justifyContent={"space-between"}
        alignItems={["start", "start","center"]}
      >
        <Text fontFamily={"Bossa-ExtendedBold"} fontSize={["24px", "24px", "48px", "48px"]} fontWeight={700}>
          Our Purpose
        </Text>
        <Text
        w={["100%", "100%",  "50%",  "50%"]}
        textAlign={"start"}
          color={"#747272"}
          fontFamily={"Bossa-Light"}
          fontSize={["12px", "12px","14px", "14px"]}
          fontWeight={300}
        >
          To invent a better healthcare everyday
        </Text>
      </Flex>

      <hr style={{ border: "1px solid black", margin: "64px 0px" }} />
      
      <Flex
      flexDirection={["column", "column", "row"]}
        padding={["0px", "0px", "0px 25px"]}
        justifyContent={"space-between"}
        alignItems={["start", "start","center"]}
      >
        <Text fontFamily={"Bossa-ExtendedBold"} fontSize={["24px", "24px", "48px"]} fontWeight={700}>
          Our Mission
        </Text>
        <Text
          w={["100%", "100%", "50%"]}
          textAlign={"start"}
          color={"#747272"}
          fontFamily={"Bossa-Light"}
          fontSize={["12px", "12px","14px"]}
          fontWeight={300}
        >
          Unlock the power of data to transform the way we live
        </Text>
      </Flex>

      <hr style={{ border: "1px solid black", margin: "64px 0px" }} />

      <Flex
      flexDirection={["column", "column", "row"]}
        padding={["0px", "0px", "0px 25px"]}
        justifyContent={"space-between"}
        alignItems={["start", "start","center"]}
      >
        <Text fontFamily={"Bossa-ExtendedBold"} fontSize={["24px", "24px", "48px"]} fontWeight={700}>
          Our Vision
        </Text>
        <Text
          w={["100%", "100%", "50%"]}
          color={"#747272"}
          fontFamily={"Bossa-Light"}
          fontSize={["12px", "12px","14px"]}
          fontWeight={300}
        >
          Harness data, develop artificial super intelligence and deliver
          innovative health solutions that leverage advanced technology and
          precision medicine to shape the future of healthcare
        </Text>
      </Flex>
    </Box>
    </>
  )
}

export default PurposeMV_AU