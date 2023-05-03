import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Link,
  VStack,
  Flex,
  Button,
  Alert,
  AlertIcon,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  useColorModeValue,
  Text,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import Card from "@components/card/Card";
import CreatevACCTransferRequest from "@components/staff/modal/CreatevACCTransferRequest";
import AdminLayout from "@layouts/admin";
import NextLink from "next/link";
import { ReactElement } from "react";

const VACCTransfer = () => {
  const textColor = useColorModeValue("secondaryGray.900", "white");

  // Modal
  const { onOpen, modal } = CreatevACCTransferRequest();

  return (
    <>
      <VStack spacing={"20px"} align="stretch">
        <Flex align="center" justify={"space-between"}>
          <Text color={textColor} fontSize="2xl" ms="24px" fontWeight="700">
            vACC Transfer List
          </Text>
          <Button colorScheme={"blue"} onClick={onOpen}>
            Create new request
          </Button>
        </Flex>

        <Alert status="info">
          <AlertIcon />
          Only vACC Director, Deputy Director, or Training Director or in cases
          of some vACCs, the membership director may request a transfer.
        </Alert>

        <Card>
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Type</Th>
                  <Th>Name</Th>
                  <Th>CID</Th>
                  <Th>To</Th>
                  <Th>Requested by</Th>
                  <Th>Status</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>1 - new ATC</Td>
                  <Td>
                    <Link
                      href="/profile/1000000"
                      as={NextLink}
                      color="brand.500"
                    >
                      Kevin
                    </Link>
                  </Td>
                  <Td>1000000</Td>
                  <Td>Indonesia vACC</Td>
                  <Td>
                    <Link
                      href="/profile/1000005"
                      as={NextLink}
                      color="brand.500"
                    >
                      Gru (1000005)
                    </Link>
                  </Td>
                  <Td bg="orange" color="white">
                    Pending
                  </Td>
                  <Td>
                    <Menu>
                      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                        Actions
                      </MenuButton>
                      <MenuList>
                        <MenuItem>Cancel (shown for vACC staff only)</MenuItem>
                        <MenuItem>Done</MenuItem>
                        <MenuItem>Reject</MenuItem>
                      </MenuList>
                    </Menu>
                  </Td>
                </Tr>
                <Tr>
                  <Td>2 - have rating</Td>
                  <Td>
                    <Link
                      href="/profile/1000002"
                      as={NextLink}
                      color="brand.500"
                    >
                      King Bob
                    </Link>
                  </Td>
                  <Td>1000002</Td>
                  <Td>Malaysia vACC</Td>
                  <Td>
                    <Link
                      href="/profile/1000005"
                      as={NextLink}
                      color="brand.500"
                    >
                      Gru (1000005)
                    </Link>
                  </Td>
                  <Td bg="orange" color="white">
                    Pending
                  </Td>
                  <Td>
                    <Menu>
                      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                        Actions
                      </MenuButton>
                      <MenuList>
                        <MenuItem>Cancel (shown for vACC staff only)</MenuItem>
                        <MenuItem>View reason</MenuItem>
                        <MenuItem>Done</MenuItem>
                        <MenuItem>Reject</MenuItem>
                      </MenuList>
                    </Menu>
                  </Td>
                </Tr>
                <Tr>
                  <Td>2 - have rating</Td>
                  <Td>
                    <Link
                      href="/profile/1000002"
                      as={NextLink}
                      color="brand.500"
                    >
                      King Bob
                    </Link>
                  </Td>
                  <Td>1000002</Td>
                  <Td>Malaysia vACC</Td>
                  <Td>
                    <Link
                      href="/profile/1000005"
                      as={NextLink}
                      color="brand.500"
                    >
                      Gru (1000005)
                    </Link>
                  </Td>
                  <Td bg="green" color="white">
                    Done
                  </Td>
                  <Td></Td>
                </Tr>
                <Tr>
                  <Td>2 - have rating</Td>
                  <Td>
                    <Link
                      href="/profile/1000002"
                      as={NextLink}
                      color="brand.500"
                    >
                      King Bob
                    </Link>
                  </Td>
                  <Td>1000002</Td>
                  <Td>Malaysia vACC</Td>
                  <Td>
                    <Link
                      href="/profile/1000005"
                      as={NextLink}
                      color="brand.500"
                    >
                      Gru (1000005)
                    </Link>
                  </Td>
                  <Td bg="red" color="white">
                    Rejected
                  </Td>
                  <Td></Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Card>
      </VStack>

      {/* Modal */}
      {modal}
    </>
  );
};

VACCTransfer.getLayout = (page: ReactElement) => (
  <AdminLayout title="vACC Transfer">{page}</AdminLayout>
);
export default VACCTransfer;
