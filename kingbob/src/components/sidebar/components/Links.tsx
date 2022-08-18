import NavLink from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

// chakra imports
import {
  Box,
  Flex,
  HStack,
  Icon,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Menu } from "types/menu";
import { ChevronDownIcon, CloseIcon } from "@chakra-ui/icons";

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
            <Text
              ml={level * 5}
              fontSize={"md"}
              color={activeColor}
              fontWeight="bold"
              ps="10px"
              py="10px"
              key={index}
              onClick={() => { selectMenu(route) }}
              style={{ cursor: "pointer" }}
            >
              {route.name}
              {activeMenu.includes(route) ? <CloseIcon boxSize={2} style={{ marginLeft: "10px" }} /> : <ChevronDownIcon style={{ marginLeft: "10px" }} />}
            </Text>
            {activeMenu.includes(route) && createLinks(route.items, level + 1)}
          </span>
        );
      } else if (route.layout === "/admin" || route.layout === "/auth" || route.layout === "/rtl") {
        return (
          <NavLink key={index} href={route.layout + route.path} passHref>
            <Link >
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
