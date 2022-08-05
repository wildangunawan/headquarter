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
} from '@chakra-ui/react'
import Card from "@components/card/Card";
import NavLink from "next/link"
import { useState } from 'react';

const MentorList = () => {
    const textColor = useColorModeValue("secondaryGray.900", "white");

    // State
    const [showMePls, setShowMePls] = useState(false);

    return (
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
                    Instructor/Mentor List
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
                            <Th colSpan={3}>Can mentor</Th>
                            <Th rowSpan={2}>Can issue solo</Th>
                        </Tr>
                        <Tr>
                            <Th>S1</Th>
                            <Th>S2</Th>
                            <Th>S3</Th>
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
                                    <Td><Checkbox isChecked /></Td>
                                    <Td><Checkbox isChecked /></Td>
                                    <Td><Checkbox isChecked /></Td>
                                </Tr>
                                <Tr>
                                    <Td>
                                        <NavLink href="/admin/profile/1000001" passHref>
                                            <Link color="brand.500">Stuart (1000001)</Link>
                                        </NavLink>
                                    </Td>
                                    <Td>Enroute Controller (C1)</Td>
                                    <Td>Malaysia vACC</Td>
                                    <Td><Checkbox isChecked /></Td>
                                    <Td><Checkbox isChecked={false} /></Td>
                                    <Td><Checkbox isChecked={false} /></Td>
                                    <Td><Checkbox isChecked={false} /></Td>
                                </Tr>
                            </>
                        }
                    </Tbody>
                </Table>
            </TableContainer>
        </Card>
    );
};

export default MentorList;