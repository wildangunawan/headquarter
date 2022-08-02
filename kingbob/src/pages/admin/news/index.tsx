import { VStack, Text, useColorModeValue, Link, Button, Table, Tbody, Td, Th, Thead, Tr, Box, Flex, HStack } from "@chakra-ui/react";
import Card from "@components/card/Card";
import AdminLayout from "@layouts/admin";
import NavLink from "next/link"

const NewsList = () => {
    const textColor = useColorModeValue("secondaryGray.900", "white");

    return (
        <AdminLayout title="News List">
            <VStack spacing={"20px"} align="stretch">
                {/* Header */}
                <Flex align="center" justify="space-between">
                    <Text color={textColor} fontSize="2xl" ms="24px" fontWeight="700">
                        News List
                    </Text>
                    <NavLink href="/admin/news/add" passHref>
                        <Button as="a" colorScheme="blue">Add News</Button>
                    </NavLink>
                </Flex>

                {/* Content */}
                <Card>
                    <Box>
                        <Table variant='simple'>
                            <Thead>
                                <Tr>
                                    <Th>#</Th>
                                    <Th>Title</Th>
                                    <Th>Created at</Th>
                                    <Th>Actions</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>123</Td>
                                    <Td>Lorem, ipsum dolor.</Td>
                                    <Td>30 Aug 2022 12:00</Td>
                                    <Td>
                                        <NavLink href="/admin/news/abcd" passHref>
                                            <Button as="a" colorScheme="blue">View</Button>
                                        </NavLink>
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td>123</Td>
                                    <Td>Lorem, ipsum dolor.</Td>
                                    <Td>30 Aug 2022 12:00</Td>
                                    <Td>
                                        <HStack spacing={1}>
                                            <NavLink href="/admin/news/abcd" passHref>
                                                <Button as="a" colorScheme="blue">View</Button>
                                            </NavLink>
                                            <NavLink href="/admin/news/abcd/edit" passHref>
                                                <Button as="a" colorScheme="yellow">Edit</Button>
                                            </NavLink>
                                            <Button colorScheme="red">Delete</Button>
                                        </HStack>
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td>123</Td>
                                    <Td>Lorem, ipsum dolor.</Td>
                                    <Td>30 Aug 2022 12:00</Td>
                                    <Td>
                                        <NavLink href="/admin/news/abcd" passHref>
                                            <Button as="a" colorScheme="blue">View</Button>
                                        </NavLink>
                                    </Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </Box>
                </Card>
            </VStack>
        </AdminLayout>
    );
};

export default NewsList;