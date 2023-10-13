import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import img1 from '../../assets/Careers/Img1_FullWidth.svg'

const Img1Career = () => {
  return (
    <>
    <Box w={"100vw"} maxW={"100%"} 
    padding={["100px 20px 0px 20px","33.7px 4.01% 0px 4.01%" ,"33.7px 4.01% 0px 4.01%", "52px 11.71% 0px 11.71%", "52px 11.71% 0px 11.71%", "52px 11.71% 0px 11.71%" ]}
    >
      <Image w={"100%"} objectFit={"cover"} 
      h={'auto'}
      // h={["200px", "206px", "330px", "427px", "551px", "661"]} 
      src={img1} alt="Img" />
      </Box>
       
    </>
  )
}

export default Img1Career