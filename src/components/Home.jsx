import React from "react";
import Navbar from "./home-components/Navbar";
import UpperSection from "./home-components/UpperSection";
import MiddleSection from "./home-components/MiddleSection";
import Footer from "./home-components/Footer";


function Home() {
  return (
    <main id="home-main" className="relative flex-col">
      <Navbar /> {/* Navbar */}
      <UpperSection /> {/* Upper section */}
      <MiddleSection /> {/* Middle section */}
      <br />
      <br />
      <br />
      <Footer /> {/* Footer section */}
    </main>
  );
}

export default Home;
