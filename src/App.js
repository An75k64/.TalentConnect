import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop"; // Import the ScrollToTop component
import Home from "./pages/Home";
import Services from "./pages/Services";
import Jobs from "./pages/Jobs";
import PostResume from "./components/Jobs/PostResume";
import CurrentOpening from "./components/Jobs/Openings/Opening";
import Employer from "./pages/Employer";
import College from "./pages/College";
import CampusToCubicle from "./pages/CampusToCubicle";
import Affiliate from "./pages/Affiliate";
import Contact from "./pages/Contact";
import Header from "./components/Header/Header"; // Import Header
import Footer from "./components/Footer"; // Import Footer

const NotFound = () => <div>Page Not Found</div>; // Fallback component

const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <ScrollToTop /> {/* Add ScrollToTop here */}
        <Header /> {/* Render Header at the top of all pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/post-resume" element={<PostResume />} />
          <Route path="/jobs/current-opening" element={<CurrentOpening />} />
          <Route path="/employer" element={<Employer />} />
          <Route path="/college" element={<College />} />
          <Route path="/campus-to-cubicle" element={<CampusToCubicle />} />
          <Route path="/affiliate" element={<Affiliate />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} /> {/* Fallback route */}
        </Routes>
        <Footer /> {/* Render Footer at the bottom of all pages */}
      </Router>
    </ChakraProvider>
  );
};

export default App;
