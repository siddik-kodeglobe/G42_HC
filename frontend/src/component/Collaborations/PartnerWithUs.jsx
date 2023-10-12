import React from "react";
import Marquee from "react-fast-marquee";
import { Box, Button, Flex, Text } from "@chakra-ui/react";

const PartnerWithUs = () => {
  return (
    <>
      <Box w={"100%"} mt={["80px", "80px", "80px", "81px", "105px", "125px"]}>
        <Marquee autoFill>
          <Flex alignItems={"center"} gap={"31px"}>
            
            <Box border={"1px solid black"} w={["88px", "88px", "88px", "109px", "140px", "166px"]}></Box>

            <Text
            fontFamily={"Bossa-ExtendedBold"}
              textAlign={"center"}
              color={"black"}
              fontSize={["32px","32px", "32px", "50px", "60px", "75px"]}
              // fontWeight={700}
              lineHeight={["81px"]}
            >
                Partner with us
            </Text>
            <Box border={"1px solid black"} w={["88px", "88px", "88px", "109px", "140px", "166px"]}></Box>

          </Flex>
        </Marquee>
      </Box>
    </>
  );
};

export default PartnerWithUs;
