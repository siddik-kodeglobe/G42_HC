import React from 'react'
import { Flex, Image } from '@chakra-ui/react'
import logo from '../../assets/logo/logo.svg'
import searchIcon from '../../assets/icons/searchIcon.svg'

const Navbar = () => {
  return (
    <>
      <Flex top={0} zIndex={10} position={"fixed"} w={"100vw"}  padding={"22px 60px"} justifyContent={"space-between"} alignItems={"center"}>
        <Image w={"80px"} cursor={"pointer"} src={logo} alt='logo'/>
        <Image  cursor={"pointer"} src={searchIcon} alt='searchIcon'/>
      </Flex>
    </>
  )
}

export default Navbar