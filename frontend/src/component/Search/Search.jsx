import { Box } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../Navbar/Navbar'
import Breadcrumb_Search from './Breadcrumb_Search'
import Text_Search from './Text_Search'
import Input_Search from './Input_Search'
import Categories_Search from './Categories_Search'
import Footer_Search from './Footer_Search'
import TopScroll from '../TopScroll/TopScroll'

const Search = () => {
  return (
    <>
        <Box>
            <Navbar/>
            <Breadcrumb_Search/>
            <Text_Search/>
            <Input_Search/>
            <Categories_Search/>
            <Footer_Search/>
            <TopScroll/>
        </Box>
    </>
  )
}

export default Search