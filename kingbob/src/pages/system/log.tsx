import { Link, Table, Thead, Tr, Th, Tbody, Td, Box, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import Card from "@components/card/Card";
import AdminLayout from "@layouts/admin";
import NavLink from "next/link";

const SystemLog = () => {
    const textColor = useColorModeValue("secondaryGray.900", "white");

    return (
        <AdminLayout title="System Log">
            <VStack spacing={"20px"} align="stretch">
                <Text color={textColor} fontSize="2xl" ms="24px" fontWeight="700">
                    System Log
                </Text>

                <Card>
                    <Box overflowX={"auto"}>
                        <Table variant='simple'>
                            <Thead>
                                <Tr>
                                    <Th>Action</Th>
                                    <Th>By</Th>
                                    <Th>Timestamp</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>
                                        <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, delectus!</Text>
                                    </Td>
                                    <Td>
                                        <NavLink href="/profile/1000005" passHref>
                                            <Link color="brand.500">Gru (1000005)</Link>
                                        </NavLink>
                                    </Td>
                                    <Td>31 Aug 2022 13:00 UTC</Td>
                                </Tr>
                                <Tr>
                                    <Td>
                                        <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, delectus!</Text>
                                    </Td>
                                    <Td>
                                        <NavLink href="/profile/1000005" passHref>
                                            <Link color="brand.500">Gru (1000005)</Link>
                                        </NavLink>
                                    </Td>
                                    <Td>31 Aug 2022 13:00 UTC</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </Box>
                </Card>
            </VStack>
        </AdminLayout>
    );
};

export default SystemLog;