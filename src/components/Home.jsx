import React from "react";
import Navbar from "./home-components/Navbar";
import UpperSection from "./home-components/UpperSection";
import MiddleSection from "./home-components/MiddleSection";
import LowerSection from "./home-components/LowerSection";
import Footer from "./home-components/Footer";


function Home() {
  return (
    <main id="home-main" className="relative flex-col w-full">
      <Navbar />
      <UpperSection />
      <MiddleSection />
      {/* <LowerSection /> */}
      <Footer />
    </main>
  );
}

export default Home;
