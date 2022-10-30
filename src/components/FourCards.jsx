import React, { useEffect } from "react";

import styled from "styled-components/macro";
import VCard from "./VCard";
import img1 from "../images/optized/home8.jpg";
import img2 from "../images/optized/home9.jpg";
import img3 from "../images/optized/home10.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const Section = styled.section.attrs({ className: "md:flex" })``;

const FourCards = (props) => {
  useEffect(() => {
    Aos.init({
      disable: false,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,

      offset: 120,
      delay: 0,
      duration: 1000,
      easing: "ease",
      once: false,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);
  return (
    <Section className="bg-zinc-900/95 justify-evenly py-8">
      <div data-aos="fade-right">
        <VCard
          className="w-full flex items-center justify-center h-full bg-gray-400 shadow-lg"
          title="STANDARD ROOM"
          background={img1}
          content="Our Standard rooms are very affordably priced and well furished"
        />
      </div>
      <div data-aos="fade-up">
        <VCard
          className="w-full flex items-center justify-center h-full bg-gray-400 shadow-lg"
          title="EXECUTIVE ROOM"
          background={img2}
          content="Executive rooms are slightly bigger yet still affordably priced"
        />
      </div>

      <div data-aos="fade-left">
        <VCard
          className="w-full flex items-center justify-center h-full bg-gray-400 shadow-lg"
          title="PRESIDENTIAL ROOM"
          background={img3}
          content="The presidential room is the top of the line and comes with all luxury"
        />
      </div>
    </Section>
  );
};

export default FourCards;
