import { Box } from '@chakra-ui/react'
import React from 'react'
import Footer from '../Footer/Footer'

const Footer_Resources = () => {
  return (
    <div>
        <Box mt={["30px","30px","30px","71px","71px","71px"]} w={"100vw"} maxW={"100%"} 
        padding={["49px 20px 15px 20px","49px 20px 15px 20px","49px 20px 15px 20px", "53px 11.71%  32px 11.71%", "53px 11.71%  32px 11.71%", "53px 11.71%  32px 11.71%"]} 
        borderTop={"1px solid #D9D9D9"}>
            <Footer/>
        </Box>
    </div>
  )
}

export default Footer_Resources