import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Gnb from "./Gnb";
import { Heading } from '@chakra-ui/react'
import DividerCus from "../../commmon/DividerCus";


// function Header () {}
// 위 함수로 작성해줘도 무관함! 

// header component
const Header = () => {
  // 대문자로 적어줘야 컴포넌트로 인식함
  return (
    <HeaderWrapper>
      <HeaderStyle as="h1" className="logo">
        <Link to="/"><span>Binyard</span></Link>
      </HeaderStyle>
      <DividerCus/>
      <Gnb />
    </HeaderWrapper>
  )
};

// const 변수명 = styled.태그명``;
const HeaderStyle = styled(Heading)`
  a {
    display: block;
    text-transform: uppercase;
    text-align: center;
    color: var(--white);
    font-size:26px;
    /* font-family: 'Poppins', sans-serif; */
    transition: color 0.3s ease-in-out;
    span { 
      font-weight: 700;
    }
    &:hover {
      color: var(--info-dark);
    }
  }
  /* font-size: 32px;
  font-weight: 600;
  color: var(--white); */
`;

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 290px;
  padding: 48px 32px;
  background: #111C44;
`;


export default Header;
// export해줘야 이 컴포넌트 불러올 수 있다!