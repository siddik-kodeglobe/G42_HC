import { Box, Flex, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

// link icon
import linkIcon from "../../assets/icons/linkIcon.svg";

// Import Swipper
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import style from "../AboutUs/OurPartner_Slider.module.css";

const CaseStudies = () => {
  const [data, setData] = useState([]);
  const swiperRef = React.useRef(null);

  const getData = async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/case-studies?populate=*`
    );
    console.log(res.data.data);
    setData(res.data.data);
  };

  const convertData = (inputDateString) => {
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
    const formattedDay = day < 10 ? `0${day}` : day;
    const month = months[inputDate.getUTCMonth()];
    const year = inputDate.getUTCFullYear();

    const customFormattedDate = `${month} ${formattedDay},${year}`;
    return customFormattedDate;
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
    const formattedDay = day < 10 ? `0${day}` : day;
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
      <Box
        padding={[
          "80px 20px 0px 20px",
          "80px 20px 0px 20px",
          "125px 60px 0px 60px",
        ]}
      >
        <Text
        fontFamily={"Bossa-ExtendedBold"}
          fontSize={["24px", "24px", "48px"]}
          fontWeight={700}
          lineHeight={"normal"}
        >
          Case Studies
        </Text>
        <Text
        fontFamily={"Bossa-Light"}
          w={["100%", "100%", "808px"]}
          fontSize={["7px", "7px", "14px"]}
          fontWeight={300}
          lineHeight={"normal"}
        >
          Harness data, develop artificial super intelligence and deliver
          innovative health solutions that leverage advanced technology and
          precision medicine to shape the future of healthcare
        </Text>

        <Swiper
          breakpoints={{
            1024: {
              slidesOffsetBefore: 0,
              slidesPerView: 2.75,
              spaceBetween: 44,
            },
            390: {
              slidesPerView: 1.5,
              slidesOffsetBefore: 0,
              // spaceBetween:22,
            },
          }}
          ref={swiperRef}
          // navigation={true}
          modules={[Navigation]}
          className={style.swiper}
        >
          {data?.map((el) => (
            <SwiperSlide className={style.swipe_slide}>
              <Box>
                <Box position={"relative"} w={["240px", "240px", "451px"]}>
                  <Image
                    w={"100%"}
                    src={`${process.env.REACT_APP_BACKEND_URL}${el.attributes.thumbnail.data.attributes.url}`}
                  />
                </Box>

                <Box
                  top={5}
                  left={5}
                  w={["12px", "12px", "32px"]}
                  position={"absolute"}
                >
                  <Image cursor={"pointer"} src={linkIcon} />
                </Box>

                <Box position={"absolute"} bottom={1} left={5}>
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
                    fontSize={["11px", "11px", "20px"]}
                    fontWeight={500}
                    lineHeight={"normal"}
                    height={"96px"}
                  >
                    {el.attributes.title}
                  </Text>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  );
};

export default CaseStudies;
