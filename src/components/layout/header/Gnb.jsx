import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { BiSolidDashboard } from 'react-icons/bi';
import { RiUser5Fill } from 'react-icons/ri';
import { BsFillPinFill } from 'react-icons/bs';
import { FaLink } from 'react-icons/fa';

const Gnb = () => {
  const location = useLocation();

  return (
    <GnbWrapper>
      <ul>
        <li className={location.pathname === '/'?'active':''}>
          <Link to="/">
            <BiSolidDashboard size={24}/>Dashboard
            </Link>
        </li>
        <li className={location.pathname === '/market'?'active':''}>
          <Link to="/market">
            <RiUser5Fill size={24}/>MarketPlace
            </Link>
        </li>
        <li className={location.pathname === '/tables'?'active':''}>
          <Link to="/tables">
            <BsFillPinFill size={24}/>Tables
            </Link>
        </li>
        <li className={location.pathname === '/kanban'?'active':''}>
          <Link to="/kanban">
            <FaLink size={24}/>kanban
            </Link>
        </li>
        <li className={location.pathname === '/profile'?'active':''}>
          <Link to="/profile">
            <FaLink size={24}/>Profile
            </Link>
        </li>
        <li className={location.pathname === '/singin'?'active':''}>
          <Link to="/singin">
            <FaLink size={24}/>Sign In
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
      position: relative;
      margin-left: 3px;
      &::after {
        opacity: 0;
        transition: opacity 0.3s;
      }
      &.active {
        &::after {
          content:'';
          position: absolute;
          top: 50%;
          right: -32px;
          transform: translateY(-50%);
          width: 4px;
          height : 36px;
          border-radius: 25px;
          background-color: var(--gray-8);
          opacity: 1;
        }
      }
      a {
        display:flex;
        align-items: center;
        gap: 10px;
        color: #333;
        padding: 16px 0;
        font-weight: 500;
        &:hover {
          color: var(--info-dark);
        }
      }
      }
    }
    `;
      /* 아이콘 사이즈 이렇게 넣어줘도 무방함
      svg {
        font-size: 20px;
      } */

export default Gnb;