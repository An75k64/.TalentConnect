import React from "react";
import { ChakraProvider, Container } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Services from "./pages/Services";
import Jobs from "./pages/Jobs";
import Employer from "./pages/Employer";
import College from "./pages/College";
import CampusToCubicle from "./pages/CampusToCubicle";
import Affiliate from "./pages/Affiliate";
import Contact from "./pages/Contact";
import Header from "./components/Header/Header"; // Import Header
import Footer from "./components/Footer"; // Import Footer

const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <Header /> {/* Render Header at the top of all pages */}
        <Container maxW="container.xl" py={5}>
          <Routes>
            
            <Route path="/services" element={<Services />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/employer" element={<Employer />} />
            <Route path="/college" element={<College />} />
            <Route path="/campus-to-cubicle" element={<CampusToCubicle />} />
            <Route path="/affiliate" element={<Affiliate />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Container>
        <Footer /> {/* Render Footer at the bottom of all pages */}
      </Router>
    </ChakraProvider>
  );
};

export default App;
