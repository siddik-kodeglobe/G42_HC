import { Box } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../Navbar/Navbar'
import Intro_AU from './Intro_AU'
import Video_AU from './Video_AU'
import Slider_AU from './Slider_AU'
import WhoWeAre_AU from './WhoWeAre_AU'
import PurposeMV_AU from './PurposeMV_AU'
import CEO_msg_AU from './CEO_msg_AU'
import Partners_AU from './Partners_AU'
import Charting_AU from './Charting_AU'
import MeetTeam_AU from './MeetTeam_AU'
import Footer_AU from './Footer_AU'
import Breadcrumb_AU from './Breadcrumb_AU'

const AboutUs = () => {
  return (
    <>
      <Box pos={"relative"}>
        <Navbar/>
        <Breadcrumb_AU/>
        <Intro_AU/>
        <Video_AU/>
        <Slider_AU/>
        <WhoWeAre_AU/>
        <PurposeMV_AU/>
        <CEO_msg_AU/>
        <Partners_AU/>
        <Charting_AU/>
        <MeetTeam_AU/>
        <Footer_AU/>
    </Box>  
    </>
  )
}

export default AboutUs