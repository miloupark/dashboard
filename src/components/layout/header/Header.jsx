import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Gnb from "./Gnb";

// function Header () {}
// 위 함수로 작성해줘도 무관함! 

// header component
const Header = () => {
  // 대문자로 적어줘야 컴포넌트로 인식함
  return (
    <HeaderWrapper>
      <Logo>
        <Link to="/">logo</Link>
      </Logo>
      <Gnb />
    </HeaderWrapper>
  )
};

// const 변수명 = styled.태그명``;
const Logo = styled.h1`
  font-size: 30px;
  color: blue;
`;

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 0 30px;
  background-color: #eee;
`;


export default Header;
// export해줘야 이 컴포넌트 불러올 수 있다!