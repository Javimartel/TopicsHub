import React from "react";
import Navbar from "../components/Navbar";
import Content from "../components/home/Content";
import Footer from "../components/Footer";


function Home() {
  return (
    <main id="home-main" className="relative flex-col w-full">
      <div className="pt-5">
        <Navbar />
      </div>
      <Content />
      <Footer />
    </main>
  );
}
export default Home;
