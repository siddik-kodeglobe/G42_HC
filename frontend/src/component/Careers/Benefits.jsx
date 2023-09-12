import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Benefits = () => {
  return (
    <>
        <Box margin={["125px 178px 125px 178px"]}>
            <Text
            width={["845px"]}
            color={"black"}
            fontWeight={700}
            fontSize={["30px","30px","60px","60px"]}
            fontStyle={"normal"}
            lineHeight={"normal"}
            >Benefits of working at G42 Healthcare</Text>

            {/* POINTS  */}
            <Box w={["76vw"]} maxW={"100%"} margin={"auto"} mt={"60px"}>
            
            {/* 1st Point  */}
            <Flex w={"100%"} alignItems={"center"} justifyContent={"space-between"}>
                <Text fontSize={["60px"]} fontWeight={700} letterSpacing={"-0.42px"} color={"black"} flexShrink={0}>01</Text>
                <Text fontSize={["32px"]} fontWeight={700} letterSpacing={"-0.42px"} color={"black"} flexShrink={0}>Environment & Culture</Text>
                <Text w={["400px"]} fontSize={["18px"]} fontWeight={300} letterSpacing={"-0.42px"} color={"#747272"}>Need content for these services: Max 3-4 lines. consectetur enim. adipiscing commodo urna elit. nisl. massa placerat. Morbi elit. id sapien at</Text>
            </Flex>

            <hr />

            {/* 2nd Point  */}

            <Flex w={"100%"} alignItems={"center"} justifyContent={"space-between"}>
                <Text fontSize={["60px"]} fontWeight={700} letterSpacing={"-0.42px"} color={"black"} flexShrink={0}>02</Text>
                <Text fontSize={["32px"]} fontWeight={700} letterSpacing={"-0.42px"} color={"black"} flexShrink={0}>Career Development</Text>
                <Text w={["400px"]} fontSize={["18px"]} fontWeight={300} letterSpacing={"-0.42px"} color={"#747272"}>Need content for these services: Max 3-4 lines. consectetur enim. adipiscing commodo urna elit. nisl. massa placerat. Morbi elit. id sapien at</Text>
            </Flex>

            <hr />

            {/* 3rd Point  */}

            <Flex w={"100%"} alignItems={"center"} justifyContent={"space-between"}>
                <Text fontSize={["60px"]} fontWeight={700} letterSpacing={"-0.42px"} color={"black"} flexShrink={0}>03</Text>
                <Text fontSize={["32px"]} fontWeight={700} letterSpacing={"-0.42px"} color={"black"} flexShrink={0}>Work Life Balance</Text>
                <Text w={["400px"]} fontSize={["18px"]} fontWeight={300} letterSpacing={"-0.42px"} color={"#747272"}>Need content for these services: Max 3-4 lines. consectetur enim. adipiscing commodo urna elit. nisl. massa placerat. Morbi elit. id sapien at</Text>
            </Flex>

            <hr />


        </Box>
        </Box>
    </>
  )
}

export default Benefits