import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BiSolidDashboard } from 'react-icons/bi';
import { RiUser5Fill } from 'react-icons/ri';
import { BsFillPinFill } from 'react-icons/bs';
import { FaLink } from 'react-icons/fa';

        

const Gnb = () => {
  return (
    <GnbWrapper>
      <ul>
        <li>
          <Link to="/">
            <BiSolidDashboard size={24}/>Dashboard
            </Link>
        </li>
        <li>
          <Link to="/about">
            <RiUser5Fill size={24}/>About
            </Link>
        </li>
        <li>
          <Link to="/">
            <BsFillPinFill size={24}/>Project
            </Link>
        </li>
        <li>
          <Link to="/">
            <FaLink size={24}/>Contact
            </Link>
        </li>
      </ul>
    </GnbWrapper>
  );
};

const GnbWrapper = styled.nav`
  ul {
    display: block;
    padding-top: 20px;
    li {
      a {
        color: #333;
        &:hover {
          color: #000;
        }
      }
    }
  }
`;

export default Gnb;