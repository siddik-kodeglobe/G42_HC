import { Box, Image, Text } from "@chakra-ui/react";
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

import style1 from './ClientNPartner.module.css'

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
    <Box mt={"123px"} bgColor={"#F5F5F5"} paddingTop={"74px"}>
      <Text fontSize={["32px", "32px", "60px"]} fontWeight={700} className={style1.text}>Clients & Partners</Text>
      <Text padding={["5px 20px"]} fontSize={["18px", "18px", "24px"]} fontWeight={400} className={style1.text}>
        Please provide a subheading for a brief introduction consisting of 1-2
        lines.
      </Text>

      <Box mt={"101px"} paddingBottom={"95px"}>
        <Swiper
          breakpoints={{
            1024: {
              slidesPerView: 5.5,              
              spaceBetween:44,
            },
            390: {
              slidesPerView: 3,
              spaceBetween:22,
            },
          }}
          ref={swiperRef}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className={style.swiper}
        >
          {data?.map((el) => (
            <SwiperSlide className={style.swipe_slide}>
              <Box w={"fit-content"}>
                <Image
                w={"100px"}
                  src={`${process.env.REACT_APP_BACKEND_URL}${el.attributes.logo.data.attributes.url}`}
                />
               
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      </Box>
    </>
  );
};

export default ClientNPartner;
