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
    Center,
} from '@chakra-ui/react'
import Card from "@components/card/Card";
import NavLink from "next/link"
import { useState } from 'react';

const TrainingHistory = ({ viewingMyself = false }: { viewingMyself?: boolean }) => {
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
                    Training History
                </Text>
                <Button colorScheme={"blue"} onClick={() => setShowMePls(true)}>Show example pls.</Button>
            </Flex>

            {
                showMePls
                    ? <TableContainer>
                        <Table variant='simple'>
                            <Thead>
                                <Tr>
                                    <Th>#</Th>
                                    <Th>Mentor</Th>
                                    <Th>Date and time (UTC)</Th>
                                    <Th>Actions</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>123</Td>
                                    <Td>
                                        <NavLink href="/profile/1000000" passHref>
                                            <Link color="brand.500">Kevin (1000000)</Link>
                                        </NavLink>
                                    </Td>
                                    <Td>30 Aug 2022 12:00 - 30 Aug 2022 14:00</Td>
                                    <Td>
                                        <NavLink href="/admin/training/detail/abcd" passHref>
                                            <Button as="a" colorScheme="blue">View</Button>
                                        </NavLink>
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td>123</Td>
                                    <Td>
                                        <NavLink href="/profile/1000000" passHref>
                                            <Link color="brand.500">Kevin (1000000)</Link>
                                        </NavLink>
                                    </Td>
                                    <Td>30 Aug 2022 12:00 - 30 Aug 2022 14:00</Td>
                                    <Td>
                                        <NavLink href="/admin/training/detail/abcd" passHref>
                                            <Button as="a" colorScheme="blue">View</Button>
                                        </NavLink>
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td>123</Td>
                                    <Td>
                                        <NavLink href="/profile/1000000" passHref>
                                            <Link color="brand.500">Kevin (1000000)</Link>
                                        </NavLink>
                                    </Td>
                                    <Td>30 Aug 2022 12:00 - 30 Aug 2022 14:00</Td>
                                    <Td>
                                        <NavLink href="/admin/training/detail/abcd" passHref>
                                            <Button as="a" colorScheme="blue">View</Button>
                                        </NavLink>
                                    </Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
                    : <Center h={"100%"} w={"100%"} my="2em">
                        {viewingMyself ? "You don't" : "This student doesn't"} have any training record.
                    </Center>
            }
        </Card>
    );
};

export default TrainingHistory;