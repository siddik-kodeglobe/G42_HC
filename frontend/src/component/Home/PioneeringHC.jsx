import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import style from "./pioneerHC.module.css";

import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GSDevTools } from "gsap/GSDevTools";
import FontFaceObserver from "fontfaceobserver";

const PioneeringHC = () => {
  gsap.registerPlugin(GSDevTools, SplitText, ScrollTrigger);

  const [isVisible, setIsVisible] = useState(false);

  const sectionRef1 = useRef(null);
  const sectionRef2 = useRef(null);
  const sectionRef3 = useRef(null);
  const sectionRef4 = useRef(null);

  // Animation L2R
  const sectionRef1_L2R = useRef(null);
  const sectionRef2_L2R = useRef(null);
  const sectionRef3_L2R = useRef(null);
  const sectionRef4_L2R = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(SplitText);

    let split;
    let tl;

    let split2;
    let t2;

    let split3;
    let t3;

    let split4;
    let t4;

    // Animation L2R
    let split1_L2R;
    let t1_L2R;

    let split2_L2R;
    let t2_L2R;

    let split3_L2R;
    let t3_L2R;

    let split4_L2R;
    let t4_L2R;

    const sectionElement1 = sectionRef1.current;
    const sectionElement2 = sectionRef2.current;
    const sectionElement3 = sectionRef3.current;
    const sectionElement4 = sectionRef4.current;

    // Animation L2R
    const sectionElement1_L2R = sectionRef1_L2R.current;
    const sectionElement2_L2R = sectionRef2_L2R.current;
    const sectionElement3_L2R = sectionRef3_L2R.current;
    const sectionElement4_L2R = sectionRef4_L2R.current;

    function init() {
      gsap.set(".box1_phc", { autoAlpha: 1 });

      if (split) {
        split.revert();
      }

      split = new SplitText(".text1_phc", {
        charsClass: "chars",
        linesClass: "lines",
      });
      tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionElement1,
          start: "bottom center+=50%", // Adjust this as needed
          // end: 'bottom center', // Adjust this as needed
          scrub: false, // Smoothly transition the animation
          markers: false, // Remove this in production
        },
      });

      split.lines.forEach((line, index) => {
        const chars = line.querySelectorAll(".chars");
        tl.from(
          chars,
          { duration: 0.3, yPercent: 75, stagger: 0.005, opacity: 0 },
          ">-40%"
        );
        tl.to(chars, { duration: 0.3, yPercent: 7, stagger: 0.005 }, ">-40%");
      });

      // text2
      gsap.set(".box2_phc", { autoAlpha: 1 });

      if (split2) {
        split2.revert();
      }

      split2 = new SplitText(".text2_phc", {
        charsClass: "chars",
        linesClass: "lines",
      });

      t2 = gsap.timeline({
        scrollTrigger: {
          trigger: sectionElement2,
          start: "bottom center+=50%",
          // end: 'bottom center',
          scrub: false, // Smoothly transition the animation
          markers: false, // Remove this in production
        },
      });

      split2.lines.forEach((line, index) => {
        const chars2 = line.querySelectorAll(".chars");
        t2.from(
          chars2,
          { duration: 0.3, yPercent: 75, stagger: 0.005, opacity: 0 },
          ">-40%"
        );
        t2.to(chars2, { duration: 0.3, yPercent: 7, stagger: 0.005 }, ">-40%");
      });

      // text3
      gsap.set(".box3_phc", { autoAlpha: 1 });

      if (split3) {
        split3.revert();
      }

      split3 = new SplitText(".text3_phc", {
        charsClass: "chars",
        linesClass: "lines",
      });

      t3 = gsap.timeline({
        scrollTrigger: {
          trigger: sectionElement3,
          start: "bottom center+=50%",
          // end: 'bottom center',
          scrub: false, // Smoothly transition the animation
          markers: false, // Remove this in production
        },
      });

      split3.lines.forEach((line, index) => {
        const chars3 = line.querySelectorAll(".chars");
        t3.from(
          chars3,
          { duration: 0.3, yPercent: 75, stagger: 0.005, opacity: 0 },
          ">-40%"
        );
        t3.to(chars3, { duration: 0.3, yPercent: 7, stagger: 0.005 }, ">-40%");
      });

      // text4
      gsap.set(".box4_phc", { autoAlpha: 1 });

      if (split4) {
        split4.revert();
      }

      split4 = new SplitText(".text4_phc", {
        charsClass: "chars",
        linesClass: "lines",
      });

      t4 = gsap.timeline({
        scrollTrigger: {
          trigger: sectionElement1,
          start: "bottom center+=50%",
          // end: 'bottom center',
          scrub: false, // Smoothly transition the animation
          markers: false, // Remove this in production
        },
      });

      split4.lines.forEach((line, index) => {
        const chars4 = line.querySelectorAll(".chars");
        t4.from(
          chars4,
          { duration: 0.3, yPercent: 75, stagger: 0.005, opacity: 0 },
          ">-40%"
        );
        t4.to(chars4, { duration: 0.3, yPercent: 7, stagger: 0.005 }, ">-40%");
      });

      // ================  Text1 L2R Fade ================
      gsap.set(".box1_L2R", { autoAlpha: 1 }); //remove fouc
      split1_L2R = new SplitText(".text1_L2R", {
        charsClass: "chars",
        linesClass: "lines",
      });
      const split1a_L2R = new SplitText(".text1a_L2R", {
        charsClass: "chars",
        linesClass: "lines",
      });

      t1_L2R = gsap.timeline({
        scrollTrigger: {
          trigger: sectionElement1_L2R,
          start: "bottom center+=50%",
          // end: 'bottom center',
          scrub: false, // Smoothly transition the animation
          markers: false, // Remove this in production
        },
      });

      const a = gsap.timeline();
      a.from(split1_L2R.chars, { duration: 1, opacity: 0, stagger: 0.05 });
      const b = gsap.timeline();
      b.from(split1a_L2R.chars, { duration: 1, opacity: 0, stagger: 0.05 });
      t1_L2R.add([a, b]);
      // GSDevTools.create({ animation: t2_L2R });

      // ================ Text2 L2R Fade ================
      gsap.set(".box2_L2R", { autoAlpha: 1 }); //remove fouc
      split2_L2R = new SplitText(".text2_L2R", {
        charsClass: "chars",
        linesClass: "lines",
      });
      const split2a_L2R = new SplitText(".text2a_L2R", {
        charsClass: "chars",
        linesClass: "lines",
      });

      t2_L2R = gsap.timeline({
        scrollTrigger: {
          trigger: sectionElement2_L2R,
          start: "bottom center+=50%",
          // end: 'bottom center',
          scrub: false, // Smoothly transition the animation
          markers: false, // Remove this in production
        },
      });

      const c = gsap.timeline();
      c.from(split2_L2R.chars, { duration: 1, opacity: 0, stagger: 0.05 });
      const d = gsap.timeline();
      d.from(split2a_L2R.chars, { duration: 1, opacity: 0, stagger: 0.05 });
      t2_L2R.add([c, d]);
      // GSDevTools.create({ animation: t2_L2R });

      // ================ Text3 L2R Fade ================
      gsap.set(".box3_L2R", { autoAlpha: 1 }); //remove fouc
      split3_L2R = new SplitText(".text3_L2R", {
        charsClass: "chars",
        linesClass: "lines",
      });
      const split3a_L2R = new SplitText(".text3a_L2R", {
        charsClass: "chars",
        linesClass: "lines",
      });

      t3_L2R = gsap.timeline({
        scrollTrigger: {
          trigger: sectionElement3_L2R,
          start: "bottom center+=50%",
          // end: 'bottom center',
          scrub: false, // Smoothly transition the animation
          markers: false, // Remove this in production
        },
      });

      const e = gsap.timeline();
      e.from(split3_L2R.chars, { duration: 1, opacity: 0, stagger: 0.05 });
      const f = gsap.timeline();
      f.from(split3a_L2R.chars, { duration: 1, opacity: 0, stagger: 0.05 });
      t3_L2R.add([e, f]);
      // GSDevTools.create({ animation: t2_L2R });

      // ================ Text4 L2R Fade ================
      gsap.set(".box4_L2R", { autoAlpha: 1 }); //remove fouc
      split4_L2R = new SplitText(".text4_L2R", {
        charsClass: "chars",
        linesClass: "lines",
      });
      const split4a_L2R = new SplitText(".text4a_L2R", {
        charsClass: "chars",
        linesClass: "lines",
      });

      t4_L2R = gsap.timeline({
        scrollTrigger: {
          trigger: sectionElement4_L2R,
          start: "bottom center+=50%",
          // end: 'bottom center',
          scrub: false, // Smoothly transition the animation
          markers: false, // Remove this in production
        },
      });

      const g = gsap.timeline();
      g.from(split4_L2R.chars, { duration: 1, opacity: 0, stagger: 0.05 });
      const h = gsap.timeline();
      h.from(split4a_L2R.chars, { duration: 1, opacity: 0, stagger: 0.05 });
      t4_L2R.add([g, h]);
      // GSDevTools.create({ animation: t4_L2R });
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
        gsap.set(".box1_phc", { autoAlpha: 0 });
        clearTimeout(timeout);
        timeout = setTimeout(init, delay);
      }, 250)
    );

    // Window resize event listener with debounce
    window.addEventListener(
      "resize",
      debounce(() => {
        gsap.set(".box2_phc", { autoAlpha: 0 });
        clearTimeout(timeout);
        timeout = setTimeout(init, delay);
      }, 250)
    );

    // Window resize event listener with debounce
    window.addEventListener(
      "resize",
      debounce(() => {
        gsap.set(".box3_phc", { autoAlpha: 0 });
        clearTimeout(timeout);
        timeout = setTimeout(init, delay);
      }, 250)
    );

    // Window resize event listener with debounce
    window.addEventListener(
      "resize",
      debounce(() => {
        gsap.set(".box4_phc", { autoAlpha: 0 });
        clearTimeout(timeout);
        timeout = setTimeout(init, delay);
      }, 250)
    );

    const font = new FontFaceObserver("Bossa-Light");

    font
      .load()
      .then(() => {
        // Font is loaded, you can run your code here
        // Initial call to init
        init();
      })
      .catch((error) => {
        console.error("Font could not be loaded:", error);
      });
  }, []);

  // Function to toggle visibility
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <Box
        w={"100vw"}
        maxW={"100%"}
        mt={["79px", "79px", "79px", "81px", "105px", "125px"]}
      >
        <Text
          fontFamily={"Bossa-ExtendedBold"}
          fontSize={["32px", "32px", "32px", "32px", "40px", "48px"]}
          lineHeight={"normal"}
          className={style.heading}
        >
          Pioneering Healthcare
        </Text>
        <Box
          padding={[
            "60px 20px 0px 20px",
            "60px 20px 0px 20px",
            "60px 20px 0px 20px",
            "60px 11.71% 0px 11.71%",
            "50px 11.71% 0px 11.71%",
            "60px 11.71% 0px 11.71%",
          ]}
        >
          <Flex
            gap={["20px", "20px", "10px", "0px"]}
            flexDirection={["column", "column", "row"]}
          >
            <Box
              ref={sectionRef1_L2R}
              className={`box1_L2R ${isVisible ? "visible" : "hidden"}`}
              w={["100%", "100%", "100%", "50%", "50%", "50%"]}
              padding={"0px 0px"}
            >
              <Text w={"100%"} className={`${style.text1} text1_L2R`}>
                {/* 1<sup>st</sup> COVID Lab */}
                Part of a Global Tech enabled healthcare company
              </Text>
              {/* <Text className={`${style.text2} text1a_L2R`}>Biogenix</Text> */}
            </Box>
            <Box
              ref={sectionRef1}
              className={`box1_phc demo ${isVisible ? "visible" : "hidden"}`}
              w={["100%", "100%", "100%", "50%", "50%", "50%"]}
              padding={["0px", "0px", "0px 20px", "0px 20px"]}
            >
              <Text className={`${style.desc} text1_phc`}>
                G42 Healthcare’s unique medical and data-centric technologies
                with Mubadala Health’s world-class patient services and
                state-of-the-art facilities have come together under M42, to
                provide the highest level of personalized, precise, and
                preventative care
              </Text>
            </Box>
          </Flex>
          <hr />
          <Flex
            gap={["20px", "20px", "10px", "0px"]}
            flexDirection={["column", "column", "row"]}
            marginTop={"41px"}
          >
            <Box
              ref={sectionRef2_L2R}
              className={`box2_L2R ${isVisible ? "visible" : "hidden"}`}
              section={sectionRef2_L2R}
              w={["100%", "100%", "100%", "50%", "50%", "50%"]}
              padding={"0px 0px"}
            >
              <Text w={"100%"} className={`${style.text1} text2_L2R`}>
                {/* 1<sup>st</sup> Omics Facility in the Region */}
                Digital Innovation
              </Text>
              {/* <Text w={"100%"} className={`${style.text2} text2a_L2R`}>
                Omics Center of Intelligence
              </Text> */}
            </Box>
            <Box
              ref={sectionRef2}
              className={`box2_phc demo ${isVisible ? "visible" : "hidden"}`}
              w={["100%", "100%", "100%", "50%", "50%", "50%"]}
              padding={["0px", "0px", "0px 20px", "0px 20px"]}
            >
              <Text className={`${style.desc} text2_phc`}>
              Our digital innovation sparks a revolutionary step in patient experience by develop
applications accessible to better public health. The launch of M42’s X-ray screening
machine, cutting-edge pharmacogenomics report, HealthSight analytics platform,
and first-open-sourced Clinical LLM has firmly positioned M42 as a global pioneer in
the generative AI domain while improving accuracy and efficiency in clinical
workflow.
              </Text>
            </Box>
          </Flex>
          <hr />

          <Flex
            gap={["20px", "20px", "10px", "0px"]}
            flexDirection={["column", "column", "row"]}
            marginTop={"41px"}
          >
            <Box
              ref={sectionRef3_L2R}
              className={`box3_L2R ${isVisible ? "visible" : "hidden"}`}
              section={sectionRef3_L2R}
              w={["100%", "100%", "100%", "50%", "50%", "50%"]}
              padding={"0px 0px"}
            >
              <Text className={`${style.text1} text3_L2R`}>
                {/* 1<sup>st</sup> Waste Water Lab */}
                Leading Omics facility in the region
              </Text>
              {/* <Text className={`${style.text2} text3a_L2R`}>RASID</Text> */}
            </Box>
            <Box
              ref={sectionRef3}
              className={`box3_phc demo ${isVisible ? "visible" : "hidden"}`}
              w={["100%", "100%", "100%", "50%", "50%", "50%"]}
              padding={["0px", "0px", "0px 20px", "0px 20px"]}
            >
              <Text className={`${style.desc} text3_phc`}>
              Our Omics Centre of Excellence democratizes access to population genomic
sequencing and proteomics. By leveraging world-class technology and AI, we
transform biological samples into insightful, actionable data, advancing healthcare
and population health programs.
              </Text>
            </Box>
          </Flex>
          <hr />

          <Flex
            gap={["20px", "20px", "10px", "0px"]}
            flexDirection={["column", "column", "row"]}
            marginTop={"41px"}
          >
            <Box
              ref={sectionRef4_L2R}
              className={`box4_L2R ${isVisible ? "visible" : "hidden"}`}
              // section={sectionRef4_L2R}
              w={["100%", "100%", "100%", "50%", "50%", "50%"]}
              padding={"0px 0px"}
            >
              <Text className={`${style.text1} text4_L2R`}>
                {/* 1<sup>st</sup> clinical trial pan MENA region */}
                Pioneering Waste Water Lab
              </Text>
              {/* <Text className={`${style.text2} text4a_L2R`}>
                4Humanity trial Diagnostics
              </Text> */}
            </Box>
            <Box
              ref={sectionRef4}
              className={`box4_phc demo ${isVisible ? "visible" : "hidden"}`}
              w={["100%", "100%", "100%", "50%", "50%", "50%"]}
              padding={["0px", "0px", "0px 20px", "0px 20px"]}
            >
              <Text className={`${style.desc} text4_phc`}>
              RASID lab pioneers in wastewater surveillance, monitoring infectious diseases, and
safeguarding public health. Through advanced AI applications, we predict outbreaks,
optimising the allocation of national resources	, and supporting public health
outcomes.
              </Text>
            </Box>
          </Flex>
          {/* <hr /> */}
        </Box>
      </Box>
    </>
  );
};

export default PioneeringHC;
