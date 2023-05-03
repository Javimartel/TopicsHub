import React from "react";
import Navbar from "../components/Navbar";
import Content from "../components/home/Content";
import Footer from "../components/Footer";


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
