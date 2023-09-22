import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { AddIcon } from "@chakra-ui/icons";

const AreaOfInterest = () => {
  return (
    <>
      <Box>
        <Text
        fontFamily={"Bossa-ExtendedBold"}
          margin={"auto"}
          mt={["125px"]}
          w={["80%", "80%", "867px", "867px"]}
          fontSize={["24px", "24px", "40px", "40px"]}
          fontWeight={[700]}
          lineHeight={"normal"}
          textAlign={"center"}
        >
          Our Areas of{" "}
          <span style={{ color: "var(--Emergent-Green, #00D2AA)" }}>
            {" "}
            Collaborations interests.
          </span>
        </Text>

        <SimpleGrid
          gap={["21px"]}
          columns={[1, 1, 2, 2]}
          margin={["81px 60px 0px 60px"]}
        >
          {/* 1st Box  */}
          <Box
            position={"relative"}
            backgroundColor={"#ccf6ee"}
            w={["100%"]}
            height={["286px"]}
          >
            <Text
            fontFamily={"Bossa-ExtendedBold"}
              position={"absolute"}
              bottom={["27px"]}
              left={["40px"]}
              color={"var(--Emergent-Green, #004141)"}
              fontSize={["24px", "24px", "32px", "32px"]}
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
            // opacity={"0.2"}
            backgroundColor={"#ccf6ee"}
            w={["100%"]}
            height={["286px"]}
          >
            <Text
            fontFamily={"Bossa-ExtendedBold"}
              position={"absolute"}
              bottom={["27px"]}
              left={["40px"]}
              color={"var(--Emergent-Green, #004141)"}
              fontSize={["24px", "24px", "32px", "32px"]}
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
            height={["286px"]}
          >
            <Text
            fontFamily={"Bossa-ExtendedBold"}
              position={"absolute"}
              bottom={["27px"]}
              left={["40px"]}
              color={"var(--Emergent-Green, #004141)"}
              fontSize={["24px", "24px", "32px", "32px"]}
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
            height={["286px"]}
          >
            <Text
            fontFamily={"Bossa-ExtendedBold"}
              position={"absolute"}
              bottom={["27px"]}
              left={["40px"]}
              color={"var(--Emergent-Green, #004141)"}
              fontSize={["24px", "24px", "32px", "32px"]}
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
