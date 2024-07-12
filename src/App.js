import React from "react";
import { ChakraProvider, Container } from "@chakra-ui/react";
import Home from "./pages/Home";

const App = () => {
  return (
    <ChakraProvider>
      <Container maxW="container.xl">
        <Home />
        {/* Your other page components or routes can go here */}
      </Container>
    </ChakraProvider>
  );
};

export default App;
