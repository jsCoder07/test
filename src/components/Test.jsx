import React, { useEffect } from "react";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";
const Wrapper = styled.div`
  h1 {
    font-family: "Oswald", sans-serif;
  }
`;
const Test = () => {
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
    <Wrapper className="w-screen bg-zinc-900 px-8 py-8 flex content-center items-center justify-center">
      <article className="prose  prose-sm md:prose-lg  text-gray-100  w-full ">
        <h1 className="text-gray-100 text-center" data-aos="fade-up">
          Wab Hotel
        </h1>
        <p data-aos="fade-left">
          Certainly you can’t define the Wab Hotel a conventional one at least
          on its appearance at first sight. It presents strong characteristics
          that make it one of the new few construction Design Hotels in Lagos,
          enriched with furniture of exclusive design and quality. An elegant
          design gives a dominant idea of the hotel on its visual and
          communicative impact.
        </p>

        <p data-aos="fade-right">
          The external spaces of the structure are characterized by a terrace
          that overlooks a beautiful park, facing the main facade, which can be
          a particular background for events, especially in the evening.
        </p>

        <p data-aos="fade-left">
          The hotel rooms are comfortable, bright and welcoming due to the use
          of warm materials like wood for furniture and flooring and a special
          shaped ceiling that seems to bend down towards guests welcoming them
          into a virtual ‘hug’.
        </p>
      </article>
    </Wrapper>
  );
};

export default Test;
