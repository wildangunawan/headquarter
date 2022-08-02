import { Icon } from "@chakra-ui/react";
import { Menu } from "types/menu";
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
  MdSchool,
  MdSupportAgent,
  MdLayers
} from "react-icons/md";

/**
 * Variable below consists routes that's shown in the sidebar menu
 * 
 * How to write a new one? Follow the interface above.
 * Required items:
 *  - name
 * 
 * Required if dropdown/category == false:
 *  - layout
 *  - path
 * 
 * Required if dropdown/category == true:
 *  - items (which consist of another Menu type object)
 */
const routes: Menu[] = [
  {
    name: "Dashboard",
    layout: "/admin",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    path: "/default",
  },
  {
    name: "Admin",
    dropdown: true,
    items: [
      {
        name: "Main Dashboard",
        layout: "/admin",
        path: "/default",
      },
      {
        name: "NFT Marketplace",
        layout: "/admin",
        path: "/marketplace",
      },
    ],
  },
  {
    name: "Membership",
    dropdown: true,
    items: [
      {
        name: "Main Dashboard",
        layout: "/admin",
        path: "/default",
        icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
      },
      {
        name: "NFT Marketplace",
        layout: "/admin",
        path: "/marketplace",
        icon: (
          <Icon
            as={MdOutlineShoppingCart}
            width='20px'
            height='20px'
            color='inherit'
          />
        ),
      },
    ],
  },
  {
    name: "vACC Staff",
    dropdown: true,
    items: [
      {
        name: "Data Tables",
        layout: "/admin",
        icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
        path: "/datatables",
      },
      {
        name: "Profile",
        layout: "/admin",
        path: "/profile",
        icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
      },
      {
        name: "Sign In",
        layout: "/auth",
        path: "/sign-in",
        icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
      },
    ],
  },
  {
    name: "Divisional Staff",
    dropdown: true,
    items: [
      {
        name: "Data Tables",
        layout: "/admin",
        icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
        path: "/datatables",
      },
      {
        name: "Profile",
        layout: "/admin",
        path: "/profile",
        icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
      },
      {
        name: "Sign In",
        layout: "/auth",
        path: "/sign-in",
        icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
      },
    ],
  },
  {
    name: "Regional Staff",
    dropdown: true,
    items: [
      {
        name: "General",
        dropdown: true,
        items: [
          {
            name: "Data Tables",
            layout: "/admin",
            icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
            path: "/datatables",
          },
          {
            name: "Profile",
            layout: "/admin",
            path: "/profile",
            icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
          },
          {
            name: "Sign In",
            layout: "/auth",
            path: "/sign-in",
            icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
          },
        ],
      },
      {
        name: "Policy Center",
        dropdown: true,
        items: [
          {
            name: "Data Tables",
            layout: "/admin",
            icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
            path: "/datatables",
          },
          {
            name: "Profile",
            layout: "/admin",
            path: "/profile",
            icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
          },
          {
            name: "Sign In",
            layout: "/auth",
            path: "/sign-in",
            icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
          },
        ],
      },
      {
        name: "Tasks",
        dropdown: true,
        items: [
          {
            name: "Data Tables",
            layout: "/admin",
            icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
            path: "/datatables",
          },
          {
            name: "Profile",
            layout: "/admin",
            path: "/profile",
            icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
          },
          {
            name: "Sign In",
            layout: "/auth",
            path: "/sign-in",
            icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
          },
        ],
      },
    ],
  },
  {
    name: "Training System - Request",
    layout: "/admin",
    icon: <Icon as={MdSchool} width='20px' height='20px' color='inherit' />,
    path: "/training/request",
  },
  {
    name: "Training System - ATC Rated",
    layout: "/admin",
    icon: <Icon as={MdSchool} width='20px' height='20px' color='inherit' />,
    path: "/training",
  },
  {
    name: "Support Center",
    layout: "/admin",
    icon: <Icon as={MdSupportAgent} width='20px' height='20px' color='inherit' />,
    path: "/support",
  },
  {
    name: "Divisions/vACCs",
    layout: "/admin",
    icon: <Icon as={MdLayers} width='20px' height='20px' color='inherit' />,
    path: "/default",
  },
];

export default routes;
