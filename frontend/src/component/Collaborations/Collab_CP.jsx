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

import style1 from "./Collab_CP.module.css";
import Marquee from "react-fast-marquee";
import BackgroundVideoContainer from "../BackgroundVideo/BackgroundVideoContainer";
import greenMotionVideo from '../../assets/backgroundVideo/greenMotionVideo.mp4'

const Collab_CP = () => {
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
    <Box position={"relative"}>
    <Box zIndex={-10} position={"relative"} >
      <BackgroundVideoContainer videosrc={greenMotionVideo} height={"641px"}/>
    </Box>
    <Box position={"absolute"} zIndex={2} top={0} bottom={0} left={0} right={0} background={"linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%)"} height={"339px"} w={"100vw"} maxW={"100%"}></Box>
      <Box position={"absolute"} zIndex={2} top={0} bottom={0} left={0} right={0} w={"100vw"} maxW={"100%"} paddingTop={"74px"}>
        <Text
          fontFamily={"Bossa-ExtendedBold"}
          fontSize={["32px", "32px", "60px", "60px"]}
          fontWeight={700}
          className={style1.text}
        >
          Clients & Partners
        </Text>
        <Text
          fontFamily={"Bossa-Regular"}
          padding={["5px 20px"]}
          w={["600px"]}
          maxW={"100vw"}
          margin={"auto"}
          textAlign={"center"}
          fontSize={["18px", "18px", "24px"]}
          fontWeight={400}
          className={style1.text}
        >
          Please provide a subheading for a brief introduction consisting of 1-2
          lines
        </Text>

        <Box mt={"101px"} paddingBottom={"95px"}>
          <Swiper
            breakpoints={{
              1024: {
                slidesPerView: 5.5,
                spaceBetween: 44,
              },
              390: {
                slidesPerView: 3,
                spaceBetween: 22,
              },
            }}
            ref={swiperRef}
            loop={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className={style.swiper}
          >
            <Marquee autoplay autoFill speed={35}>
              <Flex alignItems={"center"}>
                {data?.map((el) => (
                  // <SwiperSlide className={style.swipe_slide}>
                  <Image
                    w={["125px","125px","177px","177px"]}
                    height={["49px","49px","106px","106px"]}
                    objectFit={"cover"}
                    marginLeft={"105px"}
                    src={`${process.env.REACT_APP_BACKEND_URL}${el.attributes.logo.data.attributes.url}`}
                  />

                  // </SwiperSlide>
                ))}
              </Flex>
            </Marquee>
          </Swiper>
        </Box>
      </Box>
      </Box>
    </>
  );
};

export default Collab_CP;
