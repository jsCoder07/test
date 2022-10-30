import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import { menuData } from "../data/menuData";
import mainLogo from "../logos/logom.png";

import BurgerMenu from "./BurgerMenu";
const Nav = styled.nav`
  height: 100px;

  font-family: OakesGroteskRegular;
  z-index: 100;
  position: fixed;
  width: 100%;
`;
const BurgDiv = styled.div`
  width: 120px;
  height: 100px;
  background: black;

  margin-left: -2rem;
`;
const Logo = styled(Link)`
  font-family: "Oswald", sans-serif;
  min-width: 100px;
`;
const LogoWab = styled.div``;

const Navbar = () => {
  return (
    <>
      <Nav className="text-white flex content-center justify-between px-8 items-center bg-gray-900/90">
        <BurgDiv className="transition ease-in-out delay-150 hover:bg-yellow-600/70 hover:transition-all transition-all hover:duration-500 duration-300">
          <BurgerMenu />
        </BurgDiv>
        <LogoWab>
          <Link to="/">
            <img src={mainLogo} alt="Logo" className="w-20" />
          </Link>
        </LogoWab>
        <div className="flex items-center h-full bg-yellow-600/90 mr-[-2rem] pointer hover:bg-yellow-600">
          <Logo className="px-4 uppercase text-base" to="/reservations">
            <h1>Reservation</h1>
          </Logo>
        </div>
      </Nav>
    </>
  );
};

export default Navbar;
