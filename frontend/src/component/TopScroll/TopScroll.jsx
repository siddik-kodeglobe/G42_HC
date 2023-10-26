import { Box, Image } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import topScroll from '../../assets/icons/scrollToTopIcon.svg'
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const TopScroll = () => {
    const [visible, setvisible] = useState(false);

    var scroll    = Scroll.animateScroll;

  const changevisible = () => {
   window.scrollY >= 800 ? setvisible(true) : setvisible(false);
  }

  useEffect(() => {
    window.addEventListener('scroll', changevisible);
    return () => {
      window.removeEventListener('scroll', changevisible);
    }
  }, [])
  return (
    <>
    <Box color="black" cursor={"pointer"} onClick={() => scroll.scrollToTop()} zIndex={10} display={visible ? "block" : "none"} position={"fixed"} bottom={5} right={5}>
        <Image src={topScroll}/>
        </Box>
    </>
  )
}

export default TopScroll