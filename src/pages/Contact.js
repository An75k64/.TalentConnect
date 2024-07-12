import React from "react";
import { ChakraProvider, Container } from "@chakra-ui/react";
import ContactForm from "../../src/components/Contact/ContactForm";

const Contact = () => {
  return (
    <ChakraProvider>
      <Container maxW="container.xl">
        <ContactForm />

        {/* Your other page components or routes can go here */}
      </Container>
    </ChakraProvider>
  );
};

export default Contact;
