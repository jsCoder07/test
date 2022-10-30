import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styled, { css } from "styled-components/macro";
import LogoSvg from "../../logos/logom.png";
const Section = styled.section.attrs({ className: "md:flex" })`
  background: #d5dddb;
`;

const LeftDiv = styled.div.attrs({
  className: "w-full md:flex  md:w-2/3  bg-gray-400 my-1",
})`
  background: #d5dddb;
  width: 100%;
`;
const Logo = styled.div.attrs({
  className: "w-full flex items-center   bg-gray-300 my-1",
})`
  display: block;
`;
const LeftLinks = styled.div.attrs({
  className: "w-full md:flex flex-col px-16",
})`
  h3 {
    font-family: "OakesGroteskBold";
    font-size: 24px;
    line-height: 30px;
    font-weight: 400;
    letter-spacing: 1px;
    text-transform: uppercase;

    padding: 0.4em 0;
  }
  li {
    font-family: "OakesGroteskRegular";
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    letter-spacing: 1px;
    text-transform: none;

    list-style: none;
    padding: 0.2em 0;
  }
`;

const RightLinks = styled.div.attrs({
  className: "w-full md:flex  flex-col   px-16",
})`
  h3 {
    font-family: "OakesGroteskBold";
    font-size: 24px;
    line-height: 30px;
    font-weight: 400;
    letter-spacing: 1px;
    text-transform: uppercase;

    padding: 0.4em 0;
  }
  p {
    font-family: "OakesGroteskRegular";
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    letter-spacing: 1px;
    text-transform: none;

    padding: 0.4em 0;
  }
`;
const MidDiv = styled.div.attrs({
  className: "w-full flex flex-col md:w-full px-16",
})`
  height: auto;

  overflow: hidden;
  h3 {
    font-family: "OakesGroteskBold";
    font-size: 24px;
    line-height: 30px;
    font-weight: 400;
    letter-spacing: 1px;
    text-transform: uppercase;

    padding: 0.4em 0;
    margin-bottom: 1em;
  }
  p {
    font-family: "OakesGroteskRegular";
    font-size: 14px;
    line-height: 30px;
    font-weight: 400;
    letter-spacing: 1px;
    text-transform: none;

    padding: 0.4em 0;
  }
`;
const RightDiv = styled.div.attrs({
  className: "w-full md:w-1/3 flex justify-center px-16 flex-col",
})`
  clear: both;
  height: auto;

  h1 {
    font-family: "OakesGroteskBold";
    font-size: clamp(20px, 35px, 42px);
    line-height: 44px;
    font-weight: 400;
    letter-spacing: 4px;
    text-transform: uppercase;

    padding: 0.4em 0;
    margin-bottom: 1em;
  }

  li {
    font-family: "OakesGroteskRegular";
    font-size: 20px;
    line-height: 40px;
    font-weight: 400;
    letter-spacing: 4px;
    text-transform: uppercase;

    list-style: none;
    padding: 0.2em 0;
  }
`;
const ReserveBtn = styled.button`
  font-family: "OakesGroteskBold";
  font-size: 12px;
  letter-spacing: 2px;
  font-weight: 400;

  padding: 0.5em 2em;
  text-transform: uppercase;
  margin: 1em 0;
`;
const MidFooter = () => {
  return (
    <Section>
      <div className="bg-zinc-800 text-gray-100">
        <img
          src={LogoSvg}
          className="mb-8"
          style={{ marginLeft: "auto", marginRight: "auto" }}
          data-aos="flip-up"
        />
        <LeftDiv>
          <LeftLinks data-aos="fade-down" className="bg-zinc-800 text-gray-100">
            <h3>Sitemap</h3>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/menu">
              <li>Menu</li>
            </Link>
            <Link to="/reservations">
              <li>Reservations</li>
            </Link>
            <Link to="/events">
              <li>Events</li>
            </Link>
            <Link to="/news">
              <li>News</li>
            </Link>

            <Link to="/careers">
              <li>Career</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
            <Link to="/safety">
              <li>Health & Safety</li>
            </Link>
          </LeftLinks>
          <RightLinks data-aos="slide-up" className="bg-zinc-800 text-gray-100">
            <h3>Location</h3>
            <p>
              221 Iju Ishaga-Gudugba Bus stop, Ifako-Ijaiye phone: +0902 506
              1010
            </p>
            <h3>Opening Hours</h3>
            <p>
              <h4>LUNCH</h4> Saturday and Sunday Reservations from 12pm to
              1.30pm
            </p>
            <p>
              <h4>DINNER</h4> Thursday to Sunday Reservations from 6pm to 8.45pm
            </p>
          </RightLinks>
          <MidDiv data-aos="fade-down" className="bg-zinc-800 text-gray-100">
            <h3>Reservations</h3>
            <Link to="/reservations">
              <ReserveBtn className="bg-white border border-yellow-600 text-yellow-600 hover:text-yellow-700 hover:scale-105 transition duration-300">
                Make a Reservation
              </ReserveBtn>
            </Link>

            <p>
              At Wab Hotel we are taking every possible preventative measure to
              ensure the health and safety of our guests, staff and suppliers.
              We have implemented a Covid-Safe House Policy which you can view
              here. As a result of the practices we are putting in place, we can
              assure that you are dining in the safest environment possible.
              Bookings are essential in order to get priority seating.
            </p>
          </MidDiv>
        </LeftDiv>
      </div>
      <RightDiv data-aos="slide-up" className="bg-zinc-900 text-gray-100">
        <h1>WabHotels</h1>
        <Link to="">
          <li>Wab Iju</li>
        </Link>
        <Link to="">
          <li>Wab Dosumu</li>
        </Link>
        <Link to="">
          <li>Wab Abeokuta</li>
        </Link>
      </RightDiv>
    </Section>
  );
};

export default MidFooter;
