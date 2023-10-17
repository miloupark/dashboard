import React from "react";
import Layout from "./components/layout/Layout";
import { Reset } from "styled-reset";
import { Route, Routes } from "react-router-dom";
import Home from "./pages";
import GlobalStyles from "./assets/styles/GlobalStyles.styles";
// import './App.scss';
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import theme from "./theme";
import MarketPlace from "./pages/MarketPlace";
import Kanban from "./pages/Kanban";
import Profile from "./pages/Profile";
import Signin from "./pages/Signin";
import Tables from "./pages/Tables";

function App() {
  return (
    <ChakraProvider theme={theme} >
      <CSSReset/>
      <Reset />
      <GlobalStyles/>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}/>
          {/* home = Dashboard */}
          <Route path="/marketplace" element={<MarketPlace/>}/>
          <Route path="/tables" element={<Tables/>}/>
          <Route path="/kanban" element={<Kanban/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/signin" element={<Signin/>}/>
        </Routes>
      </Layout>
    </ChakraProvider>
   );
};

export default App;