import { Flex, Link, Button, TableContainer, Table, Thead, Tr, Th, Tbody, Td, ButtonGroup, Center, Text, useColorModeValue } from '@chakra-ui/react';
import Card from '@components/card/Card';
import NavLink from 'next/link';

const PendingTickets = () => {
    const textColor = useColorModeValue("secondaryGray.900", "white");

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
                    Pending Tickets
                </Text>
            </Flex>

            <TableContainer>
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th>Subject</Th>
                            <Th>Created by</Th>
                            <Th>Assigned to</Th>
                            <Th>Last Updated</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>
                                <NavLink href="/admin/support/help" passHref>
                                    <Link color="brand.500">Help! I&apos;m under the water</Link>
                                </NavLink>
                            </Td>
                            <Td>
                                <NavLink href="/profile/1000000" passHref>
                                    <Link color="brand.500">Kevin (1000000)</Link>
                                </NavLink>
                            </Td>
                            <Td>South East Asia Staff</Td>
                            <Td>2 Aug 2022 02:00</Td>
                        </Tr>
                        <Tr>
                            <Td>
                                <NavLink href="/admin/support/help" passHref>
                                    <Link color="brand.500">Help! I&apos;m under the water</Link>
                                </NavLink>
                            </Td>
                            <Td>
                                <NavLink href="/profile/1000000" passHref>
                                    <Link color="brand.500">Kevin (1000000)</Link>
                                </NavLink>
                            </Td>
                            <Td>South East Asia Staff</Td>
                            <Td>2 Aug 2022 02:00</Td>
                        </Tr>
                        <Tr>
                            <Td>
                                <NavLink href="/admin/support/help" passHref>
                                    <Link color="brand.500">Help! I&apos;m under the water</Link>
                                </NavLink>
                            </Td>
                            <Td>
                                <NavLink href="/profile/1000000" passHref>
                                    <Link color="brand.500">Kevin (1000000)</Link>
                                </NavLink>
                            </Td>
                            <Td>South East Asia Staff</Td>
                            <Td>2 Aug 2022 02:00</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </Card>
    );
};

export default PendingTickets;