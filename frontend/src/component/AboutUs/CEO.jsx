import { Avatar, Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

import avatar from '../../assets/aboutUs/ceo_avatar.svg'

const CEO = () => {
  return (
    <div>
      <Flex flexDirection={["column", "column", "row"]} gap={9} margin="78px 10% 0px 10%" justifyContent={"space-between"}>
        <Box w={["100%", "100%", "37%"]}>
          <Text fontFamily={"Bossa"} fontWeight={700} fontSize={["24px", "24px", "30px"]} w={["100%", "100%", "60%"]}>Message from Our CEO</Text>
          <Text fontFamily={"Bossa"} mt={["14px", "14px", "0px"]} fontWeight={300} fontSize={["12px", "12px", "14px"]} color={"#747272"}>
            At G42, we are bound by a clear, common goal: to champion artificial
            intelligence to unleash innovation and progress for every industry
            and society worldwide.
            <br />
            The potential for artificial intelligence is only as big as the
            human imagination and as we explore new territories and unleash the
            full potential of AI, we look forward to delivering exponential
            value to our present and future clients and partners through our
            professional excellence, in-depth understanding of different
            industries, and unique combination of technological resources and
            investments expertise.
          </Text>
          <Text fontFamily={"Bossa"} color={"#00D2AA"} fontSize={"20px"} fontWeight={700} mt={7}>Ashish Koshy</Text>
          <Text fontFamily={"Bossa"} fontWeight={300} fontSize={"14px"}>CEO, G42 Healthcare</Text>
        </Box>
            {/* <Image src={avatar} w={"763px"} h={"1040px"} alt="CEO Avatar"/> */}
            <Image src={avatar} w={["100%", "100%", "40%"]} alt="CEO Avatar"/>
        
      </Flex>
    </div>
  );
};

export default CEO;
