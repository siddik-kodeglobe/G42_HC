import React from 'react'
import Navbar from '../Navbar/Navbar'
import BreadCrumb from './BreadCrumb'
import Cards from './Cards'
import WhatWeDoFooter from './WhatWeDoFooter'
import Text_WWD from './Text_WWD'

const WhatWeDo = () => {
  return (
    <>
        <Navbar/>
        <BreadCrumb/>
        <Text_WWD/>
        <Cards/>
        <WhatWeDoFooter/>
    </>
  )
}

export default WhatWeDo