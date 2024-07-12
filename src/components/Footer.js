import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs"; // Import LinkedIn icon
import logo from "../assets/images/logo.png"; // Adjust the path if needed

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg="transparent"
      borderRadius="md"
      _hover={{
        bg: useColorModeValue("pink.300", "pink.700"),
      }}
      as="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.800")}
      color={useColorModeValue("gray.700", "gray.200")}
      py={10}
    >
      <Container maxW="6xl">
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 4 }}
          spacing={10}
          textAlign="left"
        >
          <Stack spacing={4}>
            <img
              src={logo}
              alt="Talent Connect Logo"
              style={{ height: "60px", width: "70px" }}
            />
            <Text fontSize="sm" color="black">
              © 2023 Talent Connect. All rights reserved
            </Text>
            <Text fontWeight="bold">Follow Us</Text>
            <Stack direction="row" spacing={4}>
              <SocialButton label="Follow us on Instagram" href="#">
                <FaInstagram />
              </SocialButton>
              <SocialButton label="Follow us on LinkedIn" href="#">
                <BsLinkedin />
              </SocialButton>
              <SocialButton label="Follow us on Twitter" href="#">
                <FaTwitter />
              </SocialButton>
              <SocialButton label="Subscribe to us on YouTube" href="#">
                <FaYoutube />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack spacing={4}>
            <Text fontWeight="bold" as="a" href="/home">
              Home
            </Text>
            <Text fontWeight="bold" as="a" href="/services">
              Services
            </Text>
            <Stack spacing={1}>
              <Text as="a" href="/services#oncampus">
                OnCampus
              </Text>
              <Text as="a" href="/services#offcampus">
                OffCampus
              </Text>
              <Text as="a" href="/services#seminar">
                Seminar
              </Text>
              <Text as="a" href="/services#counselling">
                Counselling
              </Text>
              <Text as="a" href="/services#careercraft">
                CareerCraft
              </Text>
              <Text as="a" href="/services#workforce">
                Workforce Provider [Staffing Solution]
              </Text>
            </Stack>
          </Stack>
          <Stack spacing={4}>
            <Text fontWeight="bold" as="a" href="/jobs">
              Jobs
            </Text>
            <Stack spacing={1}>
              <Text as="a" href="/jobs#current-openings">
                Current Openings
              </Text>
              <Text as="a" href="/jobs#post-resume">
                Post Your Resume
              </Text>
            </Stack>
            <Stack spacing={4}>
              <Text fontWeight="bold" as="a" href="/employer">
                Employer
              </Text>
              <Text fontWeight="bold" as="a" href="/college">
                College
              </Text>
            </Stack>
          </Stack>
          <Stack spacing={4}>
            <Text fontWeight="bold" as="a" href="/campus-to-cubicle">
              Campus to Cubicle
            </Text>
            <Stack spacing={4}>
              <Text fontWeight="bold" as="a" href="/affiliate">
                Affiliate
              </Text>
              <Text fontWeight="bold" as="a" href="/contact">
                Contact Us
              </Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
