import { useColorModeValue, VStack, Text, Box, Link, Table, Tbody, Td, Th, Thead, Tr, Button } from "@chakra-ui/react";
import Card from "@components/card/Card";
import AdminLayout from "@layouts/admin";
import NavLink from 'next/link';
import { ReactElement } from "react";

const FeedbackList = () => {
    const textColor = useColorModeValue("secondaryGray.900", "white");

    return (
            <VStack spacing={"20px"} align="stretch">
                <Text color={textColor} fontSize="2xl" ms="24px" fontWeight="700">
                    Feedback list
                </Text>

                <Card>
                    <Box overflowX={"auto"}>
                        <Table variant='simple'>
                            <Thead>
                                <Tr>
                                    <Th>Controller</Th>
                                    <Th>Position</Th>
                                    <Th>Rating</Th>
                                    <Th>Comments</Th>
                                    <Th>Created at</Th>
                                    <Th>Status</Th>
                                    <Th></Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>
                                        <NavLink href="/profile/1000000" passHref>
                                            <Link color="brand.500">Otto (1000004)</Link>
                                        </NavLink>
                                    </Td>
                                    <Td>WIII_TWR</Td>
                                    <Td>5</Td>
                                    <Td>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat tempora assumenda fugiat! Earum pariatur voluptatum perferendis a nam eum cupiditate sed molestias nobis, eaque rerum iste quidem delectus, in vero?</Td>
                                    <Td>20 Aug 2022 13:00</Td>
                                    <Td>Not showed</Td>
                                    <Td>
                                        <Button colorScheme='blue'>Show to controller</Button>
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td>
                                        <NavLink href="/profile/1000000" passHref>
                                            <Link color="brand.500">Otto (1000004)</Link>
                                        </NavLink>
                                    </Td>
                                    <Td>WIII_TWR</Td>
                                    <Td>5</Td>
                                    <Td>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat tempora assumenda fugiat! Earum pariatur voluptatum perferendis a nam eum cupiditate sed molestias nobis, eaque rerum iste quidem delectus, in vero?</Td>
                                    <Td>20 Aug 2022 13:00</Td>
                                    <Td>Showed</Td>
                                    <Td>
                                        <Button colorScheme='red'>Unshow to controller</Button>
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td>
                                        <NavLink href="/profile/1000000" passHref>
                                            <Link color="brand.500">Otto (1000004)</Link>
                                        </NavLink>
                                    </Td>
                                    <Td>WIII_TWR</Td>
                                    <Td>5</Td>
                                    <Td>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat tempora assumenda fugiat! Earum pariatur voluptatum perferendis a nam eum cupiditate sed molestias nobis, eaque rerum iste quidem delectus, in vero?</Td>
                                    <Td>20 Aug 2022 13:00</Td>
                                    <Td>Not showed</Td>
                                    <Td>
                                        <Button colorScheme='blue'>Show to controller</Button>
                                    </Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </Box>
                </Card>

            </VStack>
    );
};

FeedbackList.getLayout = (page: ReactElement) => <AdminLayout title="Feedback List">{page}</AdminLayout>
export default FeedbackList;