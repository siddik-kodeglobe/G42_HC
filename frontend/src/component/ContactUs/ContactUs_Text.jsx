import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const ContactUs_Text = () => {
  return (
    <>
        <Box 
        w={"100vw"}
        maxW={"100%"}
        padding={["14px 20px 40px 20px", "50px 4.01% 40px 4.01%", "50px 4.01% 40px 4.01%", "67px 4.01% 60px 4.01%", "67px 4.01% 60px 4.01%", "67px 4.01% 60px 4.01%"]}
        borderBottom={"1px solid #D9D9D9"}>
            <Text fontFamily={"Bossa-ExtendedBold"} fontSize={["24px", "24px", "60px", "60px"]} fontWeight={700} lineHeight={"normal"} textTransform={"capitalize"}>Contact us</Text>
        </Box>
    </>
  )
}

export default ContactUs_Text