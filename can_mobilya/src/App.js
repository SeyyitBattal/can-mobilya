//TASLAK: https://dribbble.com/shots/22818650-Carpenter-Craftman-Website
//ESKİ SİTE: https://sites.google.com/view/can-mobilya/ana-sayfa

/*
YAZI TİPLERİ
- Playfair Display
- Ubuntu
- Merriweather
- Quicksand
*/

/*
TO DO LIST: 
- 
- 
*/

import React from "react";
import { Helmet } from "react-helmet";
import { Header } from "./Layouts/Header";
import { Main } from "./Layouts/Main";
import { Footer } from "./Layouts/Footer";
import logo from "./Photos/can-mobilya-logo.jpg";

function App() {
  return (
    <div className="">
      <Helmet>
        <title>Can Mobilya</title>
        <link rel="icon" href={logo} type="image/jpg" />
      </Helmet>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
