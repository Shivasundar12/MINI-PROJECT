import React from 'react';
import './styles/global.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import About from './components/About';
import InterviewForm from './components/InterviewForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Features />
      <About />
      <InterviewForm /> {/* This is the target */}
      <Footer />
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <HeroSection />
//       <Features />
//       <About />
//       <Footer />
//     </div>
//   );
// }

// export default App;
