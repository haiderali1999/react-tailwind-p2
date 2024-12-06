import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./sections/hero";
import "aos/dist/aos.css"; // Import AOS CSS
import Aos from "aos";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    // Initialize AOS
    Aos.init({
      duration: 1200, // Optional: adjust the duration of the animations
    });
  }, []);

  return (
    <Router>
      <div className="bg-gradient-to-r from-indigo-500">
        <Header />
        <Hero />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
