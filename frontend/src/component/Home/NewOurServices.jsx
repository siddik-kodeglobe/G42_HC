import { Box, Flex, Text, Image, Button, Link } from "@chakra-ui/react";
import axios from "axios";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './NewOurServices.css'
// "swiper": "^10.0.4",
import { useNavigate } from "react-router-dom";

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

/**
 * Threshold from which mouse movement with pressed mouse button
 * is considered a drag instead of a click.
 */

const NewOurServices = () => {
  //   const [data, setData] = useState([]);
  const [hoverArrowColor, setHoverArrowColor] = useState("white");
  const [hoverArrowColorR, setHoverArrowColorR] = useState("white");
  // const swiper = useSwiper();
  //   const swiperRef = React.useRef(null);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
      animR2L();
    }
    // console.log(swiperRef.current.swiper);
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
      animL2R();
    }
  };

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
  const [firstInfo, setFirstInfo] = useState("");
  const [secondInfo, setSecondInfo] = useState("");
  const [thirdInfo, setThirdInfo] = useState("");

  //save Data useState
  const [data, setData] = useState([]);
  // const swiper = useSwiper();
  const swiperRef = React.useRef(null);

  //   const getData = async () => {
  //     const res = await axios.get(
  //       `${process.env.REACT_APP_BACKEND_URL}/api/services?populate=*`
  //     );
  //     // console.log(res.data.data);
  //     setData(res.data.data);

  //     // initial Image
  //     setFirstImg(res.data.data[0].attributes.thumbnail.data.attributes.url);
  //     setSecondImg(res.data.data[1].attributes.thumbnail.data.attributes.url);
  //     setThirdImg(res.data.data[2].attributes.thumbnail.data.attributes.url);

  //     //outerImg
  //     firstImgRef.current =
  //       res.data.data[0].attributes.thumbnail.data.attributes.url;
  //     secondImgRef.current =
  //       res.data.data[1].attributes.thumbnail.data.attributes.url;
  //     thirdImgRef.current =
  //       res.data.data[2].attributes.thumbnail.data.attributes.url;

  //     // initial title
  //     setFirstTitle(res.data.data[0].attributes.heading);
  //     setsecondTitle(res.data.data[1].attributes.heading);

  //     // initial info
  //     setInfo(res.data.data[0].attributes.info);
  //   };

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
    setFirstInfo(data[0].attributes.info);
    setSecondInfo(data[1].attributes.info);
    setThirdInfo(data[2].attributes.info);
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
    setFirstInfo(data[0].attributes.info);
    setSecondInfo(data[1].attributes.info);
    setThirdInfo(data[2].attributes.info);
  };

  const reduceVal = (index, arr) => {
    const length = arr.length;
    index = ((index % length) + length) % length; // Ensure a positive index within array bounds

    const removed = arr.splice(0, index);
    Array.prototype.push.apply(arr, removed);

    return arr;
  };

  const getData = async () => {
    // console.log(`${process.env.REACT_APP_BACKEND_URL}/api/teams?populate=*`);
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/services?populate=*`
    );
    // console.log("SERVICES", res.data.data);
    let arr = res.data.data;
    arr = [
      ...arr,
      ...res.data.data,
      ...res.data.data,
      ...res.data.data,
      ...res.data.data,
      ...res.data.data,
      ...res.data.data,
      ...res.data.data,
      ...res.data.data,
      ...res.data.data,
      ...res.data.data,
      ...res.data.data,
      ...res.data.data,
      ...res.data.data,
      ...res.data.data,
      ...res.data.data,
      ...res.data.data,
    ];
    // console.log("ARR", arr);
    setData(arr);
    // setData(res.data.data);

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
      res.data.data[2].attributes.thumbnail.data.attributes.url;

    // initial title
    setFirstTitle(res.data.data[0].attributes.heading);
    setsecondTitle(res.data.data[1].attributes.heading);

    // initial info
    setFirstInfo(res.data.data[0].attributes.info);
    setSecondInfo(res.data.data[1].attributes.info);
    setThirdInfo(res.data.data[2].attributes.info);
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

  // useEffect(() => {
  //   console.log("active slide",swiperRef.current.activeIndex)

  // }, [swiperRef.current.activeIndex])
  // const activeSlideIndex = swiperRef.current.swiper.realIndex;
  // const [previousIndexTemp, setPreviousIndexTemp] = useState(activeSlideIndex === 0 ? data.length - 1 : activeSlideIndex - 1)
 
  // const handleSlideChange = () => {
  //   const activeSlideIndex = swiperRef.current.swiper.realIndex;
  //   const activeSlideDiv = document.querySelector(
  //     `.swiper-slide[data-swiper-slide-index="${activeSlideIndex}"]`
  //   );

  //   const previousSlideIndex =
  //     activeSlideIndex === 0 ? data.length - 1 : activeSlideIndex - 1;
  //   const nextSlideIndex =
  //     activeSlideIndex === data.length - 1 ? 0 : activeSlideIndex + 1;

  //   const prevactiveSlideDiv = document.querySelector(
  //     `.swiper-slide[data-swiper-slide-index="${previousSlideIndex}"]`
  //   );
  //   const nextactiveSlideDiv = document.querySelector(
  //     `.swiper-slide[data-swiper-slide-index="${nextSlideIndex}"]`
  //   );

  //   if (activeSlideDiv) {
  //     // Do something with the active slide div
  //     // console.log(activeSlideDiv.textContent);
  //     console.log(prevactiveSlideDiv.textContent);
  //     console.log(activeSlideDiv.textContent);
  //     console.log(nextactiveSlideDiv.textContent);

  //     console.log(previousSlideIndex, activeSlideIndex, nextSlideIndex);

  //     // change outer image
  //     firstImgRef.current = firstImg;
  //     secondImgRef.current = secondImg;
  //     thirdImgRef.current = thirdImg;

  //     // initial Image
  //     setFirstImg(
  //       data[previousSlideIndex].attributes.thumbnail.data.attributes.url
  //     );
  //     setSecondImg(
  //       data[activeSlideIndex].attributes.thumbnail.data.attributes.url
  //     );
  //     setThirdImg(
  //       data[nextSlideIndex].attributes.thumbnail.data.attributes.url
  //     );

  //     if (swiperRef.current.swiper.touches.diff < 0) {
  //       animR2L();
  //     } else {
  //       animL2R();
  //     }

  //     setSecondInfo(data[activeSlideIndex].attributes.info);
  //   }
  // };

  const handleSlideChange = (current, next) => {
    // setDragging(true)
    // handleBeforeChange()
    console.log(next);
    // console.log(current, next);
    const activeSlideIndex = next;
    // const activeSlideDiv = document.querySelector(
    //   `.swiper-slide[data-swiper-slide-index="${activeSlideIndex}"]`
    // );

    const previousSlideIndex =
      activeSlideIndex === 0 ? data.length - 1 : activeSlideIndex - 1;
    const nextSlideIndex =
      activeSlideIndex === data.length - 1 ? 0 : activeSlideIndex + 1;

    // const prevactiveSlideDiv = document.querySelector(
    //   `.swiper-slide[data-swiper-slide-index="${previousSlideIndex}"]`
    // );
    // const nextactiveSlideDiv = document.querySelector(
    //   `.swiper-slide[data-swiper-slide-index="${nextSlideIndex}"]`
    // );

    if (activeSlideIndex) {
      // Do something with the active slide div
      // console.log(activeSlideDiv.textContent);
      // console.log(prevactiveSlideDiv.textContent);
      // console.log(activeSlideDiv.textContent);
      // console.log(nextactiveSlideDiv.textContent);

      // console.log(previousSlideIndex, activeSlideIndex, nextSlideIndex);

      // change outer image
      firstImgRef.current = firstImg;
      secondImgRef.current = secondImg;
      thirdImgRef.current = thirdImg;

      // initial Image
      setFirstImg(
        data[previousSlideIndex].attributes.thumbnail.data.attributes.url
      );
      setSecondImg(
        data[activeSlideIndex].attributes.thumbnail.data.attributes.url
      );
      setThirdImg(
        data[nextSlideIndex].attributes.thumbnail.data.attributes.url
      );

      if (current < next ) {
        animR2L();
      } else {
        animL2R();
      }

      setSecondInfo(data[activeSlideIndex].attributes.info);
    }
  };
  
 
  const sliderSettings = {
    // className: "center",
    accessibility: true,
    adaptiveHeight: true,
    arrows: false,
    infinite: true,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    initialSlide: 1,
    // autoSlidesToShow: true,
    variableWidth: true,
    speed: 750,
    fade: false,
    touchThreshold:100,
    beforeChange: (current, next) => handleSlideChange(current, next),
    // afterChange: () => handleAfterChange()
  };

  const [clientXonMouseDown, setclientXonMouseDown] = useState(null);
  const [clientYonMouseDown, setclientYonMouseDown] = useState(null);

  const handleOnMouseDown =  (e) =>  {
    
      setclientXonMouseDown(e.clientX)
      setclientYonMouseDown(e.clientY)
    e.preventDefault() // stops weird link dragging effect
  }

  const handleOnClick = (e) => {
    e.stopPropagation()
    if (clientXonMouseDown !== e.clientX || 
        clientYonMouseDown !== e.clientY) {
      // prevent link click if the element was dragged
      e.preventDefault()
    }
  }

  return (
    <>
      <Box
        position={"relative"}
        mt={"125px"}
        backgroundColor={"#F8F8F8"}
        overflow={"hidden"}
        w={"100vw"}
        maxW={"100%"}
        h={["650px", "800px", "800px", "800px", "800px", "800px"]}
      >
        {/* OUR SERVICES TITLE  */}

        <Text
          mt={"54px"}
          fontSize={"32px"}
          fontFamily={"Bossa-Regular"}
          textAlign={"center"}
        >
          Our Services
        </Text>
        {/* slider container  */}
        <Box
          position={"relative"}
          w={"100%"}
          h={["100%"]}
          margin={"auto"}
          mt={["57px"]}
        >
          {/* <Swiper
            slidesPerView={"auto"}
            // loop={true}
            initialSlide={1}
            // centeredSlides={true}
            // ref={swiperRef}
            // onSlideChange={() => handleSlideChange()}
            // spaceBetween={0}

            ref={swiperRef}
            centeredSlides={true}
            centeredSlidesBounds={true}
            // loopedSlides={50}
            loopAddBlankSlides={100}
            onSlideChange={handleSlideChange}


            // centeredSlidesBounds={true}
            // lazyLoading={true}
            // loop and centered slide issue 
            // observer={true}
            // observeParents={true}
            // loopedSlides={50} 
            // speed={750}
           
            // modules={[Navigation, FreeMode]}
            // watchOverflow={true}
            // className={style.swiper}
            
            // onSwiper={(swiper) => swiper.update()}
            
          >
            {data?.map((el) => (
              <SwiperSlide 
              className={style.swiper_slide}
              >
                <Link
                
                  _hover={{ textDecor: "none" }}
                  href={`/services/${el.attributes.heading}`}
                >
                  <Box
                    margin={"auto"}
                      border={"1px"}
                    zIndex={2}
                    w={["100vw", "100vw", "100vw", "45vw", "45vw", "45vw"]}
                    // w={["100vw", "100vw", "100vw", "30vw", "30vw", "30vw"]}
                    maxW={"100%"}
                    h={["600px"]}
                    position={"relative"}
                  >
                    <Text
                      fontSize={[
                        "32px",
                        "32px",
                        "32px",
                        "31px",
                        "40px",
                        "48px",
                      ]}
                      fontFamily={"Bossa-ExtendedBold"}
                      textAlign={"center"}
                    >
                      {el.attributes.heading}
                    </Text>
                  </Box>
                </Link>
              </SwiperSlide>

            
            ))}
          </Swiper> */}

          <Slider style={{zIndex:3}} {...sliderSettings}>
            {data?.map((el) => (
              <Link             
                _hover={{ textDecor: "none" }}
                href={`/services/${el.attributes.heading}`}
                // zIndex={-10}
                onMouseDown={(e) => handleOnMouseDown(e)}
                onClick={(e) => handleOnClick(e)}
              >
                <Box
                  margin={"auto"}
                  // border={"1px"}
                  // zIndex={2}
                  w={["100vw", "100vw", "100vw", "50vw", "50vw", "50vw"]}
                  // w={["100vw", "100vw", "100vw", "30vw", "30vw", "30vw"]}
                  maxW={"100%"}
                  h={["600px"]}
                  position={"relative"}
                >
                  <Text
                    fontSize={["32px", "32px", "32px", "31px", "40px", "48px"]}
                    fontFamily={"Bossa-ExtendedBold"}
                    textAlign={"center"}
                  >
                    {el.attributes.heading}
                  </Text>
                </Box>
              </Link>
            ))}
          </Slider>

          {/* fixed images and title container */}
          <Flex
            // border={"1px solid red"}
            // zIndex={0}
            flexWrap={"nowrap"}
            position={"absolute"}
            left={0}
            right={0}
            top={["29px", "40px", "50px", "125px", "125px", "125px"]}
            bottom={0}
            w={"100%"}
            gap={["0px", "10%", "5%", "10%", "12%", "16%"]}
            padding={["0px 0px 46px 0px"]}
          >
            {/* 1st Image  */}
            <Box
              display={["none", "none", "none", "block", "block", "block"]}
              marginTop={"-51px"}
              marginLeft={["0px", "0px", "0px", "-11.5%", "-11.5%", "-11.5%"]}
              overflow={"hidden"}
              backgroundColor={"#F8F8F8"}
              pos={"relative"}
              borderRadius={"20px"}
              w={"28.7%"}
              // h={"426px"}
            >
              <Box id="wrapper">
                <Image
                  src={`${process.env.REACT_APP_BACKEND_URL}${firstImgRef.current}`}
                  alt=""
                  borderRadius={["14px"]}
                  width={["100%"]}
                  height={[
                    "235px",
                    "235px",
                    "235px",
                    "216px",
                    "278px",
                    "331px",
                  ]}
                  objectFit={"cover"}
                />
              </Box>

              <Box
                id="outer"
                ref={outerRef}
                pos={"absolute"}
                overflow={"hidden"}
                width={["100%"]}
                objectFit={"cover"}
                // height={["245px"]}
                visibility={"hidden"}
                opacity={0}
                top={"0px"}
              >
                <Box
                  id="inner"
                  ref={innerRef}
                  width={["100%"]}
                  objectFit={"cover"}
                  // height={["245px"]}
                  visibility={"hidden"}
                  opacity={0}
                  // top={10}
                  borderRadius={["14px"]}
                >
                  <Image
                    src={`${process.env.REACT_APP_BACKEND_URL}${firstImg}`}
                    id="top"
                    w={["100%"]}
                    objectFit={"cover"}
                    height={[
                      "235px",
                      "235px",
                      "235px",
                      "216px",
                      "278px",
                      "331px",
                    ]}
                    borderRadius={"14px"}
                  />
                </Box>
              </Box>
            </Box>

            {/* 2nd Container  */}
            <Box
              // top={["29px", "125px"]}
              pos={"relative"}
              mt={"25.65px"}
              padding={[
                "0px 20px 0px 20px",
                "0px 20px 0px 20px",
                "0px 20px 0px 20px",
                "0px",
                "0px",
                "0px",
              ]}
              w={["100%", "100%", "100%", "34.49%", "34.49%", "34.49%"]}
              borderRadius={"20px"}
              // h={"316px"}
            >
              <Box id="wrapper2">
                <Image
                  src={`${process.env.REACT_APP_BACKEND_URL}${secondImgRef.current}`}
                  alt=""
                  borderRadius={["14px"]}
                  w={["100%"]}
                  height={["235px", "350px"]}
                  objectFit={"cover"}
                />
              </Box>

              <Box
                id="outer2"
                ref={outerRef2}
                pos={"absolute"}
                top={"0px"}
                left={0}
                right={0}
                overflow={"hidden"}
                w={["100%"]}
                // padding={["20px", "20px", "20px", "0px", "0px", "0px"]}

                // h={["206px"]}
                objectFit={"cover"}
                visibility={"hidden"}
                opacity={0}
              >
                <Box
                  id="inner2"
                  ref={innerRef2}
                  w={["100%"]}
                  padding={[
                    "0px 20px 0px 20px",
                    "0px 20px 0px 20px",
                    "0px 20px 0px 20px",
                    "0px",
                    "0px",
                    "0px",
                  ]}
                  // h={["206px"]}
                  objectFit={"cover"}
                  visibility={"hidden"}
                  opacity={0}
                  borderRadius={["14px"]}
                >
                  <Image
                    src={`${process.env.REACT_APP_BACKEND_URL}${secondImg}`}
                    id="top2"
                    borderRadius={["14px"]}
                    w={["100%"]}
                    h={["235px", "350px"]}
                    objectFit={"cover"}
                  />
                </Box>
              </Box>
              <Text
                mt={"15px"}
                fontFamily={"Bossa-Regular"}
                fontSize={["7px", "7px", "14px"]}
                fontWeight={400}
                color={"#747272"}
                lineHeight={"normal"}
                fontStyle={"normal"}
              >
                {/* {alert(info.length)} */}
                {secondInfo.length > 100
                  ? secondInfo.slice(0, 100).concat("...")
                  : secondInfo}
              </Text>
            </Box>

            {/* 3rd Container  */}
            <Box
              display={["none", "none", "none", "block", "block", "block"]}
              mt={"121px"}
              marginRight={"-11.5%"}
              // overflow={"hidden"}
              pos={"relative"}
              // padding={"10px"}
              borderRadius={"20px 0px 0px 20px"}
              w={"28.7%"}
              // h={"189px"}
            >
              <Box id="wrapper3">
                <Image
                  src={`${process.env.REACT_APP_BACKEND_URL}${thirdImgRef.current}`}
                  alt=""
                  w={["100%"]}
                  height={["308px"]}
                  objectFit={"cover"}
                  borderRadius={["14px"]}
                />
              </Box>

              <Box
                id="outer3"
                ref={outerRef3}
                pos={"absolute"}
                top={"0px"}
                w={["100%"]}
                // height={["171px"]}
                visibility={"hidden"}
                opacity={0}
                overflow={"hidden"}
                borderRadius={["14px"]}
              >
                <Box
                  id="inner3"
                  ref={innerRef3}
                  w={["100%"]}
                  // height={["171px"]}
                  visibility={"hidden"}
                  opacity={0}
                  borderRadius={["14px"]}
                >
                  <Image
                    src={`${process.env.REACT_APP_BACKEND_URL}${thirdImg}`}
                    id="top3"
                    w={["100%"]}
                    h={["308px"]}
                    objectFit={"cover"}
                    borderRadius={["14px"]}
                  />
                </Box>
              </Box>
            </Box>
          </Flex>
        </Box>
        {/* Mobile Nav BTN  */}
        <Flex
          w={"100vw"}
          maxW={"100%"}
          gap={"6px"}
          position={"absolute"}
          bottom={"15px"}
          left={0}
          right={0}
          justifyContent={"center"}
          zIndex={2}
          alignItems={"center"}
          display={["flex", "flex", "flex", "none", "none", "none"]}
        >
          <Box
            onClick={() => goPrev()}
            borderRadius={"50%"}
            border={"1px dashed black"}
          >
            <ArrowBackIcon color={"black"} w={12} h={12} padding={"10px"} />
          </Box>
          <Box
            onClick={() => goNext()}
            borderRadius={"50%"}
            border={"1px dashed black"}
          >
            <ArrowForwardIcon color={"black"} w={12} h={12} padding={"10px"} />
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default NewOurServices;
