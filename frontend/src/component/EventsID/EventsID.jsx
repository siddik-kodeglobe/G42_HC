import { Box } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../Navbar/Navbar'
import Breadcrumb_EventsID from './Breadcrumb_EventsID'
import Title_EventID from './Title_EventID'
import ThumbnailImg_EventID from './ThumbnailImg_EventID'
import Content_EventID from './Content_EventID'
import Footer_NewsID from '../NewsID/Footer_NewsID'

const EventsID = () => {
  return (
    <>
        <Box>
            <Navbar/>
            <Breadcrumb_EventsID/>
            <Title_EventID/>
            <ThumbnailImg_EventID/>
            <Content_EventID/>
            <Footer_NewsID/>
        </Box>
    </>
  )
}

export default EventsID