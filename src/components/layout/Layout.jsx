import React from 'react'
import Header from './header/Header';
import Footer from './footer/Footer';
// .jsx 확장자 생략되어있음 왜? 같은 .jsx파일이니까!

const Layout = (props) => {
  return (
    <div className='wrap'>
      <Header />
      <main id='main'>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
