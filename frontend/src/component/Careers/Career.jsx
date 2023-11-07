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
            {/* Remove video and add IMG */}
            <CareerVideo/>
            <Img1Career/>
            <LifeAtG42/>
            <Benefits/>
            <FeaturedJobs/>
            <JoinUsMarquee/>
            <FooterCareer/>
        </Box>
    </>
  )
}

export default Career