import { Box, Button, Flex, Image, Link, Text } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import aboutImage from "../../assets/temp/about_HomePage.svg";
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { GSDevTools } from 'gsap/GSDevTools';
import Marquee from "react-fast-marquee";
import ReactPlayer from "react-player";
import homeVideo from "../../assets/logo/homeVideo.mp4";

import g42Video from "../../assets/temp/Video/G42 Video.mp4";
import style from './AboutUsMarquee.module.css'

const AboutUsMarquee = () => {
  const textRef = useRef(null);

  
gsap.registerPlugin(GSDevTools, SplitText)

useEffect(() => {
  
  let split;
  let split2;
  let tl;
  let t2;
  
  function init() {
  
    // text1 
  
    gsap.set(".aboutUsText", { autoAlpha: 1 })
    
    if(split) {
      GSDevTools.getById("tools").kill()
      split.revert()
    }
    split = new SplitText(".text1", {charsClass:"chars", linesClass:"lines"})
    tl = gsap.timeline()
    // Set initial opacity to make the text visible


    split.lines.forEach((line, index) => {
      tl.from(line.querySelectorAll(".chars"), {duration:0.025, yPercent:50, stagger:0.02}, ">-50%");
      tl.to(line.querySelectorAll(".chars"), {duration:0.025, yPercent:2, stagger:0.02}, ">-50%")
      // tl.to(line.querySelectorAll(".chars"), {duration:0.025, yPercent: 0, stagger:0.04}, ">-50%")

    })
    // GSDevTools.create({animation:tl, id:"tools"})
  
    // text2 
    gsap.set(".aboutUsText2", {autoAlpha:1})
    
    if(split2) {
      GSDevTools.getById("tools").kill()
      split2.revert()
    }

    split2 = new SplitText(".demo2", {charsClass:"chars2", linesClass:"lines"})
    t2 = gsap.timeline()
    split2.lines.forEach((line, index) => {
      t2.from(line.querySelectorAll(".chars2"), {duration:0.025, yPercent:50, stagger:0.02}, ">-50%");
      t2.to(line.querySelectorAll(".chars2"), {duration:0.025, yPercent:5, stagger:0.02}, ">-50%")
  })
    GSDevTools.create({animation:tl, id:"tools"})
  }
  
  let timeout // holder for timeout id
  let delay = 250 // delay after event is "complete" to run callback
  
  // window.resize event listener
  window.addEventListener('resize', function() {
    gsap.set(".aboutUsText", {autoAlpha:0})
    // gsap.set(".aboutUsText2", {autoAlpha:0})
    // clear the timeout
    clearTimeout(timeout);
    // start timing for event "completion"
    timeout = setTimeout(init, delay);
  });
  
  
  //learn how this was made
  //https://www.creativecodingclub.com
  // init();
  window.addEventListener("load", init);


  // Event listener for window resize
  const handleResize = () => {
    gsap.set(".aboutUsText", { autoAlpha: 0 });
    clearTimeout(timeout);
    timeout = setTimeout(init, delay);
  };

  window.addEventListener('resize', handleResize);

  // Clean up the event listener when the component unmounts
  // return () => {
  //   window.removeEventListener('resize', handleResize);
  // };

}, []); // Empty dependency array means this effect runs once on mount


  return (
    <>
      <Box mt={["0px", "0px", "111px", "111px"]}>
        <Marquee autoFill>
          <Flex alignItems={"center"} gap={["16px", "16px", "34px"]}>
            <hr
              style={{
                width: "88px",
                border: "1px solid black",
                margin: "auto",
              }}
            />

            <Text
              fontFamily={"Bossa-ExtendedBold"}
              textAlign={"center"}
              fontSize={["32px", "32px", "50px", "60px"]}
              fontWeight={700}
            >
              About G42 Healthcare
            </Text>
            <hr
              style={{
                width: "88px",
                border: "1px solid black",
                margin: "auto",
              }}
            />
          </Flex>
        </Marquee>

        <Flex
          flexDirection={["column", "column", "row"]}
          mt={["0px", "0px", "100px", "100px"]}
          padding={["0px 20px", "0px 20px", "0px 151px"]}
          gap={["33px", "33px", "90px"]}
          alignItems={["self-start", "self-start", "self-start", "start"]}
        >
          <Box
            pos={"relative"}
            // paddingTop={"56.25%"}
            height={["214px", "214px", "377px"]}
            w={["352px", "352px", "619px"]}
          >
            <ReactPlayer
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                objectFit: "cover",
              }}
              width={"100%"}
              height={"377px"}
              playing={true}
              loop={true}
              url={g42Video}
              muted
            />
          </Box>
          <Flex
            mt={["50px", "50px", "25px"]}
            w={["100vw", "100vw", "453px", "453px"]}
            maxW={["100%", "100%", "453px", "453px"]}
            flexDirection={"column"}
            justifyContent={"space-between"}
          >
            <section 
            style={{visibility: "hidden"}}
            className={`${style.aboutUsText} aboutUsText demo`}>
            <Text
            // visibility={"hidden"}
              fontFamily={"Bossa-Light"}
              fontSize={[ "12px", "12px", "18px", "18px"]}
              fontStyle={"normal"}
              fontWeight={300}
              lineHeight={"24px"}
              color={"#747272"}
              letterSpacing={"-0.42px"}
              className="text1"
            >
              About G42 Healthcare in 2 paragraphs not more than 60-70 words.
              uses AI and data to create a world-class healthcare sector in the
              UAE and beyond. We partner with governments, scientists, and the
              medical community to future-proof nations' health.
              </Text>
              </section>

              <Text
              mt={["15px"]}
              fontFamily={"Bossa-Light"}
              fontSize={[ "12px", "12px", "18px", "18px"]}
              fontStyle={"normal"}
              fontWeight={300}
              lineHeight={"24px"}
              color={"#747272"}
              letterSpacing={"-0.42px"}
              visibility={"hidden"}
              className="aboutUsText2 demo2"

            >
              We built Biogenix Labs, the first COVID-19 accredited large-scale
              throughput lab in the UAE, and facilitated the world's first phase
              three inactivated COVID-19 vaccine trial, 4Humanity, with over
              43,000 participants from 125+ nationalities.
            </Text>
            <Link href="/about">
            <Button
            fontFamily={"Bossa-ExtendedMedium"}
              mt={"15px"}
              _hover={{ bgColor: "#00D2AA" }}
              bgColor={"#00D2AA"}
              borderRadius={"80px"}
              fontSize={["14px", "14px", "16px", "16px"]}
              fontStyle={"normal"}
              fontWeight={500}
              textTransform={"capitalize"}
              textAlign={"center"}
              color={"white"}
              w={["167px", "167px", "219px", "219px"]}
              h={["40px", "40px", "55px", "55px"]}
            >
              About Us
            </Button>
            </Link>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default AboutUsMarquee;
