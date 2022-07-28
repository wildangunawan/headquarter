import { Icon } from "@chakra-ui/react";
import { Menu } from "types/menu";
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
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
    name: "Tes aja",
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
    name: "Tes aja 2",
    category: true,
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
];

export default routes;
