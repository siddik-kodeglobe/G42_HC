import { Box, Button, Flex, Image, Link, Text } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import aboutImage from "../../assets/temp/about_HomePage.svg";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { GSDevTools } from "gsap/GSDevTools";
import Marquee from "react-fast-marquee";
import ReactPlayer from "react-player";
import homeVideo from "../../assets/logo/homeVideo.mp4";
import FontFaceObserver from 'fontfaceobserver';

import g42Video from "../../assets/temp/Video/G42 Video.mp4";

const AboutUsMarquee = () => {
  gsap.registerPlugin(GSDevTools, SplitText);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(SplitText);

    let split;
    let tl;

    function init() {
      gsap.set(".fullScreen", { autoAlpha: 1 });

      if (split) {
        split.revert();
      }

      split = new SplitText(".title", {
        charsClass: "chars",
        linesClass: "lines",
      });
      tl = gsap.timeline();

      split.lines.forEach((line, index) => {
        const chars = line.querySelectorAll(".chars");
        tl.from(
          chars,
          { duration: 0.3, yPercent: 100, stagger: 0.01, opacity: 0 },
          ">-40%"
        );
        tl.to(chars, { duration: 0.3, yPercent: 5, stagger: 0.01 }, ">-40%");
      });
    }

    let timeout; // holder for timeout id
    const delay = 250; // delay after event is "complete" to run callback

    // Debounce function
    function debounce(func, wait) {
      let timeout;
      return function () {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          func.apply(context, args);
        }, wait);
      };
    }

    // Window resize event listener with debounce
    window.addEventListener(
      "resize",
      debounce(() => {
        gsap.set(".fullScreen", { autoAlpha: 0 });
        clearTimeout(timeout);
        timeout = setTimeout(init, delay);
      }, 250)
    );

    const font = new FontFaceObserver('Bossa-Light');
    
    font.load().then(() => {
      // Font is loaded, you can run your code here
      // Initial call to init
      init();
    }).catch((error) => {
      console.error('Font could not be loaded:', error);
    });
  }, []);

  // Function to toggle visibility
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

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
            <Box
              w={"100%"}
              className={`fullScreen demo ${isVisible ? "visible" : "hidden"}`}
            >
              <Text
                // visibility={"hidden"}
                fontFamily={"Bossa-Light"}
                fontSize={["12px", "12px", "18px", "18px"]}
                fontStyle={"normal"}
                lineHeight={"24px"}
                color={"#747272"}
                letterSpacing={"-0.42px"}
                className="title"
                onClick={toggleVisibility}
              >
                About G42 Healthcare in 2 paragraphs not more than 60-70 words.
                uses AI and data to create a world-class healthcare sector in
                the UAE and beyond. We partner with governments, scientists, and
                the medical community to future-proof nations' health.
              </Text>
            </Box>

            <Text
              mt={["15px"]}
              fontFamily={"Bossa-Light"}
              fontSize={["12px", "12px", "18px", "18px"]}
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
