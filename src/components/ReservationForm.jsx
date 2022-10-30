import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";
const Section = styled.section.attrs({ className: "md:flex" })``;
const SubmitBtn = styled.button`
  border: 2px solid #eee;
  font-family: "OakesGroteskBold";
  font-size: 12px;
  letter-spacing: 2px;
  font-weight: 400;
  color: #eee;
  padding: 0.5em 2em;
  text-transform: uppercase;
  margin: 1em 0;
`;
const RightDiv = styled.div.attrs({
  className: "w-full flex items-center  h-screen bg-slate-900",
})`
  input {
    width: 100%;
    padding: 0.7rem 2rem;
    margin: 0.5rem auto;
    border: 1px solid #eee;
  }
  textarea {
    padding: 0.7rem 2rem;
    width: 100%;
    border: 1px solid #eee;
    min-height: 200px;
  }
  input.half {
    width: 48%;
    padding: 0.7rem 2rem;
    margin: 0.5rem 0;
    border: 1px solid #eee;
  }
  h2 {
    color: #eee;
    font-family: "OakesGroteskBold";
    font-size: clamp(20px, 40px, 50px);
    line-height: 50px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 1.5rem;
  }
  p {
    color: #eee;
    font-family: "OakesGroteskRegular";
    font-size: 14px;
    line-height: 25px;
    font-weight: 400;
    letter-spacing: 2px;
    white-space: pre-wrap;
    margin-bottom: 1rem;
  }
  strong {
    color: #1a1a11;
    font-family: "OakesGroteskBold";
    font-size: 14px;
    line-height: 25px;
    font-weight: 900;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 1.5rem;
    margin-top: 1.5rem;
  }
  div {
    @media (min-width: 1280px) {
      margin: auto;
      width: 70%;
    }
    margin: auto;
    width: 90%;
  }
`;
const ImgDiv = styled.div.attrs({
  className: "w-full flex items-center justify-center h-screen bg-gray-800",
})`
  background: ${(props) => `url(${props.background}) no-repeat center top`};

  background-size: cover;
  object-fit: cover;
`;
const ContactForm = (props) => {
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
    <Section>
      <ImgDiv background={props.background} data-aos="fade-up"></ImgDiv>
      <RightDiv>
        <div data-aos="fade-down">
          <h2>{props.title}</h2>
          <input
            type="text"
            placeholder="Name"
            className="shadow-lg rounded-md"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="shadow-lg rounded-md"
          />
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <input
              type="text"
              placeholder="Mobile"
              className="shadow-lg rounded-md"
            />
          </div>
          <select
            class="form-select px-4 py-3 rounded-full block my-4"
            name="roomType"
            id="roomType"
          >
            <option value="">Select Room Type</option>
            <option value="standard">Standard Room</option>
            <option value="executive">Excutive Room</option>
            <option value="presidential">Presidential Room</option>
          </select>
          <label htmlFor="dateTime" className="text-white">
            Select Checkin Date and Time
          </label>
          <input
            id="dateTime"
            type="datetime-local"
            placeholder="Select Check in Date"
            className="shadow-lg rounded-md form-input"
          />
          <label htmlFor="dateTimeOut" className="text-white">
            Select CheckOut Date and Time
          </label>
          <input
            id="dateTime"
            type="datetime-local"
            placeholder="Select Check Out Date"
            className="shadow-lg rounded-md form-input"
          />
          <SubmitBtn>Submit</SubmitBtn>
        </div>
      </RightDiv>
    </Section>
  );
};

export default ContactForm;
