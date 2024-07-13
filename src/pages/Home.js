import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Hero from "../components/Home/Hero";
import CampusToCubicle from "../components/Home/CampusToCubicle";
import About from "../components/Home/About";

const Home = () => {
  return (
    <ChakraProvider>
      <Hero />
      <CampusToCubicle />
      <About />
      {/* Your other page components or routes can go here */}
    </ChakraProvider>
  );
};

export default Home;
