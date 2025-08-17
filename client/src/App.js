import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./styles/global.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import About from "./components/About";
import InterviewForm from "./components/InterviewForm";
import Footer from "./components/Footer";
import Login from "./components/Login";

function App() {
  const [user, setUser] = useState(null); // track logged-in user

  return (
    <div className="App">
      <Routes>
        {/* If not logged in → go to login */}
        <Route path="/" element={user ? <Navigate to="/home" /> : <Login setUser={setUser} />} />

        {/* After login → landing page */}
        <Route
          path="/home"
          element={
            <>
              <Header user={user} />
              <HeroSection />
              <Features />
              <About />
              <InterviewForm />
              <Footer />
            </>
          }
        />
      </Routes>
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
