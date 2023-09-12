import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import joinTeamImg from '../../assets/contact_us/JoinTheTeamImg.svg'

const JoinOurTeam = () => {
  return (
    <>
        <Flex border={"1px solid #D9D9D9"} justifyContent={"space-between"} w={"100vw"} maxW={"100%"}>
            <Box marginLeft={["36px"]}>
                <Text fontStyle={"normal"} fontSize={["32px"]} fontWeight={700}>Join our Team</Text>
                <Text fontStyle={"normal"} fontSize={["24px"]} fontWeight={700} color={"var(--Emergent-Green, #00D2AA)"}>G42 Healthcare Careers</Text>
            </Box>
            <Box h={["719px"]} w={["65%"]}>
                <Image w={"100%"} height={"100%"} flexShrink={0} objectFit={"cover"} src={joinTeamImg} alt='JoinOurTeamImg'/>
            </Box>
        </Flex>
    </>
  )
}

export default JoinOurTeam