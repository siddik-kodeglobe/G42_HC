import { Image } from '@chakra-ui/react'
import React from 'react'
import img1 from '../../assets/Collaboration/Img1.svg'

const CollabImg = () => {
  return (
    <>
        <Image w={"100vw"} maxW={"100%"} objectFit={"cover"} src={img1} alt='collabImg'/>
    </>
  )
}

export default CollabImg