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
} from '@chakra-ui/react'
import Card from "@components/card/Card";
import NavLink from "next/link"
import { useState } from 'react';

const PastTraining = () => {
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
                    Past Training
                </Text>
                <Button colorScheme={"blue"} onClick={() => setShowMePls(true)}>Show example pls.</Button>
            </Flex>

            <TableContainer>
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th>Student</Th>
                            <Th>Rating</Th>
                            <Th>Mentor</Th>
                            <Th>Date and time</Th>
                            <Th>Action</Th>
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
                                    <Td>
                                        <NavLink href="/admin/profile/1000000" passHref>
                                            <Link color="brand.500">Kevin (1000000)</Link>
                                        </NavLink>
                                    </Td>
                                    <Td>31 Aug 2022 13:00 UTC</Td>
                                    <Td><Button colorScheme="blue">View</Button></Td>
                                </Tr>
                            </>
                        }
                    </Tbody>
                </Table>
            </TableContainer>
        </Card >
    );
};

export default PastTraining;