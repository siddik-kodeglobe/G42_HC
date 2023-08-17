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

const Offering = () => {
  const swiperRef = React.useRef(null);
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/offering-services?populate=*`
    );
    console.log(res.data.data);
    setData(res.data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Box mt={"62px"} bgImage={bgImg}>
        <Text
          padding={["40px 15px 0px 15px","72px 60px 0px 178px"]}
          color={"black"}
          fontFamily={"Bossa"}
          fontSize={["32px", "32px", "60px"]}
          fontWeight={700}
        >
          Offerings
        </Text>
        <Box padding={["0px 15px","0px 15px","15px"]} paddingBottom={"15px"}>
          <Swiper
            // slidesPerView={2.75}
            breakpoints={{
              1024: {
                slidesOffsetBefore: 175,
                slidesPerView: 2.75,
                spaceBetween:22,
              },
              390: {
                slidesPerView: 1,
                slidesOffsetBefore: 15
                // spaceBetween:22,
              },
            }}
            ref={swiperRef}
            // navigation={true}
            modules={[Navigation]}
            className={style.swiper}
          >
            {data?.map((el) => (
              <SwiperSlide
                className={style.swipe_slide}
                breakpoints={{
                  1024: {
                    slidesPerView: 2.75,
                    spaceBetween: 54,
                  },
                  390: {
                    slidesPerView: 1,
                    // spaceBetween:22,
                  },
                }}
              >
                <Box
                  backgroundColor={"white"}
                  w={"450px"}
                  h={"458px"}
                  position={"relative"}
                ></Box>

                <Box left={5} bottom={5} position={"absolute"}>
                  <Text
                    noOfLines={2}
                    fontFamily={"Bossa"}
                    fontSize={["24px", "24px", "48px"]}
                    fontWeight={700}
                    lineHeight={"normal"}
                    fontStyle={"normal"}
                  >
                    {el.attributes.title}
                  </Text>
                </Box>

                <Box
                  borderRadius={"50%"}
                  backgroundColor={"#00AFFF"}
                  right={[7,7, 2]}
                  top={5}
                  position={"absolute"}
                >
                  <Image padding={"21px"} src={plus} />
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </>
  );
};

export default Offering;
