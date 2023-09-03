import { Box } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../Navbar/Navbar'
import NewsBreadcrumb from './NewsBreadcrumb'
import NewsHeading from './NewsHeading'
import Categories from './Categories'
import Video from './Video'
import AllNews from './AllNews'
import Omics from './Omics'
import DigitalHealth from './DigitalHealth'
import AdvancedDiag from './AdvancedDiag'
import IROS from './IROS'
import EnvironmentalSciences from './EnvironmentalSciences'
import PharmaTherapeutics from './PharmaTherapeutics'
import Footer from '../Footer/Footer'

const News = () => {
  return (
    <>
        <Box>
            <Navbar/>
            <NewsBreadcrumb/>
            <NewsHeading/>
            <Categories/>
            <Video/>
            <AllNews/>
            <Omics/>
            <DigitalHealth/>
            <AdvancedDiag/>
            <IROS/>
            <EnvironmentalSciences/>
            <PharmaTherapeutics/>
            <Footer/>
        </Box>
    </>
  )
}

export default News