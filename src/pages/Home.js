import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Hero from "../components/Home/Hero";
import CampusToCubicle from "../components/Home/CampusToCubicle";
import About from "../components/Home/About";
import WhyChooseTalentConnect from "../components/Home/WhyChooseTalentConnect";
import OurServices from "../components/Home/OurService";
import SuccessStories from "../components/Home/SuccessStories";
import ReadyToTransform from "../components/Home/ReadyToTransform";

const Home = () => {
  return (
    <ChakraProvider>
      <Hero />
      <CampusToCubicle />
      <About />
      <WhyChooseTalentConnect />
      <OurServices />
      <SuccessStories />
      <ReadyToTransform /> 
      {/* Your other page components or routes can go here */}
    </ChakraProvider>
  );
};

export default Home;
