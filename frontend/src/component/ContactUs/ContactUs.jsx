import React from 'react'
import Navbar from '../Navbar/Navbar'
import Breadcrumb_CU from './Breadcrumb_CU'
import Connect from './Connect'
import { Box, Flex } from '@chakra-ui/react'
import IconDiv from './IconDiv'
import JoinOurTeam from './JoinOurTeam'
import EnquiryForm from './EnquiryForm'
import Footer_CU from './Footer_CU'

const ContactUs = () => {
  return (
    <>
        
        <Navbar/>
        <Breadcrumb_CU/>
        {/* <hr style={{width: "99vw"}}/> */}
        <Connect/>
        <IconDiv/>
        <JoinOurTeam/>
        <EnquiryForm/>
        <Footer_CU/>
    </>
  )
}

export default ContactUs