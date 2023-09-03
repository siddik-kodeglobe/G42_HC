import React from 'react'
import Navbar from '../Navbar/Navbar'
import BreadCrumb from './BreadCrumb'
import Title from './Title'
import Categories from './Categories'
import ImgContainer from './ImgContainer'
import CaseStudies from './CaseStudies'
import Publications from './Publications'
import Events from './Events'
import Podcast from './Podcast'
import SocialMedia from './SocialMediaResources'
import Footer from '../Footer/Footer'
import { Box } from '@chakra-ui/react'

const Resources = () => {
  return (
    <>
        <Navbar/>
        <BreadCrumb/>
        <Title/>
        <Categories/>
        <ImgContainer/>
        <CaseStudies/>
        <Publications/>
        <Events/>
        <Podcast/>
        <SocialMedia/>
        <Footer/>
    </>
  )
}

export default Resources