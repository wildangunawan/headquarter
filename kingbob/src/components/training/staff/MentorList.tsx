import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Text,
  useColorModeValue,
  Link,
  Button,
  Flex,
  Checkbox,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import Card from "@components/card/Card";
import NextLink from "next/link";
import { useState } from "react";
import PromoteAsMentor from "../modal/PromoteAsMentor";

const MentorList = () => {
  const textColor = useColorModeValue("secondaryGray.900", "white");

  // State
  const [showMePls, setShowMePls] = useState(false);

  // Modal
  const { onOpen, modal, setMemberData, setPermissions } = PromoteAsMentor();

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
            Instructor/Mentor List
          </Text>
          <Button colorScheme={"blue"} onClick={() => setShowMePls(true)}>
            Show example pls.
          </Button>
        </Flex>

        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th rowSpan={2}>Name</Th>
                <Th rowSpan={2}>Rating</Th>
                <Th rowSpan={2} textTransform={"inherit"}>
                  vACC / Division
                </Th>
                <Th colSpan={3}>Can mentor</Th>
                <Th rowSpan={2}>Can issue solo</Th>
                <Th rowSpan={2}>Actions</Th>
              </Tr>
              <Tr>
                <Th>S1</Th>
                <Th>S2</Th>
                <Th>S3</Th>
              </Tr>
            </Thead>
            <Tbody>
              {showMePls && (
                <>
                  <Tr>
                    <Td>
                      <Link
                        as={NextLink}
                        href="/profile/1000000"
                        color="brand.500"
                      >
                        Kevin (1000000)
                      </Link>
                    </Td>
                    <Td>Enroute Controller (C1)</Td>
                    <Td>Indonesia vACC</Td>
                    <Td>
                      <Checkbox isChecked />
                    </Td>
                    <Td>
                      <Checkbox isChecked />
                    </Td>
                    <Td>
                      <Checkbox isChecked />
                    </Td>
                    <Td>
                      <Checkbox isChecked />
                    </Td>
                    <Td>
                      <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                          Actions
                        </MenuButton>
                        <MenuList>
                          <MenuItem
                            onClick={() => {
                              setMemberData({
                                id: "1000000",
                                name: "Kevin",
                              });
                              setPermissions({
                                s1: true,
                                s2: true,
                                s3: true,
                                solo: true,
                              });
                              onOpen();
                            }}
                          >
                            Update permissions
                          </MenuItem>
                          <MenuItem>Remove from mentor list</MenuItem>
                        </MenuList>
                      </Menu>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <Link
                        as={NextLink}
                        href="/profile/1000001"
                        color="brand.500"
                      >
                        Stuart (1000001)
                      </Link>
                    </Td>
                    <Td>Enroute Controller (C1)</Td>
                    <Td>Malaysia vACC</Td>
                    <Td>
                      <Checkbox isChecked />
                    </Td>
                    <Td>
                      <Checkbox isChecked={false} />
                    </Td>
                    <Td>
                      <Checkbox isChecked={false} />
                    </Td>
                    <Td>
                      <Checkbox isChecked={false} />
                    </Td>
                    <Td>
                      <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                          Actions
                        </MenuButton>
                        <MenuList>
                          <MenuItem
                            onClick={() => {
                              setMemberData({
                                id: "1000001",
                                name: "Stuart",
                              });
                              setPermissions({
                                s1: true,
                                s2: false,
                                s3: false,
                                solo: false,
                              });
                              onOpen();
                            }}
                          >
                            Update permissions
                          </MenuItem>
                          <MenuItem>Remove from mentor list</MenuItem>
                        </MenuList>
                      </Menu>
                    </Td>
                  </Tr>
                </>
              )}
            </Tbody>
          </Table>
        </TableContainer>
      </Card>

      {/* Modal */}
      {modal}
    </>
  );
};

export default MentorList;
