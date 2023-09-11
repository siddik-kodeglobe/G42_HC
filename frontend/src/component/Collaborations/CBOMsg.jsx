import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import CBO from '../../assets/Collaboration/Kareem_Shaheen_CBO.svg'

const CBOMsg = () => {
  return (
    <>
        <Box mt={["124px"]} backgroundColor={"#004141"} h={["814px"]} w={["100vw"]} maxW={"100%"}>
            <Flex alignItems={"start"} padding={"56px 154px"}>
                <Flex flexDirection={["column"]} w={"50%"} alignItems={"start"}>
                    <Text w={["267px"]} maxW={"100%"} color={"white"} fontSize={["18px"]} fontWeight={700} lineHeight={"normal"} fontStyle={"normal"}>Message from Chief Business Officer</Text>
                    <Text mt={["45px"]} color={"#00D2AA"} fontSize={["60px"]} fontWeight={700} lineHeight={"normal"} fontStyle={"normal"}>Headline 1-2 line max.</Text>
                    <Text w={["392px"]} maxW={"100%"} mt={["33px"]} color={"white"} fontSize={["14px"]} fontWeight={300} lineHeight={["21px"]} fontStyle={"normal"} letterSpacing={["-0.42px"]}>The potential for artificial intelligence is only as big as the human imagination and as we explore new territories and unleash the full potential of AI, we look forward to delivering exponential value to our present and future clients and partners through our professional excellence, in-depth understanding of different industries, and unique combination of technological resources and investments expertise.</Text>

                    <Box mt={["30px"]}>
                        <Text color={"#00D2AA"} fontSize={["20px"]} fontWeight={700} lineHeight={"normal"}>Kareem Shaheen</Text>
                        <Text color={"white"} fontSize={["14px"]} fontWeight={300} lineHeight={"normal"}>Chief Business Officer</Text>
                    </Box>
                </Flex>
                <Flex flexDirection={["column"]} w={"50%"} alignItems={"start"}>
                    <Image w={["468px"]} maxW={"100%"} h={["700px"]} flexShrink={0} objectFit={"cover"} src={CBO}/>
                </Flex>
            </Flex>
        </Box>
    </>
  )
}

export default CBOMsg