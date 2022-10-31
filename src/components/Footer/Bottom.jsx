import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components/macro";
const Section = styled.section.attrs({ className: "md:flex" })``;

const LeftDiv = styled.div.attrs({
  className: "w-full flex items-center justify-center h-16 bg-gray-400",
})`
  background: #1a1a1a;

  font-family: "OakesGroteskRegular";
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #ffffff;

  padding: 0.4em 0;
`;

const Bottom = () => {
  return (
    <Section>
      <LeftDiv>
        Wab Hotel{" "}
        <Link to="/nkem" className="inline">
          &nbsp; 2022
        </Link>
        . All rights reserved
      </LeftDiv>
    </Section>
  );
};

export default Bottom;
