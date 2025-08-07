import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import About from "./components/About";
import Footer from "./components/Footer";
import "./styles/global.css";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Features />
      <About />
      <Footer />
    </div>
  );
}

export default App;
