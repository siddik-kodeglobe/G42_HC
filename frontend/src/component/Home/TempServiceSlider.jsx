import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

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

const OurServices = () => {
  const [backgroundImg, setBackgroundImg] = useState("");

  const [data, setData] = useState([]);
  // const swiper = useSwiper();
  const swiperRef = React.useRef(null);

  const getData = async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/services?populate=*`
    );
    console.log(res.data.data);
    setData(res.data.data);
  };

  const handleSlideChange = () => {
    if (swiperRef.current) {
      const swiperInstance = swiperRef.current.swiper;
      // Get the active slide index
      const activeIndex = swiperInstance.activeIndex;
      
      // Get the active slide element
      const activeSlide = swiperInstance.slides[activeIndex];
      setBackgroundImg(activeSlide.children[0].children[0].src)
      const secondSlide = swiperInstance.slides[activeIndex + 1];
      const thirdSlide = swiperInstance.slides[activeIndex + 2];

      activeSlide.style.height = `426px`;
      activeSlide.style.width = `571px`;
      activeSlide.children[0].children[1].style.display = "block"
      activeSlide.children[0].children[2].style.display = "block"

      secondSlide.style.height = `316px`;
      secondSlide.style.width = `453px`;
      secondSlide.children[0].children[1].style.display = "block"
      secondSlide.children[0].children[2].style.display = "none"
      
      thirdSlide.style.height = `189px`;
      thirdSlide.style.width = `320px`;
      thirdSlide.children[0].children[1].style.display = "none"
      thirdSlide.children[0].children[2].style.display = "none"


      console.log("activeIndex", activeIndex);
      console.log("activeSlide", activeSlide);
    //   console.log("para", activeSlide.children[0].children[2]);
    }
  };

  useEffect(() => {
    console.log("uyebrbibn", swiperRef.current.swiper.activeIndex);
  }, [swiperRef]);

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Box backgroundSize={"cover"} backgroundRepeat={"no-repeat"} backgroundImage={`url(${backgroundImg})`}  height={["629px", "629px", "800px"]}>
        <Text
          color={"white"}
          fontFamily={"Bossa"}
          paddingTop={["51px", "51px", "69px"]}
          textAlign={"center"}
          fontSize={["16px", "16px", "32px"]}
          fontWeight={700}
          lineHeight={"normal"}
        >
          Our Services
        </Text>

        {/* SLIDER  */}

        <Box paddingLeft={"100px"} onLoad={handleSlideChange} marginBottom={"125px"}>
          <Swiper
             
            onSlideChangeTransitionEnd={handleSlideChange}
            breakpoints={{
              1024: {
                slidesOffsetBefore: 0,
                slidesPerView: 2.75,
                spaceBetween: 44,
              },
              390: {
                slidesPerView: 1.5,
                slidesOffsetBefore: 15,
                // spaceBetween:22,
              },
            }}
            ref={swiperRef}
            // navigation={true}
            modules={[Navigation]}
            className={style.swiper}
          >
            {data?.map((el) => (
              <SwiperSlide className={style.swiper_slide}>
                <Box
                  backgroundColor={"white"}
                  border={"1px"}
                  borderRadius={"20px"}
                  padding={"10px"}
                >
                  <Image
                  w={"100%"}
                  h={"100%"}
                    //   w={["238px", "238px", "451px"]}
                    src={`${process.env.REACT_APP_BACKEND_URL}${el.attributes.thumbnail.data.attributes.url}`}
                  />
                  <Text
                    mt={"10px"}
                    color={"black"}
                    fontFamily={"Bossa"}
                    fontSize={["24px", "24px", "48px"]}
                    fontWeight={700}
                    lineHeight={"normal"}
                  >
                    {el.attributes.heading}
                  </Text>
                  <Text
                  noOfLines={2}
                    mt={"5px"}
                    color={"#747272"}
                    fontFamily={"Bossa"}
                    fontSize={["7px", "7px", "14px"]}
                    fontWeight={400}
                    lineHeight={"normal"}
                  >
                    {el.attributes.info}
                  </Text>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </>
  );
};

export default OurServices;
