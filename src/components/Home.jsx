import React from "react";
import Navbar from "./reusable-components/Navbar";
import Content from "./home-components/Content";
import Footer from "./reusable-components/Footer";


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
