import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Benefits = () => {
  return (
    <>
        <Box margin={["79px 20px 0px 20px", "79px 20px 0px 20px", "125px 178px 125px 178px", "125px 178px 125px 178px"]}>
            <Text
fontFamily={"Bossa-ExtendedBold"}
            width={["100%", "100%", "845px", "845px"]}
            color={"black"}
            fontWeight={700}
            fontSize={["30px","30px","60px","60px"]}
            fontStyle={"normal"}
            lineHeight={"normal"}
            >Benefits of working at G42 Healthcare</Text>

            {/* POINTS  */}
            <Box w={["76vw"]} maxW={"100%"} margin={"auto"} mt={"60px"}>
            
            {/* 1st Point  */}
            <Flex flexDir={["column", "column", "row", "row"]} w={"100%"} alignItems={["start", "start", "center", "center"]} justifyContent={"space-between"}>
                <Text fontFamily={"Bossa-ExtendedBold"} fontSize={["60px"]} fontWeight={700} letterSpacing={"-0.42px"} color={"black"} flexShrink={0}>01</Text>
                <Text fontFamily={"Bossa-ExtendedBold"} fontSize={["32px"]} fontWeight={700} letterSpacing={"-0.42px"} color={"black"} flexShrink={0}>Environment & Culture</Text>
                <Text fontFamily={"Bossa-Light"} w={["100%", "100%", "400px", "400px"]} fontSize={["18px"]} fontWeight={300} letterSpacing={"-0.42px"} color={"#747272"}>Need content for these services: Max 3-4 lines. consectetur enim. adipiscing commodo urna elit. nisl. massa placerat. Morbi elit. id sapien at</Text>
            </Flex>

            <hr />

            {/* 2nd Point  */}

            <Flex flexDir={["column", "column", "row", "row"]} w={"100%"} alignItems={["start", "start", "center", "center"]} justifyContent={"space-between"}>
                <Text fontFamily={"Bossa-ExtendedBold"} fontSize={["60px"]} fontWeight={700} letterSpacing={"-0.42px"} color={"black"} flexShrink={0}>02</Text>
                <Text fontFamily={"Bossa-ExtendedBold"} fontSize={["32px"]} fontWeight={700} letterSpacing={"-0.42px"} color={"black"} flexShrink={0}>Career Development</Text>
                <Text fontFamily={"Bossa-Light"} w={["100%", "100%", "400px", "400px"]} fontSize={["18px"]} fontWeight={300} letterSpacing={"-0.42px"} color={"#747272"}>Need content for these services: Max 3-4 lines. consectetur enim. adipiscing commodo urna elit. nisl. massa placerat. Morbi elit. id sapien at</Text>
            </Flex>

            <hr />

            {/* 3rd Point  */}

            <Flex flexDir={["column", "column", "row", "row"]} w={"100%"} alignItems={["start", "start", "center", "center"]} justifyContent={"space-between"}>
                <Text fontFamily={"Bossa-ExtendedBold"} fontSize={["60px"]} fontWeight={700} letterSpacing={"-0.42px"} color={"black"} flexShrink={0}>03</Text>
                <Text fontFamily={"Bossa-ExtendedBold"} fontSize={["32px"]} fontWeight={700} letterSpacing={"-0.42px"} color={"black"} flexShrink={0}>Work Life Balance</Text>
                <Text fontFamily={"Bossa-Light"} w={["100%", "100%", "400px", "400px"]} fontSize={["18px"]} fontWeight={300} letterSpacing={"-0.42px"} color={"#747272"}>Need content for these services: Max 3-4 lines. consectetur enim. adipiscing commodo urna elit. nisl. massa placerat. Morbi elit. id sapien at</Text>
            </Flex>

            <hr />


        </Box>
        </Box>
    </>
  )
}

export default Benefits