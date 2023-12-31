import { Box, Flex, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import caretLeftIcon from "../../assets/icons/caretLeftIcon.svg";
// import { TweenLite, Sine, TimelineMax } from "gsap";
import { TweenLite, TimelineMax, Linear, Back, Sine } from "gsap";

const LatestInitiative = () => {
  const [data, setData] = useState([]);

  //showImg
  const [firstImg, setFirstImg] = useState("");
  const [secondImg, setSecondImg] = useState("");
  const [thirdImg, setThirdImg] = useState("");

  // InnerImg
  const firstImgRef = useRef("");
  const secondImgRef = useRef("");
  const thirdImgRef = useRef("");

  //showTitle
  const [firstTitle, setFirstTitle] = useState("");
  const [secondTitle, setSecondTitle] = useState("");
  const [thirdTitle, setThirdTitle] = useState("");

  //showInfo
  const [firstInfo, setFirstInfo] = useState("");
  const [secondInfo, setSecondInfo] = useState("");
  const [thirdInfo, setThirdInfo] = useState("");

  const getData = async () => {
    // console.log(`${process.env.REACT_APP_BACKEND_URL}/api/teams?populate=*`);
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/latest-initiatives?populate=*`
    );
    // console.log("Latest Initiative:", res.data.data);
    setData(res.data.data);

    // initial Image
    setFirstImg(res.data.data[0].attributes.image.data.attributes.url);
    setSecondImg(res.data.data[1].attributes.image.data.attributes.url);
    setThirdImg(res.data.data[2].attributes.image.data.attributes.url);

    firstImgRef.current = res.data.data[0].attributes.image.data.attributes.url;

    // initial title
    setFirstTitle(res.data.data[0].attributes.name);
    setSecondTitle(res.data.data[1].attributes.name);
    setThirdTitle(res.data.data[2].attributes.name);

    // initial info
    setFirstInfo(res.data.data[0].attributes.info);
    setSecondInfo(res.data.data[1].attributes.info);
    setThirdInfo(res.data.data[2].attributes.info);
  };

  const scrollLeft = () => {
    const temp = data;
    temp.unshift(temp.pop());
    setData(temp);

    firstImgRef.current = firstImg;

    // initial Image
    setFirstImg(data[0].attributes.image.data.attributes.url);
    setSecondImg(data[1].attributes.image.data.attributes.url);
    setThirdImg(data[2].attributes.image.data.attributes.url);

    // initial title
    setFirstTitle(data[0].attributes.name);
    setSecondTitle(data[1].attributes.name);
    setThirdTitle(data[2].attributes.name);

    // initial info
    setFirstInfo(data[0].attributes.info);
    setSecondInfo(data[1].attributes.info);
    setThirdInfo(data[2].attributes.info);
  };

  const scrollRight = () => {
    const temp = data;
    temp.push(temp.shift());
    setData(temp);

    // initial Image
    firstImgRef.current = firstImg;
    setFirstImg(data[0].attributes.image.data.attributes.url);
    setSecondImg(data[1].attributes.image.data.attributes.url);
    setThirdImg(data[2].attributes.image.data.attributes.url);
    console.log(firstImgRef);
    animL2R();

    // initial title
    setFirstTitle(data[0].attributes.name);
    setSecondTitle(data[1].attributes.name);
    setThirdTitle(data[2].attributes.name);

    // initial info
    setFirstInfo(data[0].attributes.info);
    setSecondInfo(data[1].attributes.info);
    setThirdInfo(data[2].attributes.info);
  };

  useEffect(() => {
    getData();
  }, []);

  // Slides Transition

  const outerRef = useRef(null);
  const innerRef = useRef(null);
  const tlRef = useRef(null);
  const tl = new TimelineMax();

  const animL2R = () => {
    const outer = outerRef.current;
    const inner = innerRef.current;

    
TweenLite.set(outer, { xPercent: -100, autoAlpha: 1 });
// TweenLite.set(inner, { xPercent:  100, autoAlpha: 1 });


var tl = new TimelineMax();

tl.to(outer, 3, {xPercent: 0, force3D: true,ease:Sine.easeInOut }, 0)
  // .to(inner, 3, {xPercent: 0, force3D: true,ease:Sine.easeInOut }, 0)

    // TweenLite.set(outer, { xPercent: -100, autoAlpha: 1 });
    // var tl = new TimelineMax();

    // tl.to(outer, 3, { xPercent: 0, force3D: true, ease: Sine.easeInOut }, 0);

    // tl.to(outer, 3, { xPercent: "0%", force3D: true, ease: "sine.inOut" }, 0);
  };

  return (
    <>
      <Box display={["none", "none", "block"]} backgroundColor={"#174042"}>
        {/* heading  */}
        <Flex
          padding={["40px 15px 20px 15px", "95px 60px 20px 108px"]}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Text
            color={"white"}
            fontFamily={"Bossa"}
            fontSize={"48px"}
            fontWeight={700}
            fontStyle={"normal"}
          >
            Latest <span style={{ color: "#00D2AA" }}>Initiatives</span>
          </Text>
          <Flex alignItems={"center"} gap={5}>
            <Flex
              onClick={scrollLeft}
              _hover={{ backgroundColor: "#00D2AA" }}
              alignItems={"center"}
              justifyContent={"center"}
              border={"1px solid white"}
              borderStyle={"dashed"}
              borderRadius={"50%"}
              cursor={"pointer"}
            >
              <BsArrowLeft
                style={{
                  color: "white",
                  height: "52px",
                  width: "52px",
                  padding: "11px",
                  cursor: "pointer",
                }}
              />
            </Flex>
            <Flex
              onClick={scrollRight}
              _hover={{ backgroundColor: "#00D2AA" }}
              alignItems={"center"}
              justifyContent={"center"}
              border={"1px solid white"}
              borderStyle={"dashed"}
              borderRadius={"50%"}
              cursor={"pointer"}
            >
              <BsArrowRight
                style={{
                  color: "white",
                  height: "52px",
                  width: "52px",
                  padding: "11px",
                }}
              />
            </Flex>
          </Flex>
        </Flex>

        {/* slider  */}
        <Flex padding={"0px 30px 73px 108px"} w={"fit-content"} gap={"60px"}>
          {/* first container  */}
          <Box pos={"relative"} w={"406px"} mt={"136px"}>
            <Box
              style={{
                width: "100%",
                height: "auto",
                // visibility: "hidden",
                // opacity: 0,
              }}
              pos={"relative"}
              top={0}
              h={"336px"}
              w={"100%"}
              ref={innerRef}
            >
              <Image
                h={"336px"}
                w={"100%"}
                objectFit={"cover"}
                src={`${process.env.REACT_APP_BACKEND_URL}${firstImgRef.current}`}
              />
            </Box>
            <Box
              pos={"absolute"}
              top={0}
              bottom={0}
              h={"336px"}
              w={"100%"}
              maxW={"100%"}
              ref={outerRef}
              style={{
                // position: "absolute",
                top: 0,
                overflow: "hidden",
                width: "100%",
                height: "auto",
                // visibility: "hidden",
                opacity: 0,
              }}
            >
              <Image
                h={"336px"}
                // w={"100%"}
                objectFit={"cover"}
                src={`${process.env.REACT_APP_BACKEND_URL}${firstImg}`}
              />
            </Box>
            {/* {console.log(firstImgRef.current)} */}

            <Text
              mt={"0px"}
              color={"white"}
              fontFamily={"Bossa"}
              fontSize={["16px", "16px", "32px"]}
              fontWeight={700}
              lineHeight={"normal"}
              fontStyle={"normal"}
            >
              {firstTitle}
            </Text>
            <Text
              mt={"2.5px"}
              color={"white"}
              fontFamily={"Bossa"}
              fontSize={["8px", "8px", "16px"]}
              fontWeight={400}
              lineHeight={"normal"}
              fontStyle={"normal"}
            >
              {firstInfo}
            </Text>
            <Image
              position={"absolute"}
              top={2}
              right={2}
              backgroundColor={"white"}
              padding={"5px"}
              borderRadius={"50%"}
              src={caretLeftIcon}
            />
          </Box>

          {/* second container  */}
          <Box position={"relative"} mt={"56px"} w={"307px"}>
            <Image
              h={"352px"}
              w={"100%"}
              objectFit={"cover"}
              src={`${process.env.REACT_APP_BACKEND_URL}${secondImg}`}
            />
            <Text
              mt={"7px"}
              color={"white"}
              fontFamily={"Bossa"}
              fontSize={["16px", "16px", "32px"]}
              fontWeight={700}
              lineHeight={"normal"}
              fontStyle={"normal"}
            >
              {firstTitle}
            </Text>
            <Text
              mt={"2.5px"}
              color={"white"}
              fontFamily={"Bossa"}
              fontSize={["8px", "8px", "16px"]}
              fontWeight={400}
              lineHeight={"normal"}
              fontStyle={"normal"}
            >
              {firstInfo}
            </Text>
            <Image
              pos={"absolute"}
              top={2}
              right={2}
              backgroundColor={"white"}
              padding={"5px"}
              borderRadius={"50%"}
              src={caretLeftIcon}
            />
          </Box>

          {/* third container  */}
          <Box position={"relative"} mt={"247px"} w={"275px"}>
            <Image
              h={"273px"}
              w={"100%"}
              objectFit={"cover"}
              src={`${process.env.REACT_APP_BACKEND_URL}${thirdImg}`}
            />
            <Text
              mt={"7px"}
              color={"white"}
              fontFamily={"Bossa"}
              fontSize={["16px", "16px", "32px"]}
              fontWeight={700}
              lineHeight={"normal"}
              fontStyle={"normal"}
            >
              {firstTitle}
            </Text>
            <Text
              mt={"2.5px"}
              color={"white"}
              fontFamily={"Bossa"}
              fontSize={["8px", "8px", "16px"]}
              fontWeight={400}
              lineHeight={"normal"}
              fontStyle={"normal"}
            >
              {firstInfo}
            </Text>
            <Image
              pos={"absolute"}
              top={2}
              right={2}
              backgroundColor={"white"}
              padding={"5px"}
              borderRadius={"50%"}
              src={caretLeftIcon}
            />
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default LatestInitiative;
