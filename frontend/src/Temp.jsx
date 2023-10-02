import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

// Import any other necessary stylesheets and fonts here

const Temp = () => {
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

      split = new SplitText(".title", { charsClass: "chars", linesClass: "lines" });
      tl = gsap.timeline();

      split.lines.forEach((line, index) => {
        const chars = line.querySelectorAll(".chars");
        // tl.from(chars, {
        //   duration: 0.3,
        //   yPercent: 100,
        //   opacity: 0, // Initially set opacity to 0
        //   stagger: 0.02,
        // }, ">-50%"); // Delay animation to ensure visibility
        tl.from(chars, {duration:0.3, yPercent:50, stagger:0.02, opacity: 0}, ">-50%");
      tl.to(chars, {duration:0.3, yPercent:2, stagger:0.02}, ">-50%")
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

    // Initial call to init
    init();
  }, []);

  // Function to toggle visibility
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <section className={`fullScreen demo ${isVisible ? 'visible' : 'hidden'}`}>
      <h1 className="title" onClick={toggleVisibility}>
      About G42 Healthcare in 2 paragraphs not more than
60-70 words. uses AI and data to create a world-class
healthcare sector in the UAE and beyond. We partner
with governments, scientists, and the medical
community to future-proof nations' health.
      </h1>
    </section>
  );
};

export default Temp;
