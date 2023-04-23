import React from "react";
import Navbar from "./home-components/Navbar";
import Content from "./home-components/Content";
import Footer from "./home-components/Footer";


function Home() {
  return (
    <main id="home-main" className="relative flex-col w-full">
      <Navbar /> 
      <Content /> 
      <Footer /> 
    </main>
  );
}
export default Home;
