import { Box, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import bgImg from "../../assets/Services/Offering/bgImg.svg";
// Import Swipper
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import style from "../AboutUs/OurPartner_Slider.module.css";
import axios from "axios";
import minus from "../../assets/icons/minus.svg";
import plus from "../../assets/Services/icons/plus.svg";
import BackgroundVideoContainer from "../BackgroundVideo/BackgroundVideoContainer";
import blueMotionVideo from "../../assets/backgroundVideo/blueMotionVideo.mp4";
import { isMobile, isTablet } from "react-device-detect";
import { useParams } from "react-router-dom";

const Offering = () => {
  const swiperRef = React.useRef(null);
  const [data, setData] = useState([]);

  const {name} = useParams();

  const getData = async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/offering-services?filters[tag][$eq]=${name}&populate=*`
    );
    console.log(res.data.data);
    setData(res.data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Box
        w={"100vw"}
        maxW={"100%"}
        mt={["80px", "80px", "80px", "41px", "53px", "63px"]}
        position={"relative"}
      >
        <Box height={isMobile ? "542px" : isTablet ? "507px" : "777px"} zIndex={-10} position={"relative"}>
          <BackgroundVideoContainer
            videosrc={blueMotionVideo}
            height={"100%"}
          />
        </Box>
        <Box
          height={["400px","400px","400px", "447px", "577px", "692px"]}
          position={"absolute"}
          zIndex={1}
          top={0}
          left={0}
          right={0}
          background={
            "linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%)"
          }
        ></Box>
        <Box position={"absolute"} zIndex={2} top={0} left={0} right={0}>
          <Text
            fontFamily={"Bossa-ExtendedBold"}
            padding={["50px 0px 0px 20px", "53px 0px 0px 20px","53px 0px 0px 20px","53px 0px 0px 11.71%","53px 0px 0px 11.71%","53px 0px 0px 11.71%" ]}
            color={"black"}
            fontSize={["24px", "24px", "24px", "39px", "50px", "60px"]}
            fontWeight={700}
          >
            Offerings
          </Text>
          <Box mt={["40px", "57px"]} paddingBottom={"15px"}>
            <Swiper
              slidesPerView={'auto'}
              breakpoints={{
                380: {
                  slidesOffsetBefore: 21,
                  // slidesPerView: 1.25,
                  spaceBetween: 11,
                },
                750: {
                  slidesOffsetBefore: 21,
                  // slidesPerView: 1.5,
                  spaceBetween: 11,
                },
                990: {
                  slidesOffsetBefore: 116,
                  // slidesPerView: 2.25,
                  spaceBetween: 13,
                },
                1250: {
                  slidesOffsetBefore: 149,
                  // slidesPerView: 2.5,
                  spaceBetween: 18,
                },
                1530: {
                  slidesOffsetBefore: 178,
                  // slidesPerView: 2.75,
                  spaceBetween: 21,
                },
              }}
              ref={swiperRef}
              // navigation={true}
              modules={[Navigation]}
              className={style.swiper}
            >
              {data?.map((el) => (
                <SwiperSlide
                  className={style.swiper_slide}
                >
                  <Box
                    backgroundColor={"white"}
                    w={["338px", "338px", "338px", "338px", "393px", "472px"]}
                    h={["338px","338px", "338px", "338px", "385px", "463px"]}
                    position={"relative"}
                  ></Box>

                  <Box left={5} bottom={5} position={"absolute"}>
                    {/* add index bug */}
                    <Text
                      fontFamily={"Bossa-ExtendedBold"}
                      noOfLines={2}
                      fontSize={["32px", "32px", "32px", "31px", "40px", "48px"]}
                      fontWeight={700}
                      w={["338px", "338px", "338px", "338px", "393px", "472px"]}
                      lineHeight={"normal"}
                      fontStyle={"normal"}
                    >
                      {el.attributes.title}
                    </Text>
                  </Box>

                  <Box
                    borderRadius={"50%"}
                    backgroundColor={"#00AFFF"}
                    right={"5%"}
                    top={"5%"}
                    position={"absolute"}
                  >
                    <Box h={["42px", "42px", "42px", "48px", "62px", "74px"]} w={["42px", "42px", "42px", "48px", "62px", "74px"]}>
                    <Image 
                    w={"100%"} h={"100%"} 
                    padding={["12px","12px","12px", "13.71px", "17.68px", "21px"]} 
                    src={plus} />
                    </Box>
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Offering;
