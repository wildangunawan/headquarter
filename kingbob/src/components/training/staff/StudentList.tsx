import { ChevronDownIcon } from '@chakra-ui/icons';
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
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
} from '@chakra-ui/react'
import Card from "@components/card/Card";
import NavLink from "next/link"
import { useState } from 'react';
import IssueSolo from '../modal/IssueSolo';

const StudentList = () => {
    const textColor = useColorModeValue("secondaryGray.900", "white");

    // State
    const [showMePls, setShowMePls] = useState(false);

    // Modal
    const { onOpen: openSoloModal, modal: SoloModal, setStudentData } = IssueSolo();

    // Helper
    const openModal = (studentData: any, type: string) => {
        switch (type) {
            case "solo":
                setStudentData(studentData);
                openSoloModal();
                break;
        }
    }

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
                        px="15px" py="10px"
                    >
                        Student List
                    </Text>
                    <Button colorScheme={"blue"} onClick={() => setShowMePls(true)}>Show example pls.</Button>
                </Flex>

                <TableContainer>
                    <Table variant='simple'>
                        <Thead>
                            <Tr>
                                <Th>Name (CID)</Th>
                                <Th>Current Rating</Th>
                                <Th>Solo</Th>
                                <Th>Mentor</Th>
                                <Th>Actions</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                showMePls
                                && <>
                                    <Tr>
                                        <Td>
                                            <NavLink href="/admin/profile/1000000" passHref>
                                                <Link color="brand.500">Kevin (1000000)</Link>
                                            </NavLink>
                                        </Td>
                                        <Td>Student 1 (S1)</Td>
                                        <Td>WIII_TWR until 30 Aug 2022</Td>
                                        <Td>
                                            <NavLink href="/admin/profile/1000005" passHref>
                                                <Link color="brand.500">Gru (1000005)</Link>
                                            </NavLink>
                                        </Td>
                                        <Td>
                                            <Menu>
                                                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                                                    Actions
                                                </MenuButton>
                                                <MenuList>
                                                    <MenuItem>
                                                        <NavLink href="/admin/training/1000000" passHref>
                                                            <Link>View training record</Link>
                                                        </NavLink>
                                                    </MenuItem>
                                                    <MenuItem
                                                        onClick={() => openModal({
                                                            id: "1000000",
                                                            name: "Kevin",
                                                        }, 'solo')}
                                                    >Issue solo</MenuItem>
                                                </MenuList>
                                            </Menu>
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td>
                                            <NavLink href="/admin/profile/1000001" passHref>
                                                <Link color="brand.500">Stuart (1000001)</Link>
                                            </NavLink>
                                        </Td>
                                        <Td>Student 2 (S2)</Td>
                                        <Td>-</Td>
                                        <Td>-</Td>
                                        <Td>
                                            <Menu>
                                                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                                                    Actions
                                                </MenuButton>
                                                <MenuList>
                                                    <MenuItem>
                                                        <NavLink href="/admin/training/1000001" passHref>
                                                            <Link>View training record</Link>
                                                        </NavLink>
                                                    </MenuItem>
                                                    <MenuItem
                                                        onClick={() => openModal({
                                                            id: "1000001",
                                                            name: "Stuart",
                                                        }, 'solo')}
                                                    >Issue solo</MenuItem>
                                                </MenuList>
                                            </Menu>
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td>
                                            <NavLink href="/admin/profile/1000002" passHref>
                                                <Link color="brand.500">King Bob (1000002)</Link>
                                            </NavLink>
                                        </Td>
                                        <Td>Student 1 (S1)</Td>
                                        <Td>-</Td>
                                        <Td>
                                            <NavLink href="/admin/profile/1000005" passHref>
                                                <Link color="brand.500">Gru (1000005)</Link>
                                            </NavLink>
                                        </Td>
                                        <Td>
                                            <Menu>
                                                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                                                    Actions
                                                </MenuButton>
                                                <MenuList>
                                                    <MenuItem>
                                                        <NavLink href="/admin/training/1000002" passHref>
                                                            <Link>View training record</Link>
                                                        </NavLink>
                                                    </MenuItem>
                                                    <MenuItem
                                                        onClick={() => openModal({
                                                            id: "1000002",
                                                            name: "King Bob",
                                                        }, 'solo')}
                                                    >Issue solo</MenuItem>
                                                </MenuList>
                                            </Menu>
                                        </Td>
                                    </Tr>
                                </>
                            }
                        </Tbody>
                    </Table>
                </TableContainer>
            </Card>

            {/* Show modal */}
            {SoloModal}
        </>
    );
};

export default StudentList;