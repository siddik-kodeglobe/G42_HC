import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { AddIcon } from "@chakra-ui/icons";

const AreaOfInterest = () => {
  return (
    <>
      <Box>
        <Text
          fontFamily={"Bossa-ExtendedBold"}
          w={"100%"}
          padding={[
            "80px 20px 0px 20px",
            "63px 11.71% 0px 11.71%",
            "81px 11.71% 0px 11.71%",
            "105px 11.71% 0px 11.71%",
            "125px 11.71% 0px 11.71%",
          ]}
          fontSize={["24px", "24px", "24px", "26px", "33px", "40px"]}
          lineHeight={"normal"}
          textAlign={"center"}
        >
          Our Areas of{" "}
          
          <span style={{ color: "var(--Emergent-Green, #00D2AA)" }}>
            {""}
            Collaborations <br /> interests.
          </span>
        </Text >
        

        <SimpleGrid
          gap={["21px"]}
          columns={[1, 2, 2, 2, 2, 2]}
          padding={[
            "25px 20px 0px 20px",
            "25px 11.71% 0px 11.71%",
            "40px 11.71% 0px 11.71%",
            "52px 11.71% 0px 11.71%",
            "67px 11.71% 0px 11.71%",
            "80px 11.71% 0px 11.71%",
          ]}
          // margin={["25px 20px 0px 20px","25px 20px 0px 20px", "81px 60px 0px 60px", "81px 60px 0px 60px"]}
        >
          {/* 1st Box  */}
          <Box
            position={"relative"}
            backgroundColor={"#ccf6ee"}
            w={["100%"]}
            height={["240px", "240px", "144px", "186px", "241px", "289px"]}
          >
            <Text
              fontFamily={"Bossa-ExtendedBold"}
              position={"absolute"}
              bottom={["27px"]}
              left={["40px"]}
              color={"var(--Emergent-Green, #004141)"}
              fontSize={["24px", "24px","16px", "20px", "26px", "32px"]}
              fontStyle={"normal"}
              fontWeight={[700]}
              lineHeight={"normal"}
            >
              Data monetization
            </Text>
            <Flex
              justifyContent={"center"}
              alignItems={"center"}
              position={"absolute"}
              borderRadius={["21px"]}
              top={"15px"}
              right={["15px"]}
              padding={["12px"]}
              backgroundColor={["var(--Emergent-Green, #00D2AA)"]}
              w={["42px"]}
              height={["42px"]}
            >
              <AddIcon width={["18px"]} height={["18px"]} color={"white"} />
            </Flex>
          </Box>

          {/* 2nd Box  */}
          <Box
            position={"relative"}
            backgroundColor={"#ccf6ee"}
            w={["100%"]}
            height={["240px", "240px", "144px", "186px", "241px", "289px"]}
          >
            <Text
              fontFamily={"Bossa-ExtendedBold"}
              position={"absolute"}
              bottom={["27px"]}
              left={["40px"]}
              color={"var(--Emergent-Green, #004141)"}
              fontSize={["24px", "24px","16px", "20px", "26px", "32px"]}
              fontStyle={"normal"}
              fontWeight={[700]}
              lineHeight={"normal"}
            >
              Contract research
            </Text>
            <Flex
              justifyContent={"center"}
              alignItems={"center"}
              position={"absolute"}
              borderRadius={["21px"]}
              top={"15px"}
              right={["15px"]}
              padding={["12px"]}
              backgroundColor={["var(--Emergent-Green, #00D2AA)"]}
              w={["42px"]}
              height={["42px"]}
            >
              <AddIcon width={["18px"]} height={["18px"]} color={"white"} />
            </Flex>
          </Box>

          {/* 3rd Box  */}
          <Box
            position={"relative"}
            backgroundColor={"#ccf6ee"}
            w={["100%"]}
            height={["240px", "240px", "144px", "186px", "241px", "289px"]}
          >
            <Text
              fontFamily={"Bossa-ExtendedBold"}
              position={"absolute"}
              bottom={["27px"]}
              left={["40px"]}
              color={"var(--Emergent-Green, #004141)"}
              fontSize={["24px", "24px","16px", "20px", "26px", "32px"]}
              fontStyle={"normal"}
              fontWeight={[700]}
              lineHeight={"normal"}
            >
              Sequencing
            </Text>
            <Flex
              justifyContent={"center"}
              alignItems={"center"}
              position={"absolute"}
              borderRadius={["21px"]}
              top={"15px"}
              right={["15px"]}
              padding={["12px"]}
              backgroundColor={["var(--Emergent-Green, #00D2AA)"]}
              w={["42px"]}
              height={["42px"]}
            >
              <AddIcon width={["18px"]} height={["18px"]} color={"white"} />
            </Flex>
          </Box>

          {/* 4th Box  */}
          <Box
            position={"relative"}
            backgroundColor={"#ccf6ee"}
            w={["100%"]}
            height={["240px", "240px", "144px", "186px", "241px", "289px"]}
          >
            <Text
              fontFamily={"Bossa-ExtendedBold"}
              position={"absolute"}
              bottom={["27px"]}
              left={["40px"]}
              color={"var(--Emergent-Green, #004141)"}
              fontSize={["24px", "24px","16px", "20px", "26px", "32px"]}
              fontStyle={"normal"}
              fontWeight={[700]}
              lineHeight={"normal"}
            >
              Lorem Ipsum
            </Text>
            <Flex
              justifyContent={"center"}
              alignItems={"center"}
              position={"absolute"}
              borderRadius={["21px"]}
              top={"15px"}
              right={["15px"]}
              padding={["12px"]}
              backgroundColor={["var(--Emergent-Green, #00D2AA)"]}
              w={["42px"]}
              height={["42px"]}
            >
              <AddIcon width={["18px"]} height={["18px"]} color={"white"} />
            </Flex>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
};

export default AreaOfInterest;
