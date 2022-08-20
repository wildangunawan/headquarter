import NavLink from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

// chakra imports
import {
  Box,
  Collapse,
  Flex,
  HStack,
  Icon,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Menu } from "types/menu";
import { ChevronDownIcon, ChevronUpIcon, CloseIcon, ExternalLinkIcon } from "@chakra-ui/icons";

export function SidebarLinks({ routes }: { routes: Menu[] }) {
  //   Chakra color mode
  let location = useRouter();
  let activeColor = useColorModeValue("gray.700", "white");
  let inactiveColor = useColorModeValue(
    "secondaryGray.600",
    "secondaryGray.600"
  );
  let activeIcon = useColorModeValue("brand.500", "white");
  let textColor = useColorModeValue("secondaryGray.500", "white");
  let brandColor = useColorModeValue("brand.500", "brand.400");

  // State
  const [activeMenu, setActiveMenu] = useState<Menu[]>([]);

  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName: string) => {
    return location.pathname === routeName;
  };

  const selectMenu = (selectedMenu: Menu) => {
    if (activeMenu.includes(selectedMenu)) {
      setActiveMenu(activeMenu.filter(menu => menu !== selectedMenu))
    } else {
      setActiveMenu(prevActiveMenu => [...prevActiveMenu, selectedMenu]);
    }
  }

  // this function creates the links from the secondary accordions (for example auth -> sign-in -> default)
  const createLinks: any = (routes: Menu[], level: number) => {
    return routes.map((route: Menu, index: number) => {
      if (route.category || route.dropdown) {
        return (
          <span key={index}>
            <Flex
              align={"center"}
              justify={"space-between"}
              cursor="pointer"
              onClick={() => { selectMenu(route) }}
              color={textColor}
            >
              <Text
                ms={level * 5}
                fontSize={"md"}
                ps="10px"
                py="10px"
                key={index}
              >
                {route.name}
              </Text>

              <ChevronDownIcon
                me={5}
                style={{
                  transform: activeMenu.includes(route) ? "rotate(-180deg)" : "rotate(0deg)",
                  transition: "transform 0.2s ease-in-out",
                }}
              />
            </Flex>

            <Collapse in={activeMenu.includes(route)} animateOpacity>
              {createLinks(route.items, level + 1)}
            </Collapse>
          </span>
        );
      } else if (route.external) {
        return (
          <NavLink
            key={index}
            href={route.link}
            passHref
          >
            <Link isExternal>
              <HStack
                ml={level * 5}
                spacing="26px"
                py="5px"
                ps="10px"
              >
                <Flex w="100%" align="center" justify="center" gap={2}>
                  {
                    route.icon
                    && <Icon
                      as={route.icon}
                      width='20px'
                      height='20px'
                      color={textColor}
                    />
                  }

                  <Text
                    me="auto"
                    color={textColor}
                    fontWeight={"normal"}
                  >
                    {route.name}
                    {route.external && <ExternalLinkIcon mx='5px' />}
                  </Text>

                </Flex>

                <Box
                  h="36px"
                  w="4px"
                  bg={"transparent"}
                  borderRadius="5px"
                />
              </HStack>
            </Link>
          </NavLink>
        );
      } else if (route.layout || route.layout == '') {
        return (
          <NavLink
            key={index}
            href={route.layout + route.path}
            passHref
          >
            <Link isExternal={route.external}>
              <HStack
                ml={level * 5}
                spacing={
                  activeRoute(route.layout + route.path.toLowerCase()) ? "22px" : "26px"
                }
                py="5px"
                ps="10px"
              >
                <Flex w="100%" align="center" justify="center" gap={2}>
                  {
                    route.icon
                    && <Icon
                      as={route.icon}
                      width='20px'
                      height='20px'
                      color={
                        activeRoute(route.layout + route.path.toLowerCase())
                          ? activeIcon
                          : textColor
                      }
                    />
                  }

                  <Text
                    me="auto"
                    color={
                      activeRoute(route.layout + route.path.toLowerCase())
                        ? activeColor
                        : textColor
                    }
                    fontWeight={
                      activeRoute(route.layout + route.path.toLowerCase())
                        ? "bold"
                        : "normal"
                    }
                  >
                    {route.name}
                  </Text>

                  {route.external && <ExternalLinkIcon mx='2px' />}
                </Flex>

                <Box
                  h="36px"
                  w="4px"
                  bg={
                    activeRoute(route.layout + route.path.toLowerCase())
                      ? brandColor
                      : "transparent"
                  }
                  borderRadius="5px"
                />
              </HStack>
            </Link>
          </NavLink>
        );
      }
    });
  };
  //  BRAND
  return createLinks(routes, 0);
}

export default SidebarLinks;
