import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Gnb from "./Gnb";
import { Heading } from '@chakra-ui/react'

// function Header () {}
// 위 함수로 작성해줘도 무관함! 

// header component
const Header = () => {
  // 대문자로 적어줘야 컴포넌트로 인식함
  return (
    <HeaderWrapper>
      <HeaderStyle as="h1" className="logo">
        <Link to="/">logo</Link>
      </HeaderStyle>
      <Gnb />
    </HeaderWrapper>
  )
};


// const 변수명 = styled.태그명``;
const HeaderStyle = styled(Heading)`
  font-size: 30px;
  font-weight: 600;
  color: var(--white);
`;

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100px;
  display: block;
  text-align: center;
  padding: 16px;
  background-color: var(--info);
`;


export default Header;
// export해줘야 이 컴포넌트 불러올 수 있다!