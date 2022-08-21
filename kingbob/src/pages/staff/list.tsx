import { ChevronDownIcon } from "@chakra-ui/icons";
import { VStack, Flex, Button, TableContainer, Table, Thead, Tr, Th, Tbody, Td, Text, Link, useColorModeValue, Alert, AlertIcon, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import Card from "@components/card/Card";
import AddOrEditStaff from "@components/staff/modal/AddOrEditStaff";
import AdminLayout from "@layouts/admin";
import NavLink from "next/link";

const StaffList = () => {
    const textColor = useColorModeValue("secondaryGray.900", "white");

    // Modal
    const { onOpen, modal, setPosition } = AddOrEditStaff();

    return (
        <AdminLayout title="Staff List">
            <VStack spacing={"20px"} align="stretch">
                <Flex align="center" justify={"space-between"}>
                    <Text color={textColor} fontSize="2xl" ms="24px" fontWeight="700">
                        Staff List
                    </Text>
                    <Button
                        colorScheme={"blue"}
                        onClick={() => {
                            setPosition({
                                region: "",
                                division: "",
                                vACC: "",
                                callsign: "",
                                position: "",
                                group: "",
                                assignedTo: "",
                            });
                            onOpen();
                        }}
                    >Add new position</Button>
                </Flex>

                <Card>
                    <TableContainer>
                        <Table variant='simple'>
                            <Thead>
                                <Tr>
                                    <Th>Callsign</Th>
                                    <Th>Position</Th>
                                    <Th>Assigned to</Th>
                                    <Th>Region</Th>
                                    <Th>Division</Th>
                                    <Th textTransform={'unset'}>vACC</Th>
                                    <Th></Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>ACCHKG1</Td>
                                    <Td>Hong Kong vACC Director</Td>
                                    <Td>
                                        <NavLink href="/profile/1000000" passHref>
                                            <Link color="brand.500">Kevin (1000000)</Link>
                                        </NavLink>
                                    </Td>
                                    <Td>APAC</Td>
                                    <Td>SEA</Td>
                                    <Td>HK</Td>
                                    <Td>
                                        <Menu>
                                            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                                                Actions
                                            </MenuButton>
                                            <MenuList>
                                                <MenuItem onClick={
                                                    () => {
                                                        setPosition({
                                                            region: "APAC",
                                                            division: "SEA",
                                                            vACC: "HK",
                                                            callsign: "ACCHKG1",
                                                            position: "Hong Kong vACC Director",
                                                            group: "vacc_director",
                                                            assignedTo: "1000000",
                                                        });
                                                        onOpen();
                                                    }
                                                }>Update/Assign</MenuItem>
                                                <MenuItem>Remove</MenuItem>
                                            </MenuList>
                                        </Menu>
                                    </Td>
                                </Tr>

                                <Tr>
                                    <Td>ACCHKG2</Td>
                                    <Td>Hong Kong vACC Deputy Director</Td>
                                    <Td>
                                        <NavLink href="/profile/1000000" passHref>
                                            <Link color="brand.500">Gru (1000005)</Link>
                                        </NavLink>
                                    </Td>
                                    <Td>APAC</Td>
                                    <Td>SEA</Td>
                                    <Td>HK</Td>
                                    <Td>
                                        <Menu>
                                            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                                                Actions
                                            </MenuButton>
                                            <MenuList>
                                                <MenuItem onClick={
                                                    () => {
                                                        setPosition({
                                                            region: "APAC",
                                                            division: "SEA",
                                                            vACC: "HK",
                                                            callsign: "ACCHKG2",
                                                            position: "Hong Kong vACC Deputy Director",
                                                            group: "vacc_deputy_director",
                                                            assignedTo: "1000005",
                                                        });
                                                        onOpen();
                                                    }
                                                }>Update/Assign</MenuItem>
                                                <MenuItem>Remove</MenuItem>
                                            </MenuList>
                                        </Menu>
                                    </Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Card>
            </VStack>

            {/* Modal */}
            {modal}
        </AdminLayout>
    );
};

export default StaffList;