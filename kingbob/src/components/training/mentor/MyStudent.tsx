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
    ButtonGroup,
    Flex,
    Center,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
} from '@chakra-ui/react'
import Card from "@components/card/Card";
import NavLink from "next/link"
import { useState } from 'react';
import IssueSolo from '../modal/IssueSolo';

const MyStudent = () => {
    const textColor = useColorModeValue("secondaryGray.900", "white");

    // State
    const [showMePls, setShowMePls] = useState(false);

    // Modal
    const { onOpen, modal, setStudentData } = IssueSolo();

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
                        My Student
                    </Text>
                    <Button colorScheme={"blue"} onClick={() => setShowMePls(true)}>Show example pls.</Button>
                </Flex>

                {
                    showMePls
                        ? <TableContainer>
                            <Table variant='simple'>
                                <Thead>
                                    <Tr>
                                        <Th>Name (CID)</Th>
                                        <Th>Rating</Th>
                                        <Th>Solo Validation</Th>
                                        <Th>Actions</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>
                                            <NavLink href="/profile/1000000" passHref>
                                                <Link color="brand.500">Kevin (1000000)</Link>
                                            </NavLink>
                                        </Td>
                                        <Td>Student 1 (S1)</Td>
                                        <Td>WIII_TWR until 30 Aug 2022</Td>
                                        <Td>
                                            <Menu>
                                                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                                                    Actions
                                                </MenuButton>
                                                <MenuList>
                                                    <MenuItem>
                                                        <NavLink href="/training/1000000" passHref>
                                                            <Link>View</Link>
                                                        </NavLink>
                                                    </MenuItem>
                                                    <MenuItem
                                                        onClick={() => {
                                                            onOpen()
                                                            setStudentData({
                                                                id: "1000000",
                                                                name: "Kevin",
                                                            })
                                                        }}
                                                    >Issue solo</MenuItem>
                                                </MenuList>
                                            </Menu>
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td>
                                            <NavLink href="/profile/1000001" passHref>
                                                <Link color="brand.500">Stuart (1000001)</Link>
                                            </NavLink>
                                        </Td>
                                        <Td>Student 2 (S2)</Td>
                                        <Td>-</Td>
                                        <Td>
                                            <Menu>
                                                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                                                    Actions
                                                </MenuButton>
                                                <MenuList>
                                                    <MenuItem>
                                                        <NavLink href="/training/1000001" passHref>
                                                            <Link>View</Link>
                                                        </NavLink>
                                                    </MenuItem>
                                                    <MenuItem
                                                        onClick={() => {
                                                            onOpen()
                                                            setStudentData({
                                                                id: "1000001",
                                                                name: "Stuart",
                                                            })
                                                        }}
                                                    >Issue solo</MenuItem>
                                                </MenuList>
                                            </Menu>
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td>
                                            <NavLink href="/profile/1000002" passHref>
                                                <Link color="brand.500">King Bob (1000002)</Link>
                                            </NavLink>
                                        </Td>
                                        <Td>Student 1 (S1)</Td>
                                        <Td>-</Td>
                                        <Td>
                                            <Menu>
                                                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                                                    Actions
                                                </MenuButton>
                                                <MenuList>
                                                    <MenuItem>
                                                        <NavLink href="/training/1000002" passHref>
                                                            <Link>View</Link>
                                                        </NavLink>
                                                    </MenuItem>
                                                    <MenuItem
                                                        onClick={() => {
                                                            onOpen()
                                                            setStudentData({
                                                                id: "1000002",
                                                                name: "King Bob",
                                                            })
                                                        }}
                                                    >Issue solo</MenuItem>
                                                </MenuList>
                                            </Menu>
                                        </Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>
                        : <Center h={"100%"} w={"100%"} my="1em" px="15px" py="10px">You don&apos;t have any student assigned to you yet.</Center>
                }
            </Card>

            {/* Show modal */}
            {modal}
        </>
    );
};

export default MyStudent;