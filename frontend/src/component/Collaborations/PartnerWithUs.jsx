import React from "react";
import Marquee from "react-fast-marquee";
import { Box, Button, Flex, Text } from "@chakra-ui/react";

const PartnerWithUs = () => {
  return (
    <>
      <Box mt={["125px"]}>
        <Marquee autoFill>
          <Flex alignItems={"center"} gap={["16px", "16px", "34px"]}>
            <hr
              style={{
                width: "88px",
                border: "1px solid black",
                margin: "auto",
              }}
            />

            <Text
              textAlign={"center"}
              fontFamily={"Bossa"}
              fontSize={["32px", "32px", "50px", "60px"]}
              fontWeight={700}
              lineHeight={["81px"]}
            >
                Partner with us
            </Text>
            <hr
              style={{
                width: "88px",
                border: "1px solid black",
                margin: "auto",
              }}
            />
          </Flex>
        </Marquee>
      </Box>
    </>
  );
};

export default PartnerWithUs;
