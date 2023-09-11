import React from 'react'
import Navbar from '../Navbar/Navbar'
import Breadcrumb_NewsID from './Breadcrumb_NewsID'
import Title_NewsID from './Title_NewsID'
import ThumbnailImg_NewsID from './ThumbnailImg_NewsID'
import Heading_NewsID from './Heading_NewsID'
import Footer_NewsID from './Footer_NewsID'

const NewsID = () => {
  return (
    <div>
        <Navbar/>
        <Breadcrumb_NewsID/>
        <Title_NewsID/>
        <ThumbnailImg_NewsID/>
        <Heading_NewsID/>
        <Footer_NewsID/>
    </div>
  )
}

export default NewsID