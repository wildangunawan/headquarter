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
    Checkbox,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
} from '@chakra-ui/react'
import Card from "@components/card/Card";
import NavLink from "next/link"
import { useState } from 'react';
import PromoteAsExaminer from '../modal/PromoteAsExaminer';

const ExaminerList = () => {
    const textColor = useColorModeValue("secondaryGray.900", "white");

    // State
    const [showMePls, setShowMePls] = useState(false);

    // Modal
    const { onOpen, modal, setMemberData, setPermissions } = PromoteAsExaminer();

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
                        Examiner List
                    </Text>
                    <Button colorScheme={"blue"} onClick={() => setShowMePls(true)}>Show example pls.</Button>
                </Flex>

                <TableContainer>
                    <Table variant='simple'>
                        <Thead>
                            <Tr>
                                <Th rowSpan={2}>Name</Th>
                                <Th rowSpan={2}>Rating</Th>
                                <Th rowSpan={2} textTransform={"inherit"}>vACC / Division</Th>
                                <Th colSpan={3}>Can examine</Th>
                                <Th rowSpan={2}>Actions</Th>
                            </Tr>
                            <Tr>
                                <Th>S2</Th>
                                <Th>S3</Th>
                                <Th>C1</Th>
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
                                        <Td>Enroute Controller (C1)</Td>
                                        <Td>Indonesia vACC</Td>
                                        <Td><Checkbox isChecked /></Td>
                                        <Td><Checkbox isChecked={false} /></Td>
                                        <Td><Checkbox isChecked={false} /></Td>
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
                                                                name: "Kevin"
                                                            });
                                                            setPermissions({
                                                                s2: true,
                                                                s3: false,
                                                                c1: false
                                                            });
                                                            onOpen();
                                                        }}
                                                    >Update permissions</MenuItem>
                                                    <MenuItem>Remove from examiner list</MenuItem>
                                                </MenuList>
                                            </Menu>
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td>
                                            <NavLink href="/admin/profile/1000001" passHref>
                                                <Link color="brand.500">King Bob (1000003)</Link>
                                            </NavLink>
                                        </Td>
                                        <Td>Instructor 1 (I1)</Td>
                                        <Td>Malaysia vACC</Td>
                                        <Td><Checkbox isChecked /></Td>
                                        <Td><Checkbox isChecked /></Td>
                                        <Td><Checkbox isChecked /></Td>
                                        <Td>
                                            <Menu>
                                                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                                                    Actions
                                                </MenuButton>
                                                <MenuList>
                                                    <MenuItem
                                                        onClick={() => {
                                                            setMemberData({
                                                                id: "1000003",
                                                                name: "King Bob"
                                                            });
                                                            setPermissions({
                                                                s2: true,
                                                                s3: true,
                                                                c1: true
                                                            });
                                                            onOpen();
                                                        }}
                                                    >Update permissions</MenuItem>
                                                    <MenuItem>Remove from examiner list</MenuItem>
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

            {/* Modal */}
            {modal}
        </>
    );
};

export default ExaminerList;