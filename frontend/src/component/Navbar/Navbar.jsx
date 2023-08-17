import React, { useEffect, useState } from 'react'
import { Flex, Image } from '@chakra-ui/react'
import logo from '../../assets/logo/logo.svg'
import searchIcon from '../../assets/icons/searchIcon.svg'

const Navbar = () => {
  const [navBg, setNavBg] = useState(false);

  const changeNavBg = () => {
   window.scrollY >= 80 ? setNavBg(true) : setNavBg(false);
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNavBg);
    return () => {
      window.removeEventListener('scroll', changeNavBg);
    }
  }, [])
  return (
    <>
      <Flex top={0} zIndex={10} backgroundColor={navBg ? "white" : "transparent"} position={"fixed"} w={"100vw"} boxShadow={"0px 4px 13px rgba(0, 0, 0, 0.04)"} boxSizing='border-box' padding={"22px 60px"} justifyContent={"space-between"} alignItems={"center"}>
        <Image w={"80px"} cursor={"pointer"} src={logo} alt='logo'/>
        <Image cursor={"pointer"} src={searchIcon} alt='searchIcon'/>
      </Flex>
    </>
  )
}

export default Navbar