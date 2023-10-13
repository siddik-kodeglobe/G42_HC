import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import joinTeamImg from '../../assets/contact_us/JoinTheTeamImg.svg'

const JoinOurTeam = () => {
  return (
    <>
        <Flex 
        gap={["29px","48px","75px", "0px", "0px", "0px"]}
         flexWrap={"wrap"} border={"1px solid #D9D9D9"} justifyContent={"space-between"} w={"100vw"} maxW={"100%"}>
            <Box
            mt={["80px", "80px", "80px", "90px", "90px", "90px"]}
             w={["100%", "100%", "100%", "35.09%", "35.09%", "35.09%" ]}
            >
                <Text textAlign={"center"} fontFamily={"Bossa-ExtendedBold"} fontStyle={"normal"} fontSize={["24px","24px", "24px", "24px", "26px", "32px"]} fontWeight={700}>Join our Team</Text>
                <Text textAlign={"center"} fontFamily={"Bossa-Bold"} fontStyle={"normal"} fontSize={["24px"]} fontWeight={700} color={"var(--Emergent-Green, #00D2AA)"}>G42 Healthcare Careers</Text>
            </Box>
            <Box w={["100%", "100%", "100%", "64.91%","64.91%","64.91%"]} 
            h={["285px","368px", "368px", "469px", "605px", "727px" ]}
            >
                <Image w={"100%"} height={"100%"} flexShrink={0} objectFit={"cover"} src={joinTeamImg} alt='JoinOurTeamImg'/>
            </Box>
        </Flex>
    </>
  )
}

export default JoinOurTeam