import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const PurposeMV = () => {
  return (
    <div style={{ margin: "78px 10% 0px 10%" }}>
      <Flex
        padding={"0px 25px"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Text fontFamily={"Bossa"} fontSize={48} fontWeight={700}>
          Our Purpose
        </Text>
        <Text
          color={"#747272"}
          fontFamily={"Bossa"}
          fontSize={"14px"}
          fontWeight={300}
        >
          To invent a better healthcare everyday
        </Text>
      </Flex>
      <hr style={{ border: "1px solid black", margin: "64px 0px" }} />
      <Flex
        padding={"0px 25px"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Text fontFamily={"Bossa"} fontSize={48} fontWeight={700}>
          Our Mission
        </Text>
        <Text
          color={"#747272"}
          fontFamily={"Bossa"}
          fontSize={"14px"}
          fontWeight={300}
        >
          Unlock the power of data to transform the way we live
        </Text>
      </Flex>

      <hr style={{ border: "1px solid black", margin: "64px 0px" }} />

      <Flex
        padding={"0px 25px"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Text fontFamily={"Bossa"} fontSize={48} fontWeight={700}>
          Our Vision
        </Text>
        <Text
          w={"47%"}
          color={"#747272"}
          fontFamily={"Bossa"}
          fontSize={"14px"}
          fontWeight={300}
        >
          Harness data, develop artificial super intelligence and deliver
          innovative health solutions that leverage advanced technology and
          precision medicine to shape the future of healthcare
        </Text>
      </Flex>
    </div>
  );
};

export default PurposeMV;