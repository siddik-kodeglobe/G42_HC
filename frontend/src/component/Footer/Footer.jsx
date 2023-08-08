import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import G42Logo from '../../assets/Footer/G42_logo.svg'
import certifiedImg from '../../assets/Footer/Certified_Img.svg';
import instaIcon from '../../assets/Footer/insta.svg';
import linkedinIcon from '../../assets/Footer/linkedin.svg';
import twitterIcon from '../../assets/Footer/twitter.svg';
import ytIcon from '../../assets/Footer/yt.svg';

const Footer = () => {
  return (
    <div>
        <Flex fontFamily={"Bossa"} fontSize={14} fontWeight={700} color={"black"} alignItems={"start"} justifyContent={"space-between"}>
            <Image src={G42Logo}/>
            <Flex alignItems={"top"} gap={7}>
                <Box>
                    <Text>About G42 Healthcare</Text>
                    <Text>News</Text>
                    <Text>What We Do</Text>
                    <Text>Case Studies</Text>
                </Box>

                <Box>
                    <Text>Careers</Text>
                    <Text>Cookies Policy</Text>
                </Box>
                
            </Flex>

            <Flex h={"fit-content"} alignItems={"end"}>
                <Box>
                    <Text>SOCIAL MEDIA:</Text>
                    <Flex mt={2} gap={7}>
                        <Image w={18} src={instaIcon}/>
                        <Image w={18} src={linkedinIcon}/>
                        <Image w={18} src={twitterIcon}/>
                        <Image w={18} src={ytIcon}/>
                    </Flex>
                </Box>
                <Image src={certifiedImg}/>
            </Flex>
        </Flex>

        <hr style={{marginTop: "10%", }} />

        <Flex fontFamily={"Bossa"} fontSize={14} fontWeight={300} color={"black"} margin={"25px 0px"} alignItems={"center"} justifyContent={"space-between"}>
            <Text>{new Date().getFullYear()} G42. All right reserved</Text>
            <Text>Terms&Conditions | Privacy Policy</Text>
        </Flex>
    </div>
  )
}

export default Footer