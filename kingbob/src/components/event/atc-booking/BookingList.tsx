import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Text,
  Box,
  useColorModeValue,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Flex,
} from "@chakra-ui/react";
import Card from "@components/card/Card";
import NextLink from "next/link";
import CreateBooking from "./modal/CreateBooking";

const BookingList = () => {
  const textColor = useColorModeValue("secondaryGray.900", "white");

  // Modal
  const { onOpen, modal } = CreateBooking();

  return (
    <>
      <Card>
        <Flex>
          <Text
            me="auto"
            color={textColor}
            fontSize="xl"
            fontWeight="700"
            lineHeight="100%"
            px="15px"
            py="10px"
          >
            Requested bookings
          </Text>
          <Button colorScheme={"blue"} onClick={onOpen}>
            Request for a position
          </Button>
        </Flex>

        <Box overflowX={"auto"}>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Position</Th>
                <Th>Controller</Th>
                <Th>Start</Th>
                <Th>End</Th>
                <Th maxW={"20ch"}>Status</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>4</Td>
                <Td>WIII_TWR</Td>
                <Td>
                  <Link as={NextLink} href="/profile/1000000" color="brand.500">
                    Kevin (1000000)
                  </Link>
                </Td>
                <Td>18 Aug 2022 12:00</Td>
                <Td>18 Aug 2022 14:00</Td>
                <Td bgColor="red.500" color="red.50" maxW={"20ch"}>
                  Pending
                </Td>
                <Td>
                  <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                      Actions
                    </MenuButton>
                    <MenuList>
                      <MenuItem>
                        Approve (keep requested position and time)
                      </MenuItem>
                      <MenuItem>Approve & change position or time</MenuItem>
                      <MenuItem>Reject request</MenuItem>
                    </MenuList>
                  </Menu>
                </Td>
              </Tr>
              <Tr>
                <Td>4</Td>
                <Td>WIII_TWR</Td>
                <Td>
                  <Link as={NextLink} href="/profile/1000000" color="brand.500">
                    Kevin (1000000)
                  </Link>
                </Td>
                <Td>18 Aug 2022 12:00</Td>
                <Td>18 Aug 2022 14:00</Td>
                <Td bgColor="green.500" textColor="green.50" maxW={"20ch"}>
                  Approved by Gru (1000005)
                </Td>
                <Td>
                  <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                      Actions
                    </MenuButton>
                    <MenuList>
                      <MenuItem>Change position/time & re-approve</MenuItem>
                      <MenuItem>Cancel approval</MenuItem>
                    </MenuList>
                  </Menu>
                </Td>
              </Tr>
              <Tr>
                <Td>4</Td>
                <Td>WIII_TWR</Td>
                <Td>
                  <Link as={NextLink} href="/profile/1000000" color="brand.500">
                    Kevin (1000000)
                  </Link>
                </Td>
                <Td>18 Aug 2022 12:00</Td>
                <Td>18 Aug 2022 14:00</Td>
                <Td bgColor="teal.500" color="teal.50" maxW={"20ch"}>
                  Approved with changes by Gru (1000005)
                </Td>
                <Td>
                  <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                      Actions
                    </MenuButton>
                    <MenuList>
                      <MenuItem>Change position/time & re-approve</MenuItem>
                      <MenuItem>Cancel approval</MenuItem>
                    </MenuList>
                  </Menu>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </Card>

      {/* Modal */}
      {modal}
    </>
  );
};

export default BookingList;
