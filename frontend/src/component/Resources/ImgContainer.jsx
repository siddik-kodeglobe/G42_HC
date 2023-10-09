import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import mainImg from '../../assets/Resources/mainImg.svg'

const ImgContainer = () => {
  return (
    <>
      <Box w={"100vw"} maxW={"100%"}>
        <Image w={"100%"}  h={["309px","309px","364px","470px","607px","729px"]} objectFit={"cover"} src={mainImg}/>
        </Box>
    </>
  )
}

export default ImgContainer