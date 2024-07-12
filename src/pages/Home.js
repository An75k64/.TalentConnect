import React from "react";
import { ChakraProvider, Container } from "@chakra-ui/react";
import Header from "../../src/components/Header/Header";
import Footer from "../../src/components/Footer";

const Home = () => {
  return (
    <ChakraProvider>
      <Container maxW="container.xl">
        <Header />
        <Footer />
        {/* Your other page components or routes can go here */}
      </Container>
    </ChakraProvider>
  );
};

export default Home;
