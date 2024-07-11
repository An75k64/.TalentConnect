import React from "react";
import { ChakraProvider, Container } from "@chakra-ui/react";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <ChakraProvider>
      <Container maxW="container.xl">
        <Header />
        {/* Your other page components or routes can go here */}
      </Container>
    </ChakraProvider>
  );
};

export default App;
