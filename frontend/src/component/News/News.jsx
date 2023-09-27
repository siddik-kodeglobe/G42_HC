import { Box } from '@chakra-ui/react'
import React, { useState } from 'react'
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
import Footer_News from './Footer_News'
import LoadMore_News from './LoadMore_News'

const News = () => {
  const [loadmore, setLoadMore] = useState(true);

  const onChangeLoadStatus = () => {
    setLoadMore(false);
  }
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
            {
              loadmore ? <LoadMore_News onChangeLoadStatus={onChangeLoadStatus}/> : 
              <Box>
            <IROS/>
            <EnvironmentalSciences/>
            <PharmaTherapeutics/>
            </Box>
            }
            <Footer_News/>
        </Box>
    </>
  )
}

export default News