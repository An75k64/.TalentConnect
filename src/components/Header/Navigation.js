import React from "react";
import {
  Box,
  Flex,
  Text,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";

// Define your navigation items here
const NAV_ITEMS = [
  {
    label: "Service",
    children: [
      { label: "OnCampus", href: "/services#oncampus" },
      { label: "Offcampus", href: "/services#offcampus" },
      { label: "Seminar", href: "/services#seminar" },
      { label: "Counselling", href: "/services#counseling" },
      { label: "CareerCraft", href: "/services#careercraft" },
      {
        label: "Workforce provider",
        subLabel: "Staffing solution",
        href: "/services#workforce",
      },
    ],
  },
  {
    label: "Jobs",
    children: [
      { label: "Current opening", href: "/jobs" },
      { label: "Post your Resume", href: "/jobs#post-resume" },
    ],
  },
  { label: "Employer", href: "/employer" },
  { label: "College", href: "/college" },
  { label: "CampusToCubicle", href: "/campus-to-cubicle" },
  { label: "Affiliate", href: "/affiliate" },
  { label: "Contact us", href: "/contact" }, // Update this line
];


const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          {navItem.children ? (
            <Popover trigger={"hover"} placement={"bottom-start"}>
              <PopoverTrigger>
                <Box
                  as="a"
                  p={2}
                  href={navItem.href ?? "#"}
                  fontSize={"sm"}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: "none",
                    color: linkHoverColor,
                  }}
                >
                  {navItem.label}
                </Box>
              </PopoverTrigger>

              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            </Popover>
          ) : (
            <Box
              as="a"
              href={navItem.href ?? "#"}
              p={2}
              fontSize={"sm"}
              fontWeight={500}
              color={linkColor}
            >
              {navItem.label}
            </Box>
          )}
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => (
  <Box
    as="a"
    href={href}
    role={"group"}
    display={"block"}
    p={2}
    rounded={"md"}
    _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
  >
    <Stack direction={"row"} align={"center"}>
      <Box>
        <Text transition={"all .3s ease"} fontWeight={500}>
          {label}
        </Text>
        {subLabel && <Text fontSize={"sm"}>{subLabel}</Text>}
      </Box>
      <Flex
        transition={"all .3s ease"}
        transform={"translateX(-10px)"}
        opacity={0}
        justify={"flex-end"}
        align={"center"}
        flex={1}
      >
        <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
      </Flex>
    </Stack>
  </Box>
);

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();
  const textColor = useColorModeValue("gray.600", "gray.200");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href ?? "#"}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text fontWeight={600} color={textColor}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={borderColor}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Box as="a" key={child.label} py={2} href={child.href}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const MobileNav = () => {
  const bg = useColorModeValue("white", "gray.800");

  return (
    <Stack bg={bg} p={4} display={{ md: "none" }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const Navigation = () => {
  return (
    <>
      <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
        <Flex display={{ base: "none", md: "flex" }} ml={10}>
          <DesktopNav />
        </Flex>
      </Flex>

      {/* Mobile navigation */}
      <MobileNav />
    </>
  );
};

export { DesktopNav, MobileNav };
export default Navigation;
