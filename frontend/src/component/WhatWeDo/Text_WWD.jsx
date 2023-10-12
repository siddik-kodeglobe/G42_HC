import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const Text_WWD = () => {
  return (
    <>
        <Box 
        w={"100vw"}
        maxW={"100%"}
        borderBottom={["1px solid #D9D9D9"]} 
        padding={["14px 0px 40px 20px", "14px 0px 40px 20px", "14px 0px 40px 20px", "32px 0px 78px 3.94%", "32px 0px 101px 3.94%", "32px 0px 121px 3.94%", ]}
        >
            <Text fontFamily={"Bossa-ExtendedBold"} color={"black"} fontSize={["24px","24px","24px","39px", "50px","60px"]} fontStyle={"normal"} fontWeight={[700]} lineHeight={["68px"]} textTransform={"capitalize"}>What we do</Text>
        </Box>
    </>
  )
}

export default Text_WWD