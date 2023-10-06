import React from 'react'
import style from './BackgroundVideoContainer.module.css'
import { Box } from '@chakra-ui/react'

const BackgroundVideoContainer = ({videosrc, height}) => {
  return (
    <>
    <Box height={height} className={style.backgroundVideoContainer}>
      <video autoPlay loop muted className={style.backgroundVideo}>
        <source src={videosrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Box>
    </>
  )
}

export default BackgroundVideoContainer