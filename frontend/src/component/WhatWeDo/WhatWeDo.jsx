import React from 'react'
import Navbar from '../Navbar/Navbar'
import BreadCrumb from './BreadCrumb'
import Cards from './Cards'
import WhatWeDoFooter from './WhatWeDoFooter'

const WhatWeDo = () => {
  return (
    <>
        <Navbar/>
        <BreadCrumb/>
        <Cards/>
        <WhatWeDoFooter/>
    </>
  )
}

export default WhatWeDo