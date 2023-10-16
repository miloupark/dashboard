import React from "react";
import Layout from "./components/layout/Layout";
import { Reset } from "styled-reset";
import { Route, Routes } from "react-router-dom";
import Home from "./pages";
import About from "./pages/About";
import GlobalStyles from "./assets/styles/GlobalStyles.styles";
// import './App.scss';
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import theme from "./theme";

function App() {
  return (
    <ChakraProvider theme={theme} >
      <Reset />
      <GlobalStyles/>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </Layout>
    </ChakraProvider>
   );
};

export default App;