import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import img1 from '../../assets/Careers/Img1_FullWidth.svg'

const Img1Career = () => {
  return (
    <>
        <Box margin={["111px 178px 0px 178px"]}>
            <Image w={"100%"} h={"654px"} src={img1} alt='Image 1'/>
        </Box>
    </>
  )
}

export default Img1Career