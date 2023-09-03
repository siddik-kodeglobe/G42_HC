import { Image } from '@chakra-ui/react'
import React from 'react'
import mainImg from '../../assets/Resources/mainImg.svg'

const ImgContainer = () => {
  return (
    <div>
        <Image w={"100vw"} maxW={"100%"} h={"721px"} objectFit={"cover"} src={mainImg}/>
    </div>
  )
}

export default ImgContainer