import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";

// Import GSAP
import { TweenLite, TimelineMax, Linear, Back, Sine } from "gsap";

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

import leftArrow from "../../assets/icons/leftArrowIconNavService.svg";
import rightArrow from "../../assets/icons/rightArrowIconNavService.svg";

// CSS import
import "./OurServices.module.css";

const OurServices = () => {
  //active Slide
  const [activeSlide, setActiveSlide] = useState(0);

  //showImg
  const [firstImg, setFirstImg] = useState("");
  const [secondImg, setSecondImg] = useState("");
  const [thirdImg, setThirdImg] = useState("");

  // OuterImg
  const firstImgRef = useRef("");
  const secondImgRef = useRef("");
  const thirdImgRef = useRef("");

  //showTitle
  const [firstTitle, setFirstTitle] = useState("");
  const [secondTitle, setsecondTitle] = useState("");

  //showInfo
  const [info, setInfo] = useState("");

  //save Data useState
  const [data, setData] = useState([]);
  // const swiper = useSwiper();
  const swiperRef = React.useRef(null);

  const getData = async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/services?populate=*`
    );
    // console.log(res.data.data);
    setData(res.data.data);

    // initial Image
    setFirstImg(res.data.data[0].attributes.thumbnail.data.attributes.url);
    setSecondImg(res.data.data[1].attributes.thumbnail.data.attributes.url);
    setThirdImg(res.data.data[2].attributes.thumbnail.data.attributes.url);

    //outerImg
    firstImgRef.current =
      res.data.data[0].attributes.thumbnail.data.attributes.url;
    secondImgRef.current =
      res.data.data[1].attributes.thumbnail.data.attributes.url;
    thirdImgRef.current =
      res.data.data[1].attributes.thumbnail.data.attributes.url;

    // initial title
    setFirstTitle(res.data.data[0].attributes.heading);
    setsecondTitle(res.data.data[1].attributes.heading);

    // initial info
    setInfo(res.data.data[0].attributes.info);
  };

  const scrollLeft = () => {
    const temp = data;
    temp.unshift(temp.pop());
    setData(temp);
    // const temp = reduceVal(1, data);
    // setData(temp);

    // change outer image
    firstImgRef.current = firstImg;
    secondImgRef.current = secondImg;
    thirdImgRef.current = thirdImg;

    // initial Image
    setFirstImg(data[0].attributes.thumbnail.data.attributes.url);
    setSecondImg(data[1].attributes.thumbnail.data.attributes.url);
    setThirdImg(data[2].attributes.thumbnail.data.attributes.url);
    animL2R();

    // initial title
    setFirstTitle(data[0].attributes.heading);
    setsecondTitle(data[1].attributes.heading);

    // initial info
    setInfo(data[0].attributes.info);
  };

  const scrollRight = () => {
    const temp = data;
    temp.push(temp.shift());
    setData(temp);

    // Change Outer Image
    firstImgRef.current = firstImg;
    secondImgRef.current = secondImg;
    thirdImgRef.current = thirdImg;

    // initial Image
    setFirstImg(data[0].attributes.thumbnail.data.attributes.url);
    setSecondImg(data[1].attributes.thumbnail.data.attributes.url);
    setThirdImg(data[2].attributes.thumbnail.data.attributes.url);
    animR2L();

    // initial title
    setFirstTitle(data[0].attributes.heading);
    setsecondTitle(data[1].attributes.heading);

    // initial info
    setInfo(data[0].attributes.info);
  };

  const reduceVal = (index, arr) => {
    const length = arr.length;
    index = ((index % length) + length) % length; // Ensure a positive index within array bounds

    const removed = arr.splice(0, index);
    Array.prototype.push.apply(arr, removed);

    return arr;
  };

  useEffect(() => {
    getData();
  }, []);

  // Slides Transition

  const outerRef = useRef(null);
  const innerRef = useRef(null);

  // Second Outer Box Ref
  const outerRef2 = useRef(null);
  const innerRef2 = useRef(null);

  // Third Outer Box Ref
  const outerRef3 = useRef(null);
  const innerRef3 = useRef(null);

  const animR2L = () => {
    const outer = outerRef.current;
    const inner = innerRef.current;

    //first Box Animation
    TweenLite.set(outer, { xPercent: 100, autoAlpha: 1 });
    TweenLite.set(inner, { xPercent: -100, autoAlpha: 1 });

    var tl = new TimelineMax();

    tl.to(
      outer,
      1.5,
      { xPercent: 0, force3D: true, ease: Sine.easeInOut },
      0
    ).to(inner, 1.5, { xPercent: 0, force3D: true, ease: Sine.easeInOut }, 0);

    // 2nd Box Animation
    TweenLite.set(outerRef2.current, { xPercent: 100, autoAlpha: 1 });
    TweenLite.set(innerRef2.current, { xPercent: -100, autoAlpha: 1 });

    var tl = new TimelineMax();

    tl.to(
      outerRef2.current,
      1.5,
      { xPercent: 0, force3D: true, ease: Sine.easeInOut },
      0
    ).to(
      innerRef2.current,
      1.5,
      { xPercent: 0, force3D: true, ease: Sine.easeInOut },
      0
    );

    // 3rd Box Animation

    // if(outerRe)
    TweenLite.set(outerRef3.current, { xPercent: 100, autoAlpha: 1 });
    TweenLite.set(innerRef3.current, { xPercent: -100, autoAlpha: 1 });

    var tl = new TimelineMax();

    tl.to(
      outerRef3.current,
      1.5,
      { xPercent: 0, force3D: true, ease: Sine.easeInOut },
      0
    ).to(
      innerRef3.current,
      1.5,
      { xPercent: 0, force3D: true, ease: Sine.easeInOut },
      0
    );
  };

  const animL2R = () => {
    const outer = outerRef.current;
    const inner = innerRef.current;

    //first Box Animation
    TweenLite.set(outer, { xPercent: -100, autoAlpha: 1 });
    TweenLite.set(inner, { xPercent: 100, autoAlpha: 1 });

    var tl = new TimelineMax();

    tl.to(
      outer,
      1.5,
      { xPercent: 0, force3D: true, ease: Sine.easeInOut },
      0
    ).to(inner, 1.5, { xPercent: 0, force3D: true, ease: Sine.easeInOut }, 0);

    // 2nd Box Animation
    TweenLite.set(outerRef2.current, { xPercent: -100, autoAlpha: 1 });
    TweenLite.set(innerRef2.current, { xPercent: 100, autoAlpha: 1 });

    var tl = new TimelineMax();

    tl.to(
      outerRef2.current,
      1.5,
      { xPercent: 0, force3D: true, ease: Sine.easeInOut },
      0
    ).to(
      innerRef2.current,
      1.5,
      { xPercent: 0, force3D: true, ease: Sine.easeInOut },
      0
    );

    // 3rd Box Animation

    // if(outerRe)
    TweenLite.set(outerRef3.current, { xPercent: -100, autoAlpha: 1 });
    TweenLite.set(innerRef3.current, { xPercent: 100, autoAlpha: 1 });

    var tl = new TimelineMax();

    tl.to(
      outerRef3.current,
      1.5,
      { xPercent: 0, force3D: true, ease: Sine.easeInOut },
      0
    ).to(
      innerRef3.current,
      1.5,
      { xPercent: 0, force3D: true, ease: Sine.easeInOut },
      0
    );
  };

  return (
    <>
      <Box
      overflow={"hidden"}
        display={["none", "none", "block"]}
        position={"relative"}
        bgImage={`url(${process.env.REACT_APP_BACKEND_URL}${firstImg})`}
        height={["629px", "629px", "800px"]}
        backgroundSize={"cover"}
        backgroundRepeat={"no-repeat"}
        borderRadius={"0px"}
      >
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

        {/* NAV BTN  */}
        <Image
          position={"absolute"}
          top={"50%"}
          left={5}
          cursor={"pointer"}
          src={leftArrow}
          onClick={scrollLeft}
        />
        <Image
          position={"absolute"}
          top={"50%"}
          right={5}
          cursor={"pointer"}
          src={rightArrow}
          onClick={scrollRight}
        />

        {/* SLIDER  */}
        <Flex gap={"20px"} padding={["54px 0px 206px 178px"]}>
          {/* 1st Container  */}
          <Box
          pos={"relative"}
            borderRadius={"20px"}
            backgroundColor={"white"}
            w={"50%"}
            h={"426px"}
            padding={"10px"}
          >
            <Box id="wrapper">
              <Image
              
                src={`${process.env.REACT_APP_BACKEND_URL}${firstImgRef.current}`}
                alt=""
              />
            </Box>

            <Box id="outer" ref={outerRef}>
              <Box id="inner" ref={innerRef}>
                <Image
                  src={`${process.env.REACT_APP_BACKEND_URL}${firstImg}`}
                  id="top"
                />
              </Box>
            </Box>
            {/* <Image
              w={"100%"}
              h={"245px"}
              maxW={"100%"}
              objectFit={"cover"}
              borderRadius={"14px"}
              src={`${process.env.REACT_APP_BACKEND_URL}${firstImg}`}
            /> */}
            <Text
              fontFamily={"Bossa"}
              fontSize={["24px", "24px", "48px"]}
              fontWeight={700}
              lineHeight={"normal"}
              fontStyle={"normal"}
            >
              {firstTitle}
            </Text>
            <Text
              fontFamily={"Bossa"}
              fontSize={["7px", "7px", "14px"]}
              fontWeight={400}
              color={"#747272"}
              lineHeight={"normal"}
              fontStyle={"normal"}
            >
              {/* {alert(info.length)} */}
              {firstTitle.length > 8 && info.length > 100
                ? info.slice(0, 100).concat("...")
                : info}
            </Text>
          </Box>

          {/* 2nd Container  */}
          <Box
            padding={"10px"}
            borderRadius={"20px"}
            backgroundColor={"white"}
            w={"35%"}
            h={"316px"}
          >
            <Image
              objectFit={"cover"}
              w={"100%"}
              h={"206px"}
              borderRadius={"24px"}
              src={`${process.env.REACT_APP_BACKEND_URL}${secondImg}`}
            />
            <Text
              paddingBottom={"25px"}
              fontFamily={"Bossa"}
              fontSize={["16px", "16px", "32px"]}
              fontWeight={700}
              lineHeight={"normal"}
              fontStyle={"normal"}
            >
              {secondTitle}
            </Text>
          </Box>

          {/* 3rd Container  */}
          <Box
            borderRadius={"20px 0px 0px 20px"}
            backgroundColor={"white"}
            w={"15%"}
            h={"189px"}
          >
            <Image
              padding={"10px 0px 10px 10px"}
              width={"100%"}
              height={"100%"}
              objectFit={"cover"}
              borderRadius={"18px"}
              src={`${process.env.REACT_APP_BACKEND_URL}${thirdImg}`}
            />
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default OurServices;
