import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  Box,
} from "@chakra-ui/react";

export default function About() {
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }} mt={10}>
      <Flex flex={1} align={"center"} justify={"flex-start"} paddingLeft={8}>
        <Box
          borderWidth={2}
          borderColor={"blue.400"}
          borderRadius={"lg"}
          overflow={"hidden"}
          width="80%"
          maxHeight="50vh" // Adjust this value as needed
        >
          <Box
            position="relative"
            overflow="hidden"
            transition="transform 0.5s ease"
            _hover={{ transform: "scale(1.1)" }}
          >
            <Image
              alt={"About Us Image"}
              objectFit={"cover"}
              height="100%" // Keep the height at 100% to fit the container
              maxHeight="100%" // Prevent exceeding the container's height
              width="100%" // Ensure the image takes full width
              src={
                "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              }
            />
          </Box>
        </Box>
      </Flex>
      <Flex p={8} flex={1} align={"center"} justify={"flex-start"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: useBreakpointValue({ base: "20%", md: "30%" }),
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "blue.400",
                zIndex: -1,
              }}
            >
              About Us
            </Text>
            <br />
            <Text color={"blue.400"} as={"span"}>
              At TalentConnect,
            </Text>
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            We are dedicated to bridging the gap between talented individuals
            and the dynamic workforce. Our mission is to provide top-notch
            career services that empower individuals to achieve their
            professional aspirations while supporting organizations in building
            their dream teams.
          </Text>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            With a commitment to excellence, innovation, and integrity,
            TalentConnect is your trusted partner in career success.
          </Text>
       {/*  <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
              rounded={"full"}
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
            >
              Get Started
            </Button>
            <Button rounded={"full"}>Learn More</Button>
          </Stack> */}
        </Stack>
      </Flex>
    </Stack>
  );
}
