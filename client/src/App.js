import React from "react";
import "./styles/global.css";
import Navbar from "./components/Navbar";
import InterviewForm from "./components/InterviewForm";

function App() {
  return (
    <div className="App">
      <Navbar />
      <InterviewForm />
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
