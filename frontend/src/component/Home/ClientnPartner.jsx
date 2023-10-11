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

import style1 from "./ClientnPartner.module.css";
import Marquee from "react-fast-marquee";

import Vimeo from "@u-wave/react-vimeo";
import greenMotionVideo from "../../assets/backgroundVideo/greenMotionVideo.mp4";
import BackgroundVideoContainer from "../BackgroundVideo/BackgroundVideoContainer";

const ClientnPartner = () => {
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
        <Box
          height={["400px", "400px", "400px", "446px", "602px", "715px"]}
          zIndex={-10}
          position={"relative"}
        >
          <BackgroundVideoContainer
            videosrc={greenMotionVideo}
            height={"100%"}
          />
        </Box>
        <Box
          w={"100%"}
          position={"absolute"}
          zIndex={2}
          top={0}
          bottom={0}
          left={0}
          right={0}
          background={
            "linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%)"
          }
          height={"339px"}
        ></Box>
        <Box
          position={"absolute"}
          zIndex={2}
          top={0}
          bottom={0}
          left={0}
          right={0}
          w={"100%"}
          paddingTop={"74px"}
        >
          <Text
            fontFamily={"Bossa-ExtendedBold"}
            fontSize={["32px", "32px", "32px", "39px", "50px", "60px"]}
            className={style1.text}
            fontWeight={700}
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
            fontSize={["14px", "14px","14px", "15px", "20px", "24px"]}
            fontWeight={400}
            className={style1.text}
          >
            Please provide a subheading for a brief introduction consisting of
            1-2 lines
          </Text>

          <Box mt={["59px", "59px", "59px", "71px", "92px", "101px"]} paddingBottom={["78px", "78px", "78px", "133px", "171px", "205px"]}>
            <Marquee autoplay autoFill speed={35}>
              <Flex alignItems={"center"}>
                {data?.map((el) => (
                  <Image
                  w={"fit-content"}
                    height={["49px", "49px","49px", "82px", "106px", "127px"]}
                    objectFit={"cover"}
                    marginLeft={"105px"}
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

export default ClientnPartner;
