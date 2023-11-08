import { Box, Flex, Image } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import topScroll from '../../assets/icons/topScrollArrow.svg'
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
    <Box w={["54px"]} h={["54px"]} bgColor={"#00D2AA"} _hover={{bgColor: "#004141"}}  borderRadius={"50%"} color="black" cursor={"pointer"} onClick={() => scroll.scrollToTop()} zIndex={10} display={visible ? "block" : "none"} position={"fixed"} bottom={5} right={5}>
      <Flex h={"100%"} w={"100%"} justifyContent={"center"} alignItems={"center"}>
        <Image  w={["20px"]} h={["20px"]} src={topScroll}/>
        </Flex>
        </Box>
    </>
  )
}

export default TopScroll