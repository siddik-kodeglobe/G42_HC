import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import img1 from '../../assets/Careers/Img1_FullWidth.svg'

const Img1Career = () => {
  return (
    <>
        <Box margin={["10px 22px 0px 22px", "10px 22px 0px 22px", "111px 178px 0px 178px", "111px 178px 0px 178px"]}>
            <Image w={"100%"} h={["194px","194px","100%","100%"]} objectFit={"cover"} src={img1} alt='Image 1'/>
        </Box>
    </>
  )
}

export default Img1Career