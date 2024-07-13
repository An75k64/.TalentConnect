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

export default function CampusToCubicle() {
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }} mt={10}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
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
              Campus to Cubicle
            </Text>
            <br />
            <Text color={"blue.400"} as={"span"}>
              Transforming Recruitment
            </Text>
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            TalentConnect, the trailblazing tech startup redefining the
            campus-to-cubicle journey. We transform campus hiring by integrating
            company requirements into our tech platform to engage with colleges.
            Through our personalized approach, we ensure smooth and efficient
            recruitment campaigns.
          </Text>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            Talent Connect takes full responsibility for conducting the
            recruitment process on behalf of our clients. We provide on-demand
            training to freshly hired candidates, ensuring a seamless transition
            from campus to cubicle. This innovative approach revolutionizes the
            transition of fresh graduates into professional roles.
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
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
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1} align={"center"} justifyContent={"center"} pt={10}>
        <Box
          borderWidth={2}
          borderColor={"blue.400"}
          borderRadius={"lg"}
          overflow={"hidden"}
          width="80%"
          maxHeight="50vh"
        >
          <Box
            position="relative"
            overflow="hidden"
            transition="transform 0.5s ease" // Added transition for smooth effect
            _hover={{ transform: "scale(1.1)" }}
          >
            <Image
              alt={"Campus to Cubicle Image"}
              objectFit={"cover"}
              height="100%"
              src={
                "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              }
            />
          </Box>
        </Box>
      </Flex>
    </Stack>
  );
}
