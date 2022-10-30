import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiFillCaretDown } from "react-icons/ai";

const Ul = styled.ul.attrs({
  className: "shadow-xl shadow-slate-500/50 bg-black/90",
})`
  flex-flow: column nowrap;
  list-style: none;
  position: fixed;
  left: 0;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  top: 100px;
  height: 85vh;
  width: 350px;
  padding-top: 1rem;
  padding-left: 1rem;
  transition: transform 0.3s ease-in-out;

  li {
    padding: 15px 15px;
    font-family: "Oswald", sans-serif;
    font-size: 15px;
    line-height: 18px;

    text-transform: uppercase;
    color: #fff;
  }

  ul li {
    font-size: 12px;
    line-height: 14px;
  }
`;
const LeftNav = (props) => {
  const [openArrow, setOpenArrow] = useState(false);
  const [openArrow2, setOpenArrow2] = useState(false);
  const handleArrow = () => {
    setOpenArrow(!openArrow);
  };
  const handleArrow2 = () => {
    setOpenArrow2(!openArrow2);
  };
  return (
    <Ul open={props.open}>
      <Link
        to="/"
        onClick={() => {
          props.setOpen(!props.open);
        }}
      >
        <li>Home</li>
      </Link>
      <Link
        to="/about"
        onClick={() => {
          props.setOpen(!props.open);
        }}
      >
        <li>About</li>
      </Link>
      <Link onClick={handleArrow}>
        <li className="flex">
          Rooms
          <AiFillCaretDown className=" ml-auto" />
        </li>
        {openArrow && (
          <ul className="ml-4 text-xs animate-[bounce_1s_ease-in]">
            <Link
              to="/standard"
              onClick={() => {
                props.setOpen(!props.open);
              }}
            >
              <li>Standard</li>
            </Link>
            <Link
              to="/executive"
              onClick={() => {
                props.setOpen(!props.open);
              }}
            >
              <li>Executive</li>
            </Link>
            <Link
              to="/presidential"
              onClick={() => {
                props.setOpen(!props.open);
              }}
            >
              <li>Presidential</li>
            </Link>
          </ul>
        )}
      </Link>
      <Link
        to="/reservations"
        onClick={() => {
          props.setOpen(!props.open);
        }}
      >
        <li>Reservations</li>
      </Link>
      <Link onClick={handleArrow2}>
        <li className="flex">
          <span>Facilities</span> <AiFillCaretDown className="ml-auto" />
        </li>
        {openArrow2 && (
          <ul className="ml-4 text-xs animate-[bounce_1s_ease-in]">
            <Link
              to="/pool"
              onClick={() => {
                props.setOpen(!props.open);
              }}
            >
              <li>Pool</li>
            </Link>
            <Link
              to="/gym"
              onClick={() => {
                props.setOpen(!props.open);
              }}
            >
              <li>Gym</li>
            </Link>
            <Link
              to="/laundry"
              onClick={() => {
                props.setOpen(!props.open);
              }}
            >
              <li>Laundry</li>
            </Link>
            <Link
              to="/kitchen"
              onClick={() => {
                props.setOpen(!props.open);
              }}
            >
              <li>Kitchen</li>
            </Link>
            <Link
              to="/salon"
              onClick={() => {
                props.setOpen(!props.open);
              }}
            >
              <li>Salon</li>
            </Link>
          </ul>
        )}
      </Link>
      <Link
        to="/news"
        onClick={() => {
          props.setOpen(!props.open);
        }}
      >
        <li>News</li>
      </Link>

      <Link
        to="/careers"
        onClick={() => {
          props.setOpen(!props.open);
        }}
      >
        <li>Career</li>
      </Link>
      <Link
        to="/contact"
        onClick={() => {
          props.setOpen(!props.open);
        }}
      >
        <li>Contact</li>
      </Link>
      <Link
        to="/safety"
        onClick={() => {
          props.setOpen(!props.open);
        }}
      >
        <li>Health & Safety</li>
      </Link>
    </Ul>
  );
};

export default LeftNav;
