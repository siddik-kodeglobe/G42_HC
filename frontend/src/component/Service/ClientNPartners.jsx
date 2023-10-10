import { Box, Flex, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

// Import Swipper
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Install Swiper modules
import { FreeMode, Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

import style from "../AboutUs/OurPartner_Slider.module.css";

import style1 from "../Home/ClientnPartner.module.css";
import Marquee from "react-fast-marquee";

import Vimeo from "@u-wave/react-vimeo";
import greenMotionVideo from "../../assets/backgroundVideo/greenMotionVideo.mp4";
import BackgroundVideoContainer from "../BackgroundVideo/BackgroundVideoContainer";
import { isMobile, isTablet } from "react-device-detect";

const ClientNPartner = () => {
  const [data, setData] = useState([]);

  const swiperRef = React.useRef(null);

  const getData = async () => {
    // console.log(`${process.env.REACT_APP_BACKEND_URL}/api/teams?populate=*`);
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/partners?populate=*`
    );
    setData(res.data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
    <Box w={"100vw"} maxW={"100%"} position={"relative"}>
    <Box height={isMobile ? "400px" : isTablet ? "450px" : "539px"} zIndex={-10} position={"relative"} mt={["79px","79px","79px","81px", "105px", "126px"]}>
      <BackgroundVideoContainer videosrc={greenMotionVideo} height={"100%"}/>
    </Box>
    <Box position={"absolute"} zIndex={2} top={0} bottom={0} left={0} right={0} background={"linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%)"} height={"339px"} w={"100vw"} maxW={"100%"}></Box>
      <Box position={"absolute"} zIndex={2} top={0} bottom={0} left={0} right={0} w={"100vw"} maxW={"100%"} paddingTop={"74px"}>
        <Text
          fontFamily={"Bossa-ExtendedBold"}
          fontSize={["32px", "32px", "32px", "39px", "50px", "60px"]}
          fontWeight={700}
          className={style1.text}
        >
          Clients & Partners
        </Text>
        <Text
          fontFamily={"Bossa-Regular"}
          padding={["5px 20px"]}
          margin={"auto"}
          textAlign={"center"}
          fontSize={["14px", "14px", "14px", "15px", "20px", "24px"]}
          fontWeight={400}
          className={style1.text}
        >
          Please provide a subheading for a brief introduction consisting of 1-2
          lines
        </Text>

        <Box mt={["60px","60px","60px", "60px", "72px", "72px"]} 
        paddingBottom={["78px", "78px", "78px", "91px", "118px", "141px"]}
        >
          
            <Marquee autoplay autoFill speed={35}>
              <Flex alignItems={"center"}>
                {data?.map((el) => (
                  <Image
                  w={"fit-content"}
                  h={["49px","49px","49px", "56px", "72px", "87px"]}
                    objectFit={"cover"}
                    marginLeft={["40px","40px","40px", "105px","105px","105px"]}
                    src={`${process.env.REACT_APP_BACKEND_URL}${el.attributes.logo.data.attributes.url}`}
                  />
                ))}
              </Flex>
            </Marquee>
        </Box>
      </Box>
      </Box>
    </>
  );
};

export default ClientNPartner;
