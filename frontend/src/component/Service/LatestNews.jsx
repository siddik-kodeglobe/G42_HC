import { Box, Image, Text } from "@chakra-ui/react";
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

const LatestNews = () => {
  const [data, setData] = useState([]);
  // const swiper = useSwiper();
  const swiperRef = React.useRef(null);


  const getData = async () => {
    // console.log(`${process.env.REACT_APP_BACKEND_URL}/api/teams?populate=*`);
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/news-plural?populate=*`
    );
    setData(res.data.data);
  };

  const convertDate = (inputDateString) => {
    const inputDate = new Date(inputDateString);

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const day = inputDate.getUTCDate();
    const formattedDay = (day < 10) ? `0${day}` : day;
    const month = months[inputDate.getUTCMonth()];
    const year = inputDate.getUTCFullYear();

    const customFormattedDate = `${month} ${formattedDay},${year}`;
    return customFormattedDate;
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Text
      fontFamily={"Bossa-ExtendedBold"}
      fontSize={["24px", "24px", "48px"]}
      fontWeight={700}
      lineHeight={"normal"}
      fontStyle={"normal"}
      margin={["40px 20px", "40px 20px", "72px 60px"]}>Latest News</Text>
      <Box marginBottom={"125px"}>
        <Swiper
          breakpoints={{
            1024: {
              slidesOffsetBefore: 0,
              // slidesOffsetBefore: 150,
              slidesPerView: 2.75,
              spaceBetween:44,
            },
            390: {
              slidesPerView: 1.5,
              slidesOffsetBefore: 0,
              // slidesOffsetBefore: 15,
              // spaceBetween:22,
            },
          }}
          ref={swiperRef}
          // navigation={true}
          modules={[Navigation]}
          className={style.swiper}
        >
          {data?.filter((el) => el.attributes.category == "Omics")?.map((el) => (
            <SwiperSlide className={style.swipe_slide}>
              <Box position={"relative"}>
                <Image
                  w={["238px", "238px", "451px"]}
                  src={`${process.env.REACT_APP_BACKEND_URL}${el.attributes.thumbnail.data.attributes.url}`}
                />
              </Box>
              <Box
                w={["238px", "238px", "451px"]}
                paddingRight={[8, 8, 9]}
                position={"absolute"}
                bottom={1.5}
                left={5}
              >
                <Text
                fontFamily={"Bossa-Regular"}
                  noOfLines={2}
                  color={"white"}
                  fontSize={["7px", "7px", "14px"]}
                  fontWeight={400}
                  lineHeight={"normal"}
                >
                  {convertDate(el.attributes.createdAt)}
                </Text>
                <Text
                fontFamily={"Bossa-Medium"}
                  noOfLines={2}
                  color={"white"}
                  fontSize={["10px", "10px", "20px"]}
                  fontWeight={500}
                  lineHeight={"normal"}
                >
                  {el.attributes.info}
                </Text>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  );
};

export default LatestNews;
