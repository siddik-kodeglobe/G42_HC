import { Box } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../Navbar/Navbar'
import BreadcrumbCareer from './BreadcrumbCareer'
import CareerText from './CareerText'
import CareerVideo from './CareerVideo'
import Img1Career from './Img1Career'
import LifeAtG42 from './LifeAtG42'
import Benefits from './Benefits'
import JoinUsMarquee from './JoinUsMarquee'
import FooterCareer from './FooterCareer'
import FeaturedJobs from './FeaturedJobs'

const Career = () => {
  return (
    <>
        <Box w={"100vw"} maxW={"100%"}>
            <Navbar/>
            <BreadcrumbCareer/>
            <CareerText/>
            <CareerVideo/>
            <Img1Career/>
            <LifeAtG42/>
            <hr style={{width:"99.8%", border: "1px solid #D9D9D9"}}/>
            <Benefits/>
            <hr style={{width:"99.8%", border: "1px solid #D9D9D9"}}/>
            <FeaturedJobs/>
            <JoinUsMarquee/>
            <FooterCareer/>
        </Box>
    </>
  )
}

export default Career