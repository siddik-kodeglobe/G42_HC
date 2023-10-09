import React from "react";
import Navbar from "../Navbar/Navbar";
import BreadCrumb from "./BreadCrumb";
import Cards from "./Cards";
import WhatWeDoFooter from "./WhatWeDoFooter";
import Text_WWD from "./Text_WWD";
import LazyLoad from "react-lazy-load";

const WhatWeDo = () => {
  return (
    <>
      <LazyLoad>
        <Navbar />
      </LazyLoad>

      <LazyLoad>
        <BreadCrumb />
      </LazyLoad>

      <LazyLoad>
        <Text_WWD />
      </LazyLoad>
      <LazyLoad>
        <Cards />
      </LazyLoad>
      <LazyLoad>
        <WhatWeDoFooter />
      </LazyLoad>
    </>
  );
};

export default WhatWeDo;
