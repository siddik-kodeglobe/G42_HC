import React, { useEffect, useRef, useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GSDevTools } from "gsap/GSDevTools";
import FontFaceObserver from 'fontfaceobserver';

const PurposeMV_AU = () => {
  
  gsap.registerPlugin(GSDevTools, SplitText, ScrollTrigger);

  const [isVisible, setIsVisible] = useState(false);
  
  const sectionRef1 = useRef(null);
  const sectionRef2 = useRef(null);
  const sectionRef3 = useRef(null);
  const sectionRef4 = useRef(null);
  
  useEffect(() => {
    gsap.registerPlugin(SplitText);

    let split;
    let tl;

    let split2;
    let t2;

    let split3;
    let t3;

    const sectionElement1 = sectionRef1.current;
  const sectionElement2 = sectionRef2.current;
  const sectionElement3 = sectionRef3.current;

    function init() {
      gsap.set(".box1_pmv", { autoAlpha: 1 });

      if (split) {
        split.revert();
      }

      split = new SplitText(".text1_pmv", {
        charsClass: "chars",
        linesClass: "lines",
      });
      tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionElement1,
          start: 'bottom center+=50%', // Adjust this as needed
          // end: 'bottom center', // Adjust this as needed
          scrub: false, // Smoothly transition the animation
          markers: false, // Remove this in production
        },
      });

      split.lines.forEach((line, index) => {
        const chars = line.querySelectorAll(".chars");
        tl.from(
          chars,
          { duration: 0.3, yPercent: 75, stagger: 0.002, opacity: 0 },
          ">-40%"
        );
        tl.to(chars, { duration: 0.3, yPercent: 7, stagger: 0.002 }, ">-40%");
      });

      // text2
      gsap.set(".box2_pmv", { autoAlpha: 1 });

      if (split2) {
        split2.revert();
      }

      split2 = new SplitText(".text2_pmv", {
        charsClass: "chars",
        linesClass: "lines",
      });

      t2 = gsap.timeline({
        scrollTrigger: {
          trigger: sectionElement2,
          start: 'bottom center+=50%',
          // end: 'bottom center',
          scrub: false, // Smoothly transition the animation
          markers: false, // Remove this in production
        },
      });

      split2.lines.forEach((line, index) => {
        const chars2 = line.querySelectorAll(".chars");
        t2.from(
          chars2,
          { duration: 0.3, yPercent: 75, stagger: 0.002, opacity: 0 },
          ">-40%"
        );
        t2.to(chars2, { duration: 0.3, yPercent: 7, stagger: 0.002 }, ">-40%");
      });

      // text3
      gsap.set(".box3_pmv", { autoAlpha: 1 });

      if (split3) {
        split3.revert();
      }

      split3 = new SplitText(".text3_pmv", {
        charsClass: "chars",
        linesClass: "lines",
      });

      t3 = gsap.timeline({
        scrollTrigger: {
          trigger: sectionElement3,
          start: 'bottom center+=50%',
          // end: 'bottom center',
          scrub: false, // Smoothly transition the animation
          markers: false, // Remove this in production
        },
      });

      split3.lines.forEach((line, index) => {
        const chars3 = line.querySelectorAll(".chars");
        t3.from(
          chars3,
          { duration: 0.3, yPercent: 75, stagger: 0.002, opacity: 0 },
          ">-40%"
        );
        t3.to(chars3, { duration: 0.3, yPercent: 7, stagger: 0.002 }, ">-40%");
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
        gsap.set(".box1_pmv", { autoAlpha: 0 });
        clearTimeout(timeout);
        timeout = setTimeout(init, delay);
      }, 250)
    );

     // Window resize event listener with debounce
     window.addEventListener(
      "resize",
      debounce(() => {
        gsap.set(".box2_pmv", { autoAlpha: 0 });
        clearTimeout(timeout);
        timeout = setTimeout(init, delay);
      }, 250)
    );

    // Window resize event listener with debounce
    window.addEventListener(
      "resize",
      debounce(() => {
        gsap.set(".box3_pmv", { autoAlpha: 0 });
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
    <Box w={"100vw"} maxW={"100%"} mt={5} border={"1px solid rgba(0, 0, 0, 0.10)"}
   
   padding={["40px 20px", "40px 20px", "40px 20px", "41px 11.71% 56px 11.71%","54px 11.71% 73px 11.71%","64px 11.71% 87px 11.71%"]}
     >
      <Flex
        flexDirection={["column", "column", "row"]}
        padding={["0px", "0px", "0px 25px"]}
        justifyContent={"space-between"}
        alignItems={["start", "start","center"]}
      >
        <Text fontFamily={"Bossa-ExtendedBold"} fontSize={["24px", "24px","24px", "31px", "40px", "48px"]} fontWeight={700}>
          Our Purpose
        </Text>
        <Box w={["100%", "100%", "50%"]} ref={sectionRef1} className={`box1_pmv demo ${isVisible ? "visible" : "hidden"}`}>
        <Text
        w={["100%", "100%",  "100%",  "100%"]}
        textAlign={"start"}
          color={"#747272"}
          fontFamily={"Bossa-Light"}
          fontSize={["12px", "12px","14px", "14px"]}
          fontWeight={300}
          className={`text1_pmv`}
        >
          To invent a better healthcare everyday
        </Text>
        </Box>
      </Flex>

      <Box border={"1px solid black"} margin={["20px 0px 50px 0px","30px 0px 50px 0px","30px 0px 50px 0px", "64px 0px", "64px 0px", "64px 0px"]}></Box>
      
      <Flex
      flexDirection={["column", "column", "row"]}
        padding={["0px", "0px", "0px 25px"]}
        justifyContent={"space-between"}
        alignItems={["start", "start","center"]}
      >
        <Text fontFamily={"Bossa-ExtendedBold"} fontSize={["24px", "24px","24px", "31px", "40px", "48px"]} fontWeight={700}>
          Our Mission
        </Text>
        <Box w={["100%", "100%", "50%"]} ref={sectionRef2} className={`box2_pmv demo ${isVisible ? "visible" : "hidden"}`}>
        <Text
          w={["100%", "100%", "100%"]}
          textAlign={"start"}
          color={"#747272"}
          fontFamily={"Bossa-Light"}
          fontSize={["12px", "12px","14px"]}
          fontWeight={300}
          className={`text2_pmv`}
        >
          Unlock the power of data to transform the way we live
        </Text>
        </Box>
      </Flex>

      <Box border={"1px solid black"} margin={["20px 0px 50px 0px","30px 0px 50px 0px","30px 0px 50px 0px", "64px 0px", "64px 0px", "64px 0px"]}></Box>

      <Flex
      flexDirection={["column", "column", "row"]}
        padding={["0px", "0px", "0px 25px"]}
        justifyContent={"space-between"}
        alignItems={["start", "start","center"]}
      >
        <Text fontFamily={"Bossa-ExtendedBold"} fontSize={["24px", "24px","24px", "31px", "40px", "48px"]} fontWeight={700}>
          Our Vision
        </Text>
        <Box w={["100%", "100%", "50%"]} ref={sectionRef3} className={`box2_pmv demo ${isVisible ? "visible" : "hidden"}`}>
        <Text
          w={["100%", "100%", "100%"]}
          color={"#747272"}
          fontFamily={"Bossa-Light"}
          fontSize={["12px", "12px","14px"]}
          fontWeight={300}
          className={`text3_pmv`}
        >
          Harness data, develop artificial super intelligence and deliver
          innovative health solutions that leverage advanced technology and
          precision medicine to shape the future of healthcare
        </Text>
        </Box>
      </Flex>
    </Box>
    </>
  )
}

export default PurposeMV_AU