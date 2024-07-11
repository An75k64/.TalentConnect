import React from "react";
import { Text, useColorModeValue } from "@chakra-ui/react";

const Logo = () => (
  <Text
    fontSize="lg"
    fontWeight="bold"
    color={useColorModeValue("gray.800", "white")}
  >
    TalentConnect
  </Text>
);

export default Logo;
